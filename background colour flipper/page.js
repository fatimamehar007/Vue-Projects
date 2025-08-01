const btn = document.getElementById('btn');
const colorText = document.getElementById('color');

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6, '0')}`;
}

btn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorText.textContent = newColor;
});
