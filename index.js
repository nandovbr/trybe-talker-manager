const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const talkerManagerRoute = require('./routes/talkerManager');
const loginRoute = require('./routes/login');

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(talkerManagerRoute);
app.use(loginRoute);

app.listen(PORT, () => {
  console.log('Online');
});
