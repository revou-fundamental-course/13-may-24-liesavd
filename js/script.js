const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const hitungButton = document.getElementById('hitung');
const resultElement = document.getElementById('result');
const resetButton = document.getElementById('reset');


hitungButton.addEventListener('click', (e) => {
    e.preventDefault();
    const alas = parseInt(alasInput.value);
    const tinggi = parseInt(tinggiInput.value);
    const luas = (alas * tinggi) / 2;
    resultElement.textContent = `L = ${luas}`;
});

resetButton.addEventListener('click', () => {
    // Reset all input fields and results
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('result').textContent = '';
  });