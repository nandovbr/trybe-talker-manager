const router = require('express').Router();
const fs = require('fs').promises;

const talkerDataBase = './talker.json';
// console.log(talkerDataBase)

router.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await fs.readFile(talkerDataBase, 'utf-8');
  const talkerSearch = JSON.parse(talker).find((talk) => talk.id === Number(id));

  if (!talkerSearch) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talkerSearch);
});

module.exports = router;
