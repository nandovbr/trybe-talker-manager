const router = require('express').Router();
const validEmail = require('../middlewares/email'); 
const validPassword = require('../middlewares/password');

router.post('/login', (_req, res) => {
  res.status(200).json({ token: '7mqaVRXJSp886CGr' });
});

module.exports = router;
