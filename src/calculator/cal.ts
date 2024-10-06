class Calculator {
  static add(input: string): number {
    if (input === "") {
      return 0;
    }
    return parseInt(input, 10);
  }
}

export default Calculator;
