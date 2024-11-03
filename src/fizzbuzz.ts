function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }

    result.push(output || i.toString());
  }

  return result;
}

console.log(fizzBuzz(5)) // ["1", "2", "Fizz", "4", "Buzz"]
