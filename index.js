const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const titleCased = () => {
  //iterate over tutorials using .map
  let returnArray = tutorials.map((tutorial) =>{
    //turn current tutorial into array of words: split(' ')
    let wordArray = tutorial.split(" ")
    //iterate over each word 
    let uppercaseWordArray = wordArray.map((word) => {
      //get the first letter of word
      const firstLetter = word.charAt(0)
      //convert first letter to uppercase
      const firstLetterCap = firstLetter.toUpperCase()
      //gett all letters after first letter
      const remainingLetters = word.slice(1)
      //addcapital letter to rest of letters
      const capitalizedWord = firstLetterCap + remainingLetters
      //return replacement value (uppercase word)
      return capitalizedWord
    })
    //put all words back together as string
    let wordArrayJoin = uppercaseWordArray.join(' ')
    //return that word to replace value in wordArray
    return wordArrayJoin
  })
  //return tutorials
  return returnArray

}
