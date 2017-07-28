import * as customerRating from "soap";

const soapUrl = "http://demo.wizni.com/CustomerRating.asmx?wsdl";

function getClient(options: any) {
    return new Promise((resolve, reject) => {
        customerRating.createClient(soapUrl, options, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}

export async function executeRequest(operation: string, body?: any) {
    const client = await getClient({});
    return new Promise((resolve, reject) => {
        client[operation](body, function (err, result) {
            if (err) reject(err);
            else resolve(result);
        })
    })
}