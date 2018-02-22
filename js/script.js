// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of objects listing 5 different quotes
var quotes = [

  { quote : 'Even castles made of sand fall into the sea eventually',
    source : 'Jimi Hendrix',
    year : '1967',
    tags : 'Music' },

  { quote : 'Milk was a bad choice',
    source : 'Ron Burgandy',
    citation : 'Anchorman',
    year : '2004',
    tags : 'Movie' },

  { quote : 'Behind every great man is a woman rolling her eyes',
    source : 'Jim Carrey',
    tags : 'Actor' },

  { quote : 'Work smart, not hard',
    source : 'Anonymous',
    tags : 'Inspirational' },

  { quote : 'Innovation distinguishes between a leader and a follower',
    source : 'Steve Jobs',
    citation : 'The Innovation Secrets of Steve Jobs',
    year : '2001', tags : 'Leader' },

];



//Generates a random number and returns one of the quotes in the quotes array
function getRandomQuote () {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

//Calls the getRandomQuote function and assigns it to getQuote variable
function printQuote (){
var getQuote = getRandomQuote();
    quoteToPrint = '<p class="quote"> ' + getQuote.quote + '</p>';
    quoteToPrint += '<p class="source">' + getQuote.source;

    //Checks if the citation object is undefined, if it is not
    //undefined it adds the citation object from the quotes array
    if (getQuote.citation !== undefined) {
      quoteToPrint += ', ' + getQuote.citation;
    }

    //Checks if the year object is undefined, if it is not
    //undefined it adds the year object from the quotes array
    if (getQuote.year !== undefined) {
      quoteToPrint += ', ' + getQuote.year;
    }

    //Checks if the tags object is undefined, if it is not
    //undefined it adds the citation object from the tags array
    if (getQuote.tags !== undefined) {
      quoteToPrint += ', ' + getQuote.tags;
    }

  //Prints quote to page
  document.getElementById('quote-box').innerHTML = quoteToPrint;

  //Calls the randomBackground fuction to change the background colour
  randomBackground ();
}

//Extra Credit

//1. Add further object properties such as tags

//2. Change backround colour to a random colour for each button click

//This function generates a random number for red, green and blue and combines
//them to generate a new background colour
function randomBackground () {
  var red = Math.floor( Math.random() * 256 );
  var green = Math.floor( Math.random() * 256 );
  var blue = Math.floor( Math.random() * 256 );
  var rgbColour = 'rgb(' + red + ',' + green + ',' + blue +')';

  //Uses above generated colour to change the background
  document.body.style.backgroundColor = rgbColour;
  }
//3. Refresh the quote automatically after 20 seconds
//   using setInterval or SetTimeout

//Calls printQuote every 10 seconds to display new quote
setInterval( printQuote, 10000);
