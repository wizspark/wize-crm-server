import {AccountController} from "./controller/AccountController";
import {LeadController} from "./controller/LeadController";
import {OpportunityController} from "./controller/OpportunityController";
import {DefaultController} from './controller/DefaultController';
import {IndustryController} from "./controller/IndustryController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: new DefaultController().get
    },
    {
        path: "/industries",
        method: "get",
        action: new IndustryController().get
    },
    {
        path: "/industries/:id",
        method: "patch",
        action: new IndustryController().patch
    },
    {
        path: "/industries",
        method: "post",
        action: new IndustryController().post
    },
    {
        path: "/industries/:id",
        method: "delete",
        action: new IndustryController().destroy
    },
    {
        path: "/accounts",
        method: "get",
        action: new AccountController().get
    },
    {
        path: "/accounts/:id",
        method: "patch",
        action: new AccountController().patch
    },
    {
        path: "/accounts",
        method: "post",
        action: new AccountController().post
    },
    {
        path: "/accounts/:id",
        method: "delete",
        action: new AccountController().destroy
    },
    {
        path: "/leads",
        method: "get",
        action: new LeadController().get
    },
    {
        path: "/leads/company-list",
        method: "get",
        action: new LeadController().getLeadCompanies
    },
    {
        path: "/leads/company-scores",
        method: "get",
        action: new LeadController().getCompanyScores
    },
    {
        path: "/opportunities",
        method: "get",
        action: new OpportunityController().get
    }
];