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

  static mul(input: string): number {
    if (input === "") {
      return 1;
    }

    let delimiter: RegExp = /,|\n/;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(2, delimiterEndIndex);
      delimiter = new RegExp(`[${customDelimiter}]`);
      input = input.substring(delimiterEndIndex + 1);
    }

    const numbers = input.split(delimiter).map((num) => parseInt(num, 10));

    const negatives = numbers.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    }

    return numbers.reduce((product, num) => product * num, 1);
  }
}

export default Calculator;
