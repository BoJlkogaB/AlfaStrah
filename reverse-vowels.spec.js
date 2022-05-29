const reverseVowels = require('./reverse-vowels');

describe('Reverse Vowels', () => {
  it('should be defined', () => {
    expect(reverseVowels).toBeDefined();
  });

  it('should return string', () => {
    expect(reverseVowels('string')).toEqual(expect.any(String));
  });

  it('should return an untouched string', () => {
    expect(reverseVowels('bcdfghjklmnpqrstvwxz')).toEqual('bcdfghjklmnpqrstvwxz');
  });

  it('should return reverse string', () => {
    expect(reverseVowels('aeiouy')).toEqual('yuoiea');
  });

  it('should return reverse string', () => {
    expect(reverseVowels('abcdefghijklmnopqrstuvwxyz')).toEqual('ybcdufghojklmnipqrstevwxaz');
  });

  it('should return reverse string', () => {
    expect(reverseVowels('ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toEqual('YBCDUFGHOJKLMNIPQRSTEVWXAZ');
  });

  it('should return reverse string', () => {
    expect(reverseVowels('abCDeFGHijKlMnOpqrsTUVwxyZ')).toEqual('ybCDUFGHOjKlMnipqrsTeVwxaZ');
  });

  it('should return reverse string', () => {
    expect(reverseVowels('hello')).toEqual('holle');
  });
})