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
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default Calculator;
