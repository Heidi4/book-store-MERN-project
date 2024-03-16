import express from "express" // npm i express nodemon
import { PORT, mongoURL } from "./config.js"
import booksRoute from './routes/booksRoute.js'
import mongoose from 'mongoose'
import cors from 'cors'



const app = express();
app.use(express.json());

// MIDDLEWARE for handling CORS POLICY
// option 1: Allow all origin with default of cors(*)
app.use(cors(*));

// option 2: allow custom origins
app.use(
  cors({
origin: 'http://localhost:3000',
methods: ['GET', 'POST', 'DELETE', 'PUT'],
allowedHeaders: ['Content-Type'],
}));


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome to Mern tutoria');

});

app.use('./books', booksRoute);

mongoose // npm i mongoose
  .connect(mongoURL)
  .then(() = {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    })

  })
  .catch((error) => {
    console.log(error);
  })