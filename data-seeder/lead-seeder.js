import Source from "../sources/postgresql";

const leadData = require('./data/leads.json');

const leadSeeder = async() => {
  try {
    const {Lead} = Source.sequelize.models;
    let leads = await Lead.findAll({});
    if (leads.length === 0) {
      console.log(`Inserting ${leadData.length} leads`)
      await Lead.bulkCreate(leadData);
    } else {
      console.log(`Leads are already present in DB, aborting`);
    }
  } catch (e) {
    console.error(`Error while creating leads: ${e}`);
  }
};

export default leadSeeder;
