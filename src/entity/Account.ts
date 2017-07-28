import {
    Table, Model, Column, PrimaryKey, AutoIncrement, DataType, BelongsTo, HasMany,
    ForeignKey
} from "sequelize-typescript";
import {Industry} from './Industry';
import {Opportunity} from './Opportunity';

@Table({timestamps: true})
export class Account extends Model<Account> {

    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    name: string;

    @Column
    owner: string;

    @Column(DataType.DOUBLE)
    revenue: number;

    @ForeignKey(() => Industry)
    @Column
    industryId: number;

    @BelongsTo(() => Industry)
    industry: Industry;

    @HasMany(() => Opportunity)
    opportunities: Opportunity[];

}