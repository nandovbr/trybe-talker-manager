const router = require('express').Router();
// const validToken = require('../middlewares/token');

router.post('/login', (_req, res) => {
  res.status(200).json({ token: '7mqaVRXJSp886CGr' });
});

module.exports = router;
