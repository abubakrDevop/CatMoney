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
    axios("https://5160-80-94-250-65.eu.ngrok.io/api/v2/counter").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/api/v1/tasks', async (req, res) => {
  try {
    axios(`https://5160-80-94-250-65.eu.ngrok.io/api/tasks/v2/paginate`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/api/v1/userTasks/:id', async (req, res) => {
  const { id } = req.params

  try {
    axios(
      `https://5160-80-94-250-65.eu.ngrok.io/api/tasks/v2/userTasks?id=${id}`
    ).then((response) => res.json(response.data));
  } catch (err) {
    console.log(err);
  }
});

server.post('/api/v1/register', async (req, res) => {
  try {
    axios("https://5160-80-94-250-65.eu.ngrok.io/api/v2/register").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.post('/api/v1/visible', async (req, res) => {
  try {
    axios("https://5160-80-94-250-65.eu.ngrok.io/api/v2/exit").then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})