import {Context} from "koa";
import {Industry} from "../entity/Industry";

export class IndustryController {
    /**
     * Get all industries
     * @param context
     * @returns {Promise<void>}
     */
    get = async(context: Context): Promise<void> => {
        context.body = await Industry.findAndCountAll();
    };

    /**
     * Create new industry
     * @param context
     * @returns {Promise<void>}
     */
    post = async(context: Context): Promise<any> => {
        const {body} = context.request;
        context.body = await Industry.create(body);
    };

    /**
     * Update an industry
     * @param context
     * @returns {Promise<void>}
     */
    patch = async(context: Context): Promise<any> => {
        const {body} = context.request;
        const {id} = context.params;

        const industry = await Industry.findOne({where: id});
        context.assert(industry, 404, 'Industry not found');

        context.body = await industry.updateAttributes(body);
    };

    /**
     * Delete an industry
     * @param context
     * @returns {Promise<void>}
     */
    destroy = async(context: Context): Promise<any> => {
        const {id} = context.params;

        context.body = Industry.destroy({where: id});
    }
}