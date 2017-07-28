import {Context} from "koa";
import {sendEmail} from "../helper/util/util";

export async function getServerHealth(context: Context) {
    //await sendEmail();
    context.body = "API Server OK";
}