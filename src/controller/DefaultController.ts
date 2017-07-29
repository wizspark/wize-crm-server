import {Context} from "koa";

export class DefaultController{

    /**
     * Checks server health
     * @param context
     */
    get = (context: Context): void => {
        context.body = "API Server OK";
    }
}