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
  return tutorials.map(title => {
    let title_array = title.split(" ");
    /* 1. map through title
        2. split title on " "
        3. capitalize each word at [0]
        4. join all words in array on " "
    */
    return title_array.map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(" ")
  })
}
