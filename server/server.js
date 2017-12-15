const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');


const app = express();
// SIMULATION - 1:74C
app.use(bodyParser.json() )
app.use(cors() );

const port = process.env.PORT || 3535;
//SIMULATION - 1: 70C
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.post( '/api/bin', ctrl.create ); 
// SIMULATION - 1: 74D-3
app.get( '/api/bins', ctrl.getAll );
// SIMULATION - 1: 74D-1
app.get( '/api/bin/:id', ctrl.getOne );
// SIMULATION - 1: 74D-1
app.put( '/api/bin/:id', ctrl.update );
// SIMULATION - 1:74D-2
app.delete( '/api/product/:id', ctrl.delete );
// SIMULATION - 1:74D-4

// SIMULATION - 1: 37D
app.listen(port, () => {console.log(`server listening on port${port}`)});