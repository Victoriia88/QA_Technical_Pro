let services = {
  'стрижка': '60 грн',
  'гоління': '80 грн',
  'Миття голови': '100 грн',

  add(service, price) {
    this[service] = price;
  },

  price() {
    let total = 0;
    for (let cost of Object.values(this)) {
      if (typeof cost === 'string' && cost.includes('грн')) {
        total += parseInt(cost);
      }
    }
    return total + ' грн';
  },

  minPrice() {
    let prices = [];
    for (let cost of Object.values(this)) {
      if (typeof cost === 'string' && cost.includes('грн')) {
        prices.push(parseInt(cost));
      }
    }
    return Math.min(...prices) + ' грн';
  },

  maxPrice() {
    let prices = [];
    for (let cost of Object.values(this)) {
      if (typeof cost === 'string' && cost.includes('грн')) {
        prices.push(parseInt(cost));
      }
    }
    return Math.max(...prices) + ' грн';
  }
};

services.add('Розбити скло', '200 грн');
services.add('Фарбування', '600 грн');

console.log('Загальна вартість:', services.price());
console.log('Мінімальна ціна:', services.minPrice());
console.log('Максимальна ціна:', services.maxPrice());
