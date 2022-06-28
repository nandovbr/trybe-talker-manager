const validNewTalker = (req, res, next) => {
  const { talk } = req.body;

  // if (!talk || !(talk.watchedAt) || (!(talk.rate) && talk.rate <= 0)) {
  //   return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  // }

  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  
  next();
};

module.exports = validNewTalker;
