const countSubstring = require('./index');

describe('countSubstring', () => {
  it('should return 2 for input "abcc" and K = 2', () => {
    expect(countSubstring("abcc", 2)).toBe(2);
  });

  it('should return 0 for input "aabab" and K = 3', () => {
    expect(countSubstring("aabab", 3)).toBe(0);
  });

  it('should return 4 for input "abcabc" and K = 3', () => {
    expect(countSubstring("abcabc", 3)).toBe(4);
  });

  it('should return 4 for input "abcdefg" and K = 4', () => {
    expect(countSubstring("abcdefg", 4)).toBe(4);
  });

  it('should return 5 for input "ababab" and K = 2', () => {
    expect(countSubstring("ababab", 2)).toBe(5);
  });

  it('should return 0 for empty input string', () => {
    expect(countSubstring("", 3)).toBe(0);
  });
});