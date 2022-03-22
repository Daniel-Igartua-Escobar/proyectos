const $text = document.querySelector('#text');
const $result = document.querySelector('#result');

// function countWords() {
//   const text = $text.value;
//   const formatText = text.toLowerCase().replace(/,|\./g, '').trim();
//   const words = formatText.split(' ');
//   const wordList = {};
//   words.forEach(word => {
//     wordList[word] ? wordList[word]++ : Object.assign(wordList, {[word]: 1});
//   });
  

//   const listTemplate = Object.keys(wordList).map(key => `<li>${key}: ${wordList[key]}</li>` ).join('')
//   // const listTemplate = Object.values(wordList).sort((a,b) => b - a).map((value, i, array) => `<li>${array[i]}: ${value}</li>` ).join('')

//   $result.innerHTML = listTemplate;
//   console.log(wordList);
// }



function countWords() {
  const text = $text.value;
  const formatText = text.toLowerCase().replace(/,|\./g, '').trim();
  const words = formatText.split(' ');
  const wordList = [];
  const addWord = word => {
    if (word) {
      wordList.push({[word]: 1})
    }
  };

  words.forEach(word => {
    if (!wordList.length) {
      addWord(word);
      return
    }

  const wordIndex = wordList.findIndex(e => Object.keys(e)[0] === word);
  wordIndex !== -1 ? wordList[wordIndex][word]++ : addWord(word);
  });
  
  const sortedList = wordList.sort((a,b) => Object.values(b) - Object.values(a));
  const listTemplate = sortedList.map(obj => `<li>${Object.keys(obj)[0]} : ${Object.values(obj)[0]}</li>` ).join('');
  $result.innerHTML = listTemplate;
}

function clearText() {
  $text.value = '';
  $result.innerHTML = '';
}