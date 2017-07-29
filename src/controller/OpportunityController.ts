import {Opportunity} from "../entity/Opportunity";
import {BaseController} from "./BaseController";

export class OpportunityController extends BaseController {
    constructor() {
        super(Opportunity);
    }
}