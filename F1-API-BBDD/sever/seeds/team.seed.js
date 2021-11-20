const mongoose = require('mongoose');
const Team = require("../app/api/models/team.models");

const dotenv = require('dotenv');
dotenv.config();

const team = [
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
    color: 'azul y amarillo',
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
const teamDocuments = team.map(team => new Team(team));
mongoose
    .connect('mongodb+srv://f1:f1@cluster0.mcw6z.mongodb.net/TeamF1?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        const allTeam = await Team.find();
        if (allTeam.length) {
            await Team.collection.drop();
        }
    })
    .catch((err) => console.log(`Error deleting data: ${err}`))
    .then(async () => {
        await Team.insertMany(teamDocuments);
        console.log('DatabaseCreated')
    })
    .catch((err) => console.log(`Error creating data: ${err}`))
    .finally(() => mongoose.disconnect());