class Calculator {
  static add(input: string): number {
    if (input === "") {
      return 0;
    }
    const numbers = input.split(/,|\n/).map((num) => parseInt(num, 10));
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}

export default Calculator;
