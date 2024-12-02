const buttonEncrypt = document.querySelector('#encrypt');
const buttonDecrypt = document.querySelector('#decrypt');
const buttonClear = document.querySelector('#clear');
const keyInput = document.querySelector('#key');
const textarea = document.querySelector('#text');
const buttonShowMatrix = document.querySelector('#show-matrix');

const adfgvx = "ADFGVX";

function createADFGVXSquare(key) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let square = [];
  let usedChars = new Set();
  // Добавляем ключ в квадрат
  for (let char of key.toUpperCase()) {
    if (!usedChars.has(char) && alphabet.includes(char)) {
      square.push(char);
      usedChars.add(char);
    }
  }

  for (let char of alphabet) {
    if (!usedChars.has(char)) {
      square.push(char);
      usedChars.add(char);
    }
  }

  let matrix = [];
  for (let i = 0; i < 6; i++) {
    matrix.push(square.slice(i * 6, (i + 1) * 6));
  }
  console.log(matrix);
  return matrix;
}

function Encrypt(text, key) {
  let matrix = createADFGVXSquare(key);
  let ciphertext = "";
  for (let char of text.toUpperCase()) {
    if (char === ' ') {
      ciphertext += ' ';
    } else {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (matrix[i][j] === char) {
            ciphertext += adfgvx[i] + adfgvx[j];
          }
        }
      }
    }
  }

  return ciphertext;
}

function Decrypt(ciphertext, key) {
  let matrix = createADFGVXSquare(key);
  let text = "";
  for (let i = 0; i < ciphertext.length; i++) {
    if (ciphertext[i] === ' ') {
      text += ' '; 
    } else {
      let row = adfgvx.indexOf(ciphertext[i]);
      let col = adfgvx.indexOf(ciphertext[i + 1]);
      text += matrix[row][col];
      i++; 
    }
  }

  return text;
}

buttonEncrypt.addEventListener('click', () => {
  const key = keyInput.value;
  const text = textarea.value;
  const ciphertext = Encrypt(text, key);
  textarea.value = ciphertext;
});

buttonDecrypt.addEventListener('click', () => {
  const key = keyInput.value;
  const ciphertext = textarea.value;
  const text = Decrypt(ciphertext, key);
  textarea.value = text;
});

buttonClear.addEventListener('click', () => {
  textarea.value = '';
  
});

buttonShowMatrix.addEventListener('click', () => {
  const key = keyInput.value;
  const matrix = createADFGVXSquare(key);
  let matrixString = "Ключевая матрица:\n";
  for (let row of matrix) {
    matrixString += row.join(' ') + '\n';
  }
  alert(matrixString);
});