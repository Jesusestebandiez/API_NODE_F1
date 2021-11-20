const mongoose = require('mongoose');
const F1Team = require("../app/api/models/F1Team.models");

const dotenv = require('dotenv');
dotenv.config();

const F1team = [
  {
    name: 'McLaren',   
   city: 'Reino Unido',
   color: 'amarillo'
  },
  {
    name: 'Red Bull',   
    city: 'Austria',
    color: 'amarillo, azul y rojo '
  },
  {
    name: 'Ferrari',   
    city: 'Italia',
    color: 'rojo, amarillo y negro '
  },
  {
    name: 'Alpine',   
   city: 'Francia',
   color: 'negro y blanco'
  },
  {
    name: 'Alfa Romeo',   
    city: 'Italia',
    color: 'rojo y blanco'
  },
  {
    name: 'Renault',   
    city: 'Francia',
    color: 'azul y amarillo'
  },
  {
    name: 'AlphaTauri',   
    city: 'Italia',
   color: 'negro y blanco'
  },
  {
    name: 'Willams Racing',   
    city: 'Reino Unido',
    color: 'negro, blanco y azul'
},
  {
    name: 'Aston Martin',
   city: 'Reino Unido',	
   color: 'gris'
  },

];
const F1teamDocuments = F1team.map(F1team => new F1Team(F1team));
mongoose
.connect( "MONGO_DB",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


.then(async () => {
  const allF1Team = await F1Team.find();
  if (allF1Team.length) {
      await Team.collection.drop();
  }
})
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
  await F1Team.insertMany(F1teamDocuments);
  console.log('DatabaseCreated')
})
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());