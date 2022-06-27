const router = require('express').Router();
const validEmail = require('../middlewares/email'); 
const validPassword = require('../middlewares/password');
const generateToken = require('../middlewares/generateToken');

const validLogin = [validEmail, validPassword];

router.post('/login', validLogin, (_req, res) => {
  res.status(200).json({ token: '7mqaVRXJSp886CGr' || generateToken() });
});

module.exports = router;
