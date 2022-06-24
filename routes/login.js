const router = require('express').Router();
const validEmail = require('../middlewares/email'); 
const validPassword = require('../middlewares/password');
const generateToken = require('../middlewares/generateToken');
// const validToken = require('../middlewares/token');

const validLogin = [validEmail, validPassword];

router.post('/login', validLogin, (_req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = router;
