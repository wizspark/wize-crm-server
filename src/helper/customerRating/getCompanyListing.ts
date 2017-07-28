import * as customerRating from "./index";

export async function getCompanyListing(body?: any) {
    return await customerRating.executeRequest('GetCompaniesList', body);
}