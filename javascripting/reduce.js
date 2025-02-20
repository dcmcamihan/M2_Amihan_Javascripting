function countWords(inputWords) {
    return inputWords.reduce((countMap, word) => {
      countMap[word] = (countMap[word] || 0) + 1; 
      return countMap;
    }, {}); 
  }
  
  module.exports = countWords;