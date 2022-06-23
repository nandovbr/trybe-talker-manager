// Gerador aleatório baseado no link:
// https://www.delftstack.com/pt/howto/javascript/javascript-random-string/
function generateToken() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  const charactersLength = characters.length;
  for (let index = 0; index <= 15; index + 1) {
    token += characters.charAt(Math.random() * charactersLength);
  }

  return token;
}

console.log(generateToken());

// randomToken é uma string com 16 caracteres y e x. O .replace() recebe como primeiro parâmetro o Regex xy
// /[yx]/g é uma expressão regular que procura por qualquer caractere x ou y.
// e como segundo parâmetro, a função que substituirá o x ou o y por letras e números aleatórios.

module.exports = generateToken;
