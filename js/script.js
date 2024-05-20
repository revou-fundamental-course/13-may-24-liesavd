const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const cInput = document.getElementById('c');
const hitungButton = document.getElementById('hitung');
const hitungkelButton = document.getElementById('hitungkel');
const resultElement = document.getElementById('result');
const hasiltElement = document.getElementById('hasil');
const resetButton = document.getElementById('reset');


hitungButton.addEventListener('click', (e) => {
    e.preventDefault();
    const alas = parseInt(alasInput.value);
    const tinggi = parseInt(tinggiInput.value);
    const luas = (alas * tinggi) / 2;
    resultElement.textContent = `L = ${luas}`;
});

hitungkelButton.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(aInput.value);
    const b = parseInt(bInput.value);
    const c = parseInt(cInput.value);
    const keliling = a + b + c;
    hasiltElement.textContent = `Keliling Segitiga = ${keliling}`;
});

resetButton.addEventListener('click', () => {
    // Reset all input fields and results
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result').textContent = '';
  });

  resetButton.addEventListener('click', () => {
    // Reset all input fields and hasil
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
    document.getElementById('hasil').textContent = '';
  });
