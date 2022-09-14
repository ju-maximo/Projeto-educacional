const express = require('express');
const cors = require('cors');
require ('dotenv-safe').config();
const app = express();

const db = require('./database/config.js');
const userRoutes = require('./routes/usersRoutes');

db.connect () 

app.use(cors ())
app.use(express.json())
app.use("/users", userRoutes)


module.exports = app