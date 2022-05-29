String.prototype.replaceAt = function (index, replacement) {
  return this.substring(0, index) + replacement +
    this.substring(index + replacement.length)
}

// function replaceAt(str, index, replacement) {
//   return str.substring(0, index) + replacement + str.substring(index + replacement.length);
// }

// #1
function reverseVowels(s) {
  const vowels = getVowels(s)
  return vowelPermutation(s, vowels)
}

function getVowels(s) {
  return Array.from(s.matchAll(/[aeiouyAEIOUY]/gi))
}

function vowelPermutation(s, vowels) {
  for (
    let start = 0, end = vowels.length - 1;
    start < vowels.length;
    start++, end--
  ) {
    s = s.replaceAt(vowels[start].index, vowels[end])
  }

  return s
}

module.exports = reverseVowels
