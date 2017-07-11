//Imports below
import Lead from '../../../../../models/lead';
import Account from '../../../../../models/account';
import Opportunity from '../../../../../models/opportunity';

export default async (ctx) => {

    try {
        let leadId = ctx.params.id;

        let lead = await Lead.findById(leadId);

        // check if account exists
        let account = await Account.findOne({where: {accountName: lead.companyName}});
        if (!account) {
            // if not create account
            account = Account.build({
                accountName : lead.companyName,
                owner : lead.leadOwner
            });
            await account.save();
        }

        // create opportunity
        let opportunity = Opportunity.build({
            opportunityName: lead.name,
            owner: lead.leadOwner,
            AccountId: account.id
        });
        await opportunity.save();

        // delete lead
        lead.destroy();

        ctx.status = 200;
    } catch(err) {
        ctx.body = err.message;
        ctx.status = 400;
    }
}