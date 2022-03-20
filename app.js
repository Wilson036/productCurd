const express = require('express');

const app = express();
const port = 8000;
const connectDb = require('./db/connect');
//Require dotenv
require('dotenv').config();

//req router
const router = require('./routes/product');

//Middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', '*');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }

  next();
});

app.use(express.json());

//Route
app.use('/product', router);

app.get('/', (req, res) => res.send('hello world'));

//Connection
const start = async () => {
  try {
    await connectDb();
    app.listen(port, (req, res) => {
      console.log('You are listening to port :', port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
