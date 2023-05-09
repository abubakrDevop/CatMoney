const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

const API_SERVICE_URL = 'https://f47f-80-94-250-75.ngrok-free.app'

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

app.use(cors({
    exposedHeaders: '*'
}))

app.use('/', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    ws: true,
    logLevel: 'debug',
}))

const PORT = 8080
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy Server at ${HOST} : ${PORT}`)
})