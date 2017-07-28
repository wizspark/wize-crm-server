import * as customerRating from "./index";

export async function getCompanyScore(body?: any) {
    return await customerRating.executeRequest('CompanyScore', body);
}