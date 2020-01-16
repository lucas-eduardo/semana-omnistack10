const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/week10?readPreference=primary&appname=MongoDB%20Compass&ssl=false', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);