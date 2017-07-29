import {Account} from "../entity/Account";
import {BaseController} from "./BaseController";

export class AccountController extends BaseController {
    constructor() {
        super(Account);
    }
}