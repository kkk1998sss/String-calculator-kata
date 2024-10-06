class Calculator {
  static add(input: string): number {
    if (input === "") {
      return 0;
    }

    let delimiter = /,|\n/;
    if (input.startsWith("//")) {
      delimiter = new RegExp(input[2]);
      input = input.substring(4);
    }

    const numbers = input.split(delimiter).map((num) => parseInt(num, 10));
    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default Calculator;
