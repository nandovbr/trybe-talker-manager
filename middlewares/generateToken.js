// Gerador aleatório baseado no link:
// https://www.delftstack.com/pt/howto/javascript/javascript-random-string/
function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = [];
  const charactersLength = characters.length;
  for (let index = 0; index <= 15; index += 1) {
    token += characters.charAt(Math.random() * charactersLength);
  }

  return token;
}

// console.log(generateToken());

module.exports = generateToken;
