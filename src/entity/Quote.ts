class DebtType {
    id: number;
    rateFactor: number;
    numOfPayments: number;
    futureValue: number;
    type: number;
    principalField: string;
    invert: boolean;
    calculate: boolean;
}

class LiquidityType {
    id: number;
    type: string;
    postRetirementBenefit: boolean;
    invert: boolean;
}

class Setting {
    id: number;
    key: string;
    value: string;
}

enum CreditScoreType {
    Bad,
    Poor,
    Fair,
    Good,
    Excellent
}

class CreditScoreRange {
    id: number;
    min: number;
    max: number;
    type: CreditScoreType
}

class Product {
    id: number;
    code: string;
    description: string;
    rate: number;
    savingsRate: number;
    savingsTerm: number;
    savingsFactor: number;
    term: number;
    isActive: boolean;
}

class Helper {
    debtTypes: DebtType[];
    liquidityTypes: LiquidityType[];
    products: Product[];
    settings: Setting[];
    creditScoreRanges: CreditScoreRange[];

    pmt: string = `function pmt(rate, nperiod, pv, fv, type) {
                        if (!fv) fv = 0;
                        if (!type) type = 0;
                        if (rate === 0) return -(pv + fv) / nperiod;
                        const pvIf = Math.pow(1 + rate, nperiod);
                        let pmt = rate / (pvIf - 1) * -(pv * pvIf + fv);
                        if (type === 1) {
                           pmt /= 1 + rate;
                        }
                        return pmt;
                    }`;
    getAge: string = `function getAge(dateString) {
                        const today = new Date();
                        const birthDate = new Date(dateString);
                        let age = today.getFullYear() - birthDate.getFullYear();    
                        let m = today.getMonth() - birthDate.getMonth();    
                        if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {        
                            age--;    
                        }    
                        return age;
                    }`;

    sum: string = `function sum(items, prop) {    
                        return items.reduce(function (a, b) {
                            return a + b[prop];
                        }, 0);
                    }`;

    pmtFn: any = eval(`(${this.pmt})`);
    getAgeFn: any = eval(`(${this.getAge})`);
    sumFn: any = eval(`(${this.sum})`);

    get taxRate(): number {
        return Number(this.settings.filter(setting => setting.key === 'TAX_RATE')[0]);
    }
}

class QuoteDebt {
    id: number;
    rateFactor: number;
    numOfPayments: number;
    futureValue: number;
    type: number;
    principalField: string;
    invert: boolean;
    total: number;
    calculate: boolean;

    get monthly(): number {
        if (this.calculate)
            return this.rateFactor === 0
                ? this.total / 12
                : (this.invert ? -1 : 1) * new Helper().pmtFn(this.rateFactor / 12, this.numOfPayments, this.total, this.futureValue, this.type);
        return 0;
    }

    get annual(): number {
        if (this.calculate)
            return this.monthly * 12;
        return 0;
    }
}

class QuoteLiquidity {
    id: number;
    type: string;
    postRetirementBenefit: boolean;
    invert: boolean;
    total: number;

    get effectiveTotal(): number {
        return this.invert ? -1 * this.total : this.total;
    }
}

class QuoteIncome {
    private _taxRate: number;
    id: number;
    type: string;
    annualAmount: number;

    constructor(taxrate: number) {
        this._taxRate = taxrate;
    }

    get monthlyAmount(): number {
        return this.annualAmount / 12;
    }

    get monthlyTax(): number {
        return this.monthlyAmount * this._taxRate;
    }

    get annualTax(): number {
        return this.monthlyTax * 12;
    }
}

class QuoteProduct {
    private _loanAmount: number;
    private _monthlyDebt: number;
    private _monthlyIncome: number;
    id: number;
    code: string;
    description: string;
    rate: number;
    savingsRate: number;
    savingsTerm: number;
    savingsFactor: number;
    term: number;
    isActive: boolean;
    isPreferred: boolean;

    constructor(loanAmount: number, monthlyDebt: number, monthlyIncome: number) {
        this._loanAmount = loanAmount;
        this._monthlyDebt = monthlyDebt;
        this._monthlyIncome = monthlyIncome;
    }

    get monthlyPayment(): number {
        return -1 * new Helper().pmtFn(this.rate / 12, this.term * 12, this._loanAmount, 0, 0);
    }

    get savingsInInterest(): number {
        return (-1 * new Helper().pmtFn(this.savingsRate / 12, this.savingsTerm, this._loanAmount, 0, 0) * this.savingsFactor)
            - (this.monthlyPayment * this.term * 12);
    }

    get dti(): number {
        return (this.monthlyPayment + this._monthlyDebt) / this._monthlyIncome;
    }

    get residualIncome(): number {
        return this._monthlyIncome - this._monthlyDebt - this.monthlyPayment;
    }

    get residualIncomePerPayment(): number {
        return this.residualIncome / this.monthlyPayment;
    }
}

export class Prospect {
    id: number;
    birthDate?: Date;
}

export class QuoteBorrower {
    id: number;
}

export class Quote {
    id: number;
    quoteId: number;
    loanAmount: number;
    taxRate: number = new Helper().taxRate;
    educationDebt: number;
    QuoteBorrowers: QuoteBorrower[];
    QuoteDebts: QuoteDebt[];
    QuoteLiquidities: QuoteLiquidity[];
    QuoteIncomes: QuoteIncome[];
    QuoteProducts: QuoteProduct[];
    Prospect: Prospect;
    retired: boolean;

    get totalDebt(): number {
        return new Helper().sumFn(this.QuoteDebts, 'total');
    }

    get monthlyDebt(): number {
        return new Helper().sumFn(this.QuoteDebts, 'monthly');
    }

    get annualDebt(): number {
        return new Helper().sumFn(this.QuoteDebts, 'annual');
    }

    get netLiquidity(): number {
        return new Helper().sumFn(this.QuoteLiquidities, 'effectiveTotal');
    }

    get pctOfTotalEducationDebt(): number {
        return this.netLiquidity / (this.loanAmount + this.educationDebt)
    }

    get netMonthlyIncome(): number {
        return new Helper().sumFn(this.QuoteIncomes, 'monthlyAmount') - new Helper().sumFn(this.QuoteIncomes, 'monthlyTax')
    }

    get netAnnualIncome(): number {
        return new Helper().sumFn(this.QuoteIncomes, 'annualAmount') - new Helper().sumFn(this.QuoteIncomes, 'annualTax')
    }
}