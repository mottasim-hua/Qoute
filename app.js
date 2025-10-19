const Randomquotes = [
  'Do what you can, with what you have, where you are. — Theodore Roosevelt',
  'Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill',
  'The only way out is through. — Robert Frost',
  'Simplicity is the soul of efficiency. — Austin Freeman',
  'What you do every day matters more than what you do once in a while. — Gretchen Rubin'
];

const quoteElement =document.querySelector('#quote');
const author =document.querySelector('#author');
const button =document.querySelector('#button');

function autoquote(){
    const quoteIndex =Math.floor(Math.random()*5);
    console.log(quoteIndex);
    quoteElement.textContent =Randomquotes[quoteIndex];
}
autoquote();

button.addEventListener('click',autoquote)