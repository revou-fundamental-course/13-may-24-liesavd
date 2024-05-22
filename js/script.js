let isKelilingVisible = false;
function hideorShow() {
  if (isKelilingVisible) {
    document.getElementById('hitung_luas').style.display = 'block';
    document.getElementById('hitung_keliling').style.display = 'none';
    isKelilingVisible = false;
  } else {
    document.getElementById('hitung_luas').style.display = 'none';
    document.getElementById('hitung_keliling').style.display = 'block';
    isKelilingVisible = true;
  }
}

const alasInput = document.getElementById('alas');
const tinggiInput = document.getElementById('tinggi');
const aInput = document.getElementById('a');
const bInput = document.getElementById('b');
const cInput = document.getElementById('c');
const hitungButton = document.getElementById('hitung');
const hitungkelButton = document.getElementById('hitungkel');
const resultElement = document.getElementById('result');
const hasilElement = document.getElementById('hasil');
const formulaElement = document.getElementById('rumus');
const formulakelElement = document.getElementById('rumuskel');
const asalElement = document.getElementById('asal');
const asalkelElement = document.getElementById('asalkel');
const resetButton = document.getElementById('reset');
const rbButton = document.getElementById('reset_btn');


hitungButton.addEventListener('click', (e) => {
    e.preventDefault();
    const alas = parseInt(alasInput.value);
    const tinggi = parseInt(tinggiInput.value);
    const luas = (alas * tinggi) / 2;
    formulaElement.textContent = 'L = 1/2 x a x t';
    asalElement.textContent = `L = 1/2 x ${alas} x ${tinggi}`;
    resultElement.textContent = `Luas = ${luas}`;
});

hitungkelButton.addEventListener('click', (e) => {
    e.preventDefault();
    const a = parseInt(aInput.value);
    const b = parseInt(bInput.value);
    const c = parseInt(cInput.value);
    const keliling = a + b + c;
    formulakelElement.textContent = 'K = a + b + c'
    asalkelElement.textContent = `K = ${a} + ${b} + ${c}`
    hasilElement.textContent = `Keliling Segitiga = ${keliling}`;
});

resetButton.addEventListener('click', () => {
  // Reset all input fields and results
  document.getElementById('alas').value = '';
  document.getElementById('tinggi').value = '';
  document.getElementById('rumus').textContent='';
  document.getElementById('asal').textContent='';
  document.getElementById('result').textContent = '';
});

rbButton.addEventListener('click', () => {
  document.getElementById('a').value = '';
  document.getElementById('b').value = '';
  document.getElementById('c').value = '';
  document.getElementById('hasil').textContent = '';
});