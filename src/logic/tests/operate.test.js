import operate from '../operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    const result = operate('10', '5', '+');
    expect(result).toEqual('15');
  });

  it('should perform subtraction correctly', () => {
    const result = operate('10', '5', '-');
    expect(result).toEqual('5');
  });

  it('should perform multiplication correctly', () => {
    const result = operate('10', '5', 'x');
    expect(result).toEqual('50');
  });

  it('should perform division correctly', () => {
    const result = operate('10', '5', '÷');
    expect(result).toEqual('2');
  });

  it('should handle division by zero gracefully', () => {
    const result = operate('10', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    const result = operate('10', '3', '%');
    expect(result).toEqual('1');
  });

  it('should handle modulo by zero gracefully', () => {
    const result = operate('10', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('10', '5', '#')).toThrowError("Unknown operation '#'");
  });
});
