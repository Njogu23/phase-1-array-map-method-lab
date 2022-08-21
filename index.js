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

  //spliting the array sentences  into arrays of single word strings
  const splitArray =tutorials.map(item => item.split(' '))

  //titleCasing the strings then joing them back together
  const titleCasing = splitArray.map(item2 =>
     item2.map(item3 => 
      item3.charAt(0).toUpperCase() + item3.slice(1)).join(' '))

      return titleCasing
}
