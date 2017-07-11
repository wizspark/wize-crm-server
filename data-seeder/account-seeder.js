import Source from "../sources/postgresql";
import moment from 'moment';

const accountData = require('./data/accounts.json');
const opportunityData = require('./data/opportunities.json');

const getOpportunities = (accountName) => {
  return opportunityData.filter(record => record.accountName == accountName);
};

const accountSeeder = async() => {
  try {
    const {Account, Opportunity} = Source.sequelize.models;
    let accounts = await Account.findAll({});
    if (accounts.length === 0) {
      console.log(`Inserting ${accountData.length} accounts`);
      await Account.bulkCreate(accountData);
      accounts = await Account.findAll({});
    } else {
      console.log(`Accounts are already present in DB, aborting`);
    }
    let opportunities = await Opportunity.findAll({});
    if (opportunities.length === 0) {
      let records = [];
      accounts.forEach(account => {
        // Get all opportunities for this account, set AccountId and push to records
        getOpportunities(account.accountName).forEach(item => {
          item.expectedClose = moment(item.expectedClose, 'DD-MM-YYYY').startOf('day').toDate();
          item.AccountId = account.id;
          records.push(item);
        });
      });
      console.log(`Inserting ${records.length} opportunities`);
      Opportunity.bulkCreate(records);
    } else {
      console.log(`Opportunities are already present in DB, aborting`);
    }
  } catch (e) {
    console.error(`Error while seeding accounts and opportunities: ${e}`);
  }
};

export default accountSeeder;
