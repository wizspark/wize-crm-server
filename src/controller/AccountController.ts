import {Context} from "koa";
import {Account} from "../entity/Account";
import {IFindOptions} from "sequelize-typescript";

export class AccountController {
    /**
     * Get all accounts
     * @param context
     * @returns {Promise<void>}
     */
    get = async(context: Context): Promise<any> => {
        // return loaded accounts
        context.body = await Account.findAndCountAll();
    };

    /**
     * Create new account
     * @param context
     * @returns {Promise<void>}
     */
    post = async(context: Context): Promise<any> => {
        const {body} = context.request;
        context.body = await Account.create(body);
    };

    /**
     * Update an account
     * @param context
     * @returns {Promise<void>}
     */
    patch = async(context: Context): Promise<any> => {
        const {body} = context.request;
        const {id} = context.params;

        const account = await Account.findOne({where: id});
        context.assert(account, 404, 'Account not found');

        context.body = await account.updateAttributes(body);
    };

    /**
     * Delete an account
     * @param context
     * @returns {Promise<void>}
     */
    destroy = async(context: Context): Promise<any> => {
        const {id} = context.params;

        context.body = Account.destroy({where: id});
    }
}