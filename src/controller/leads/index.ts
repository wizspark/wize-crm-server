import {Context} from "koa";
import {getEntityManager} from "typeorm";
import {Lead} from "../../entity/Lead";
import {getCompanyListing} from "../../helper/customerRating/getCompanyListing";
import {getCompanyScore} from "../../helper/customerRating/getCompanyScore";

/**
 * Loads all leads from the database.
 */
export async function getLeads(context: Context) {

    // get a lead repository to perform operations with lead
    const leadRepository = getEntityManager().getRepository(Lead);

    // load a lead by a given lead id
    const leads = await leadRepository.find();

    // return loaded opportunities
    context.body = leads;
}

/*
* Get Companies Listing from soap service
* */
export async function getLeadCompanies(context: Context) {
    context.body = await getCompanyListing();
}

/*
 * Get Companies Scores from soap service
 * */
export async function getLeadCompanyScores(context: Context) {
    context.body = await getCompanyScore();
}