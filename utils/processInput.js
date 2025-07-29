// utils/processInput.js
function processInput(data) {
    const odd_numbers = [];
    const even_numbers = [];
    const alphabets = [];
    const special_characters = [];
    let sum = 0;
    let concatChars = [];
  
    data.forEach(item => {
      if (/^[0-9]+$/.test(item)) {
        // number string
        if (parseInt(item, 10) % 2 === 0) {
          even_numbers.push(item);
        } else {
          odd_numbers.push(item);
        }
        sum += parseInt(item, 10);
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
        concatChars = concatChars.concat(item.split(''));
      } else {
        special_characters.push(item);
      }
    });
  
    // Concatenate all characters, reverse, alternate caps
    let concat_string = concatChars
      .reverse()
      .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
      .join('');
  
    return {
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum: String(sum),
      concat_string,
    };
  }
  
  module.exports = processInput;
  