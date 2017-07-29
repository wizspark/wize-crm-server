import {Context} from "koa";
import {Lead} from "../entity/Lead";
import {getCompanyListing} from "../helper/customerRating/getCompanyListing";
import {getCompanyScore} from "../helper/customerRating/getCompanyScore";
import {BaseController} from "./BaseController";

export class LeadController extends BaseController {
    constructor() {
        super(Lead);
    }

    /**
     * Get lead company listing
     * @param context
     * @returns {Promise<void>}
     */
    getLeadCompanies = async(context: Context): Promise<any> => {
        context.body = getCompanyListing();
    };

    /**
     * Get company scores
     * @param context
     * @returns {Promise<void>}
     */
    getCompanyScores = async(context: Context): Promise<any> => {
        context.body = await getCompanyScore();
    };
}