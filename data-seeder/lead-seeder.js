import Source from "../sources/postgresql";

const leadData = require('./leads.json');

const leadSeeder = async() => {
  try {
    const {Lead} = Source.sequelize.models;
    let leads = await Lead.findAll({});
    if (leads.length === 0) {
      await Lead.bulkCreate(leadData);
    }
  } catch (e) {
    console.error(`Error while creating leads: ${e}`);
  }
};

export default leadSeeder;
