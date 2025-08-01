export function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const [delimLine, numString] = numbers.split("\n");
    delimiter = new RegExp(delimLine.slice(2));
    numbers = numString;
  }

  const numArray = numbers.split(delimiter).map((n) => parseInt(n, 10));

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  let sum = 0;
  for (const num of numArray) {
    if (!isNaN(num)) sum += num;
  }

  return sum;
}
