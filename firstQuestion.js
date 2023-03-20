function findSumZero(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    const firstThree = numbers[i];
    console.log(firstThree);
    for (let j = i + 1; j < numbers.length; j++) {
      const sencondThree = numbers[j];
      for (let x = j + 1; x < numbers.length; x++) {
        const thirdThree = numbers[x];
        const sum = firstThree + sencondThree + thirdThree;
        if (sum === 0) {
          console.log(firstThree + "," + sencondThree + "," + thirdThree);
        }
      }
    }
  }
}
const numbers = [-4, 1, 3, -2, -1];
console.log(findSumZero(numbers));
