const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const hitungButton = document.getElementById('hitung');
const resultElement = document.getElementById('result');

hitungButton.addEventListener('click', (e) => {
    e.preventDefault();
    const alas = parseInt(alasInput.value);
    const tinggi = parseInt(tinggiInput.value);
    const luas = (alas * tinggi) / 2;
    resultElement.textContent = `L = ${luas}`;
});