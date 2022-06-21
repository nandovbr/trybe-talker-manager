const express = require('express');
const bodyParser = require('body-parser');
const talkerManagerRoute = require('./routes/talkerManager');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(talkerManagerRoute);

app.listen(PORT, () => {
  console.log('Online');
});
