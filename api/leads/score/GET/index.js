//Imports below
import Lead from '../../../../models/lead';
import {GetCompaniesList} from '../../../../functions/soap-rating';
import _ from 'lodash';

export default async (ctx) => {

    // get companies score by calling a webservice
    try {
        let companiesList = await GetCompaniesList();

        if (companiesList && companiesList.GetCompaniesListResult
            && companiesList.GetCompaniesListResult.Company
            && companiesList.GetCompaniesListResult.Company.length > 0) {

            let companyDnBScoreMap = _.keyBy(companiesList.GetCompaniesListResult.Company, o => o.Name);

            let leads = await Lead.findAll({});

            let promises = [];
            _.forEach(leads, (lead) => {
                lead.dnbScore = companyDnBScoreMap[lead.companyName]?companyDnBScoreMap[lead.companyName].DnBScore:null;
                promises.push(lead.save());
            });
            await Promise.all(promises);
            console.log("Leads DnBScore updated successfully");

            ctx.status = 200;

        } else {

            ctx.body = "No data received from soap service";
            ctx.status = 400;
        }
    } catch (err) {
        ctx.body = err.message;
        ctx.status = 400;
    }
}