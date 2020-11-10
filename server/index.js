const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

//app.get('/url/:id', (req, res) => {
//    // ToDo: get a short url by id
//});
//
//app.get('/:id', (req, res) => {
//    // ToDo: redirect to url
//});
//
//app.get('/url', (req, res) => {
//    //ToDo create a short url
//});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});