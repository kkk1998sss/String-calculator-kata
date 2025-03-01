import Calculator from '../calculator/cal'
describe('Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(Calculator.add("")).toBe(0);
  });
  
});
