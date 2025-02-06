function checkProbabilityTheory(count) {
  let evenCount = 0,
    oddCount = 0;

  for (let i = 0; i < count; i++) {
    let num = Number.parseInt(Math.random() * 901 + 100);
    if (Number.isInteger(num)) {
      num % 2 === 0 ? evenCount++ : oddCount++;
    }
  }

  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Кількість парних чисел: ${evenCount}`);
  console.log(`Кількість непарних чисел: ${oddCount}`);
  console.log(
    `Відсоток парних до непарних: ${Number.parseFloat(
      ((evenCount / count) * 100).toFixed(2)
    )}% / ${Number.parseFloat(((oddCount / count) * 100).toFixed(2))}%`
  );
}
