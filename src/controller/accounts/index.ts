import {Context} from "koa";
import {getEntityManager} from "typeorm";
import {Account} from "../../entity/Account";

/**
 * Loads all accounts from the database.
 */
export async function getAccounts(context: Context) {

    // get a account repository to perform operations with account
    const accountRepository = getEntityManager().getRepository(Account);

    // load a account by a given account id
    const accounts = await accountRepository.find();

    // return loaded accounts
    context.body = accounts;
}