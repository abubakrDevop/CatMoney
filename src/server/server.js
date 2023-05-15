import express from 'express'
import cookieParser from "cookie-parser";
import cors from 'cors'
import axios from 'axios'
import helmet from 'helmet';

const PORT = 5000

const server = express()

const baseURL = "https://41c1-80-94-250-104.ngrok-free.app"

const middleware = [
  cors(),
  cookieParser(),
  express.json({ limit: "50kb" }),
  helmet()
  // helmet.frameguard({ action: "SAMEORIGIN" })
];

middleware.forEach((it) => server.use(it))

server.get('/Counter/count', async (req, res) => {
  try {
    axios(`${baseURL}/Counter/count`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.get('/Task/tasks/:pageNumber/:userId', async (req, res) => {
  const { pageNumber, userId } = req.params
  try {
    axios(`${baseURL}/Task/tasks?pageNumber=${pageNumber}&userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    res.status(404).send('На данный момент времени нет ни одного таска')
  }
})

server.get('/Task/tasks/:sortBy/:asc/:pageNumber/:userId', async (req, res) => {
  const { pageNumber, userId, sortBy, asc} = req.params
  try {
    axios(`${baseURL}/Task/tasks?sortBy=${sortBy}&asc=${asc}&pageNumber=${pageNumber}&userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    res.status(404).send('')
  }
})

server.get('/Task/tasks/:description/:pageNumber/:userId', async (req, res) => {
  const { pageNumber, userId, description } = req.params
  try {
    axios(`${baseURL}/Task/tasks?description=${description}&pageNumber=${pageNumber}&userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    res.status(404).send('')
  }
})


server.get('/Task/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios(`${baseURL}/Task/user?userId=${userId}`);
    res.json(response.data);
  } catch (error) {
    // console.log(error.message);
    res.status(404).send('У вас нет ни одного задания')
  }
})

server.get('/Task/user/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const response = await axios(`${baseURL}/Task/user?userId=${userId}`);
    res.json(response.data);
  } catch (error) {
    res.status(404).send('')
  }
})


server.get('/Referals/user/:userId', async (req, res) => {
  const { userId } = req.params
  try {
    axios(`${baseURL}/Referals/user?userId=${userId}`).then(
      (response) => res.json(response.data)
    );
  } catch (err) {
    console.log(err)
  }
})

server.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`)
})