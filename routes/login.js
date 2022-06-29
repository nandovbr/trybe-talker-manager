const router = require('express').Router();
const validEmail = require('../middlewares/email'); 
const validPassword = require('../middlewares/password');
const generateToken = require('../middlewares/generateToken');

const validLogin = [validEmail, validPassword];

router.post('/login', validLogin, (_req, res) => {
  const newToken = generateToken();

  res.status(200).json({ token: newToken });
});

module.exports = router;
