import soap from 'soap';
    
const getClient = (options) => {
    return new Promise((resolve, reject) => {
        soap.createClient('http://demo.wizni.com/CustomerRating.asmx?wsdl', options, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

const executeSoap = (client, operation, body) => {
    return new Promise((resolve, reject) => {
        client[operation](body, function (err, result) {
            if (err) reject(err);
            else resolve(result);
        })
    })
}


export const GetCompaniesList = async (body) => {
    let client = await getClient({});
    let results = await executeSoap(client, 'GetCompaniesList', body);
    return results;
}


export const CompanyScore = async (body) => {
    let client = await getClient({});
    let results = await executeSoap(client, 'CompanyScore', body);
    return results;
}

