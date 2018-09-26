import { addAll, factorial, isPalindrome, reverse } from './index';

describe('common', () => {
  describe('addAll', () => {
    it('add all args', () => {
      expect(addAll(1, 2, 3)).toEqual(6);
    });
  });
  describe('reverse', () => {
    it('reverse string', () => {
      expect(reverse('hello')).toEqual('olleh');
    });
  });
  describe('factorial', () => {
    it('factorial the number passed', () => {
      expect(factorial(5)).toEqual(120);
    });
  });
  describe('isPalindrome', () => {
    it('check for palindrome', () => {
      expect(isPalindrome('level')).toBeTruthy();
      expect(isPalindrome('car')).toBeFalsy();
    });
  });
});
