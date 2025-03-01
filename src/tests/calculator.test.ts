import Calculator from '../calculator/cal'
describe('Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(Calculator.add("")).toBe(0);
  });
  test('should return the same number when only one number is provided', () => {
    expect(Calculator.add("1")).toBe(1);
  });
  
});
