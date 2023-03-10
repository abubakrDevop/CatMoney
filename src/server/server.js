import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'
import axios from 'axios'

const PORT = 5000

const server = express()

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
];

middleware.forEach((it) => server.use(it));

server.get('/api/v1/counter', async (req, res) => {
  try {
    axios('https://088a-80-94-250-40.eu.ngrok.io/api/v2/counter')
      .then((response) => res.json(response.data))
  } catch (err) {
    console.log(err)
  }
})

server.post('/api/v1/register', async (req, res) => {
  try {
    axios('https://088a-80-94-250-40.eu.ngrok.io/api/v2/register')
      .then((response) => res.json(response.data))
  } catch (err) {
    console.log(err)
  }
})

server.post('/api/v1/visible', async (req, res) => {
  try {
    axios('https://088a-80-94-250-40.eu.ngrok.io/api/v2/exit')
      .then((response) => res.json(response.data))
  } catch (err) {
    console.log(err)
  }
})

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})