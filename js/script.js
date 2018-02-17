// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  { quote : "This is the first quote", source : "Person's name" },
  { quote : "this is the second quote", source : "Person's quote" },
  { quote : "this is the third quote", source : "Person's name" },
  { quote : "this is the fourth quote", source : "Person's name" },
  { quote : "this is the fifth quote", source : "Person's name", citation : "this is where the quote comes from", year : "Year of the quote" }
];
console.log("123");
