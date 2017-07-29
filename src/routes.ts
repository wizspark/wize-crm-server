import {AccountController} from "./controller/AccountController";
import {LeadController} from "./controller/LeadController";
import {OpportunityController} from "./controller/OpportunityController";
import {DefaultController} from './controller/DefaultController';
import {IndustryController} from "./controller/IndustryController";
import {PhoneTypeController} from "./controller/PhoneTypeController";
import {LeadStatusTypeController} from "./controller/LeadStatusTypeController";
import {LeadSourceTypeController} from "./controller/LeadSourceTypeController";
import {LeadPhoneController} from "./controller/LeadPhoneController";

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
        method: "get",
        action: new IndustryController().getById
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
        method: "get",
        action: new AccountController().getById
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
        path: "/leads/:id",
        method: "get",
        action: new LeadController().getById
    },
    {
        path: "/leads/:id",
        method: "patch",
        action: new LeadController().patch
    },
    {
        path: "/leads",
        method: "post",
        action: new LeadController().post
    },
    {
        path: "/leads/:id",
        method: "delete",
        action: new LeadController().destroy
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
    },
    {
        path: "/opportunities/:id",
        method: "get",
        action: new OpportunityController().getById
    },
    {
        path: "/opportunities/:id",
        method: "patch",
        action: new OpportunityController().patch
    },
    {
        path: "/opportunities",
        method: "post",
        action: new OpportunityController().post
    },
    {
        path: "/opportunities/:id",
        method: "delete",
        action: new OpportunityController().destroy
    },
    {
        path: "/leadphones",
        method: "get",
        action: new LeadPhoneController().get
    },
    {
        path: "/leadphones/:id",
        method: "get",
        action: new LeadPhoneController().getById
    },
    {
        path: "/leadphones/:id",
        method: "patch",
        action: new LeadPhoneController().patch
    },
    {
        path: "/leadphones",
        method: "post",
        action: new LeadPhoneController().post
    },
    {
        path: "/leadphones/:id",
        method: "delete",
        action: new LeadPhoneController().destroy
    },
    {
        path: "/leadsourcetypes",
        method: "get",
        action: new LeadSourceTypeController().get
    },
    {
        path: "/leadsourcetypes/:id",
        method: "get",
        action: new LeadSourceTypeController().getById
    },
    {
        path: "/leadsourcetypes/:id",
        method: "patch",
        action: new LeadSourceTypeController().patch
    },
    {
        path: "/leadsourcetypes",
        method: "post",
        action: new LeadSourceTypeController().post
    },
    {
        path: "/leadsourcetypes/:id",
        method: "delete",
        action: new LeadSourceTypeController().destroy
    },
    {
        path: "/leadstatustypes",
        method: "get",
        action: new LeadStatusTypeController().get
    },
    {
        path: "/leadstatustypes/:id",
        method: "get",
        action: new LeadStatusTypeController().getById
    },
    {
        path: "/leadstatustypes/:id",
        method: "patch",
        action: new LeadStatusTypeController().patch
    },
    {
        path: "/leadstatustypes",
        method: "post",
        action: new LeadStatusTypeController().post
    },
    {
        path: "/leadstatustypes/:id",
        method: "delete",
        action: new LeadStatusTypeController().destroy
    },
    {
        path: "/phonetypes",
        method: "get",
        action: new PhoneTypeController().get
    },
    {
        path: "/phonetypes/:id",
        method: "get",
        action: new PhoneTypeController().getById
    },
    {
        path: "/phonetypes/:id",
        method: "patch",
        action: new PhoneTypeController().patch
    },
    {
        path: "/phonetypes",
        method: "post",
        action: new PhoneTypeController().post
    },
    {
        path: "/phonetypes/:id",
        method: "delete",
        action: new PhoneTypeController().destroy
    },
];