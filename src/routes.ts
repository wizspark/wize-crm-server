import {getAccounts} from "./controller/accounts/index";
import {getLeads, getLeadCompanies, getLeadCompanyScores} from "./controller/leads/index";
import {getOpportunities} from "./controller/opportunities/index";
import {getServerHealth} from './controller/index';

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: getServerHealth
    },
    {
        path: "/accounts",
        method: "get",
        action: getAccounts
    },
    {
        path: "/leads",
        method: "get",
        action: getLeads
    },
    {
        path: "/leads/company-list",
        method: "get",
        action: getLeadCompanies
    },
    {
        path: "/leads/company-scores",
        method: "get",
        action: getLeadCompanyScores
    },
    {
        path: "/opportunities",
        method: "get",
        action: getOpportunities
    }
];