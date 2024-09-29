const express = require('express');
const morgan = require("morgan");
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./Config/db');

const app = express();

dotenv.config();

connectDB();

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/user', require('./Routes/userRoutes'))


const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${process.env.DEV_MODE} mode on port ${process.env.PORT}`.bgCyan.white)
})