let cookieButton = document.querySelector(".cookieClicker");
let upgradeButton = document.querySelector(".upgradeButton");
let buyAmongus = document.querySelector(".amogusButton");
let totalCounts = 0;
let upgradeCostA = 10;
let cpc = 1;
let susPrice = 1;
let logoImg = document.getElementById("logo-img");
let counter = document.querySelector(".counts");
let upgradeCost = document.querySelector(".upgradeCost");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;







const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const clearBtn = document.querySelector('#clear-btn');
const colorPicker = document.querySelector('#color-picker');
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function cookieFunction() {
  totalCounts += cpc;
  counter.innerHTML = totalCounts;
}



function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = colorPicker.value;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});




cookieButton.addEventListener("click", cookieFunction);

upgradeButton.addEventListener("click", buyUpgrade);

function buyUpgrade() {
  if (totalCounts >= upgradeCostA) {
    totalCounts -= upgradeCostA;
    cpc += cpc * 2;
    upgradeCostA = upgradeCostA * 10;
    upgradeCost.innerHTML = upgradeCostA;
    counter.innerHTML = totalCounts;
  }
}