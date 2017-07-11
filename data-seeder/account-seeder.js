import Source from "../sources/postgresql";
import moment from 'moment';

const accountData = require('./accounts.json');
const opportunityData = require('./opportunities.json');

const getOpportunities = (accountName) => {
  return opportunityData.filter(record => record.accountName == accountName);
};

const accountSeeder = async() => {
  try {
    const {Account, Opportunity} = Source.sequelize.models;
    let accounts = await Account.findAll({});
    if (accounts.length === 0) {
      await Account.bulkCreate(accountData);
      accounts = await Account.findAll({});
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
      Opportunity.bulkCreate(records);
    }
  } catch (e) {
    console.error(`Error while seeding accounts and opportunities: ${e}`);
  }
};

export default accountSeeder;
