import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'
import axios from 'axios'
import helmet from 'helmet';

const PORT = 5000

const server = express()

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
  helmet()
  // helmet.frameguard({ action: "SAMEORIGIN" })
];

middleware.forEach((it) => server.use(it))

server.get('/api/v1/counter', async (req, res) => {
  try {
    axios("https://3303-80-94-250-125.ngrok-free.app/api/v2/counter").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/Task/tasks/:pageNumber', async (req, res) => {
  const { pageNumber } = req.params;
  try {
    axios(`https://3303-80-94-250-125.ngrok-free.app/Task/tasks?pageNumber=${pageNumber}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/Task/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    axios(`https://3303-80-94-250-125.ngrok-free.app/Task/user?userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/Referals/user', async (req, res) => {
  const { userId } = req.params;
  try {
    axios(`https://3303-80-94-250-125.ngrok-free.app/Referals/user?userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})



server.post('/api/v1/register', async (req, res) => {
  try {
    axios("https://3303-80-94-250-125.ngrok-free.app/api/v2/register").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.post('/api/v1/visible', async (req, res) => {
  try {
    axios("https://3303-80-94-250-125.ngrok-free.app/api/v2/exit").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})