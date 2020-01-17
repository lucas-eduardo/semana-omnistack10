const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');

const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.createServer(app);

setupWebsocket(server);

mongoose.connect('mongodb://localhost:27017/week10?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());

app.use(routes);

server.listen(3333);