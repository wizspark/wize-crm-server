require('babel-register');

const seedData = require('./run').default;

const authenticateAndStart = ()=>{
  const Source = require('../sources/postgresql').default;
  if(!Source.invalid) {
    const createModels = require('../models').default;
    Source.authenticate().then(function() {
      console.info('Connected to DB...');
      createModels(!!null, !!null).then(function(){
        try{
          seedData();
        } catch(ex){
          console.error(`Error while seeding data: ${ex.message}`);
          throw ex;
        }
      });
    }).catch(function(error){
      console.error(error);
      console.error('Not Connected trying again...');
      setTimeout(authenticateAndStart, 2000);
    })
  } else {
    seedData();
  }
};
authenticateAndStart();