import {Context} from "koa";
import {Opportunity} from "../entity/Opportunity";

export class OpportunityController {
    /**
     * Get all opportunities
     * @param context
     * @returns {Promise<void>}
     */
    get = async(context: Context): Promise<any> => {
        context.body = await Opportunity.findAndCountAll();
    }
}