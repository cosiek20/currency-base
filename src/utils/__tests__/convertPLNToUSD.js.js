import { convertPLNToUSD } from '../convertPLNToUSD';

describe('ConvertPLNtoUSD', () => {
  it('should return proper value when good input', () => {
    expect(convertPLNToUSD(1)).toBe('$0.29');
    expect(convertPLNToUSD(2)).toBe('$0.57');
    expect(convertPLNToUSD(20)).toBe('$5.71');
    expect(convertPLNToUSD(12)).toBe('$3.43');
  });
  it('should return NaN when input is text', () => {
    expect(convertPLNToUSD('6')).toBeNaN();
    expect(convertPLNToUSD('a')).toBeNaN();
    expect(convertPLNToUSD('-124')).toBeNaN();
  });
  it('should return NaN when input is empty', () => {
    expect(convertPLNToUSD()).toBeNaN();   
  });
  it('should return Error when input is not a text or number', () => {
    expect(convertPLNToUSD([])).toBe('Error');
    expect(convertPLNToUSD({})).toBe('Error');
    expect(convertPLNToUSD(null)).toBe('Error');
    expect(convertPLNToUSD(Function)).toBe('Error');
    expect(convertPLNToUSD(Array)).toBe('Error');
  })
  it('should return $0.00 when input is a number below 0', () => {
    expect(convertPLNToUSD(-2)).toBe('$0.00');
    expect(convertPLNToUSD(-32)).toBe('$0.00');
    expect(convertPLNToUSD(-89430)).toBe('$0.00');
    expect(convertPLNToUSD(-5)).toBe('$0.00');
  });
});