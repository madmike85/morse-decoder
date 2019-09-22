const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  const result = expr
    .split('**********')
    .map(x => decodeWord(x))
    .join(' ');
  return result;
}

function decodeWord(word) {
  const letters = [];
  for (let i = 0; i <= word.length - 10; i += 10) {
    let chunck = word.substring(i, i + 10);
    const idx = chunck.indexOf('1');
    chunck = chunck
      .slice(idx)
      .replace(/10/g, '.')
      .replace(/11/g, '-');
    letters.push(chunck);
  }

  return letters.map(x => MORSE_TABLE[x]).join('');
}

module.exports = {
  decode
};
