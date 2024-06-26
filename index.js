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
  //i want to isolate each string from the array
  let returnVal = tutorials.map((curTutorial) => {
    //for the current string i want to uppercase every word
    const wordArray = curTutorial.split(' ')
     //iterate over each word in array
    let capitalizedArray = wordArray.map((curWord) => {
      //use charAt to uppercase the first letter
      return curWord = curWord[0].toUpperCase() + curWord.slice(1)
    })
    //put all the words back together again as a string
    let capitalizedTutorial = capitalizedArray.join(' ')
    return capitalizedTutorial

  })
  //return a new array with all the new strings
  return returnVal
}



// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];


// const activatedRobots = robots.map((robot) => {
//   // return Object.assign({}, robot, {
//   //   modes: robot.modes * 2,
//   //   isActivated: true,
//   // });
//   return {
//     ...robot,
//     modes: robot.modes * 2,
//     isActivated: true 
//   }
// });



