import {Context} from "koa";
import {getEntityManager} from "typeorm";
import {Opportunity} from "../../entity/Opportunity";

/**
 * Loads all opportunities from the database.
 */
export async function getOpportunities(context: Context) {

    // get a opportunity repository to perform operations with opportunity
    const opportunityRepository = getEntityManager().getRepository(Opportunity);

    // load a opportunity by a given opportunity id
    const opportunities = await opportunityRepository.find();

    // return loaded opportunities
    context.body = opportunities;
}