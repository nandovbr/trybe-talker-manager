const router = require('express').Router();
const fs = require('fs').promises;

const talkerDataBase = './talker.json';
// console.log(talkerDataBase)

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

module.exports = router;
