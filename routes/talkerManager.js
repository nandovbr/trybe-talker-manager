const router = require('express').Router();
const fs = require('fs').promises;

const validName = require('../middlewares/name');
const validNewTalker = require('../middlewares/newTalker');
const validAge = require('../middlewares/age');
const validRate = require('../middlewares/rate');
const validWatchedAt = require('../middlewares/watchedAt');
const validToken = require('../middlewares/token');
// const validLogin = require('./login');
// const validEmail = require('../middlewares/email');
// const validPassword = require('../middlewares/password');
// const validGenerateToken = require('../middlewares/generateToken');

const talkerDataBase = './talker.json';

const validateNewTalkerManager = [
  validToken,
  validName,
  validAge,
  validNewTalker,
  validWatchedAt,
  validRate,
];

const validTokenOnRoute = [
  validToken,
  validName,
  validAge,
  validNewTalker,
  validWatchedAt,
  validRate,
];

router.get('/talker', async (_req, res) => {
  const talkerManager = await fs.readFile(talkerDataBase, 'utf-8');
  res.status(200).json(JSON.parse(talkerManager));
});

router.get('/talker/:id', async (req, res) => { // cria rota talker/:id
  const { id } = req.params; // pega o id desestruturado
  const talker = await fs.readFile(talkerDataBase, 'utf-8'); // lê a base de dados como utf-8
  const talkerSearch = JSON.parse(talker).find((talk) => talk.id === Number(id)); // converte de json (texto) em objeto para ser feita a iteração com find() através do id

  if (!talkerSearch) { // caso talkerSearch não seja encontrado (negação de talkerSearch)
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talkerSearch);
});

// rota para criar novo talker com a estrutura do objeto newTalkerManager
// adicionando o id automaticamente baseado no tamanho do array + 1
router.post('/talker', validateNewTalkerManager, async (req, res) => {
  const { name, age, talk } = req.body;
  const { rate, watchedAt } = talk;
  const talker = await fs.readFile(talkerDataBase, 'utf-8');
  const talkerParse = JSON.parse(talker);
  const id = talkerParse.length + 1;
  
  const newTalkerManager = {
    name,
    age,
    id,
    talk: {
      watchedAt,
      rate,
    },
  };
talkerParse.push(newTalkerManager);
await fs.writeFile(talkerDataBase, JSON.stringify(talkerParse));
return res.status(201).json(newTalkerManager);
});

router.put('/talker/:id', validTokenOnRoute, async (req, res) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const newTalker = {
    id: Number(id),
    name,
    age,
    talk,
  };
  const talkers = await fs.readFile(talkerDataBase, 'utf8');
  const talkerParse = JSON.parse(talkers);
  const index = talkerParse.findIndex((item) => item.id === Number(id));

  talkerParse[index] = newTalker;
  await fs.writeFile(talkerDataBase, JSON.stringify(talkerParse));

  return res.status(200).json(newTalker);
});

router.delete('/talker/:id', validTokenOnRoute, async (req, res) => {
  const { id } = req.params;
  const talkers = await fs.readFile(talkerDataBase, 'utf8');
  const talkerParse = JSON.parse(talkers);
  const indexTalker = talkerParse.filter((item) => item.id !== Number(id));
  await fs.writeFile(talkerDataBase, JSON.stringify(indexTalker));

  return res.status(204).json();
});

module.exports = router;
