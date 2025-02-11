let services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",
};

services["Розбити скло"] = "200 грн";
function price() {
  let total = 0;
  for (let cost of Object.values(services)) {
    total += parseInt(cost);
  }
  return total + " грн";
}

function minPrice() {
  let prices = Object.values(services).map((value) => parseInt(value));
  return Math.min(...prices) + " грн";
}

function maxPrice() {
  let prices = Object.values(services).map((value) => parseInt(value));
  return Math.max(...prices) + " грн";
}

console.log("Загальна вартість:", price());
console.log("Мінімальна ціна:", minPrice());
console.log("Максимальна ціна:", maxPrice());
