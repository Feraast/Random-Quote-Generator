var q1, q2 , q3 , q4 , q5;
//This array will be filled with quote objects
var quotes = [q1,q2,q3,q4,q5];

document.getElementById("showAnother").addEventListener("click", printQuote, false);

quotes[0] = new Object();
quotes[0].quote = "Together we can change the world";
quotes[0].source = "Ron Hall";
quotes[0].citation = "The Book";

quotes[1] = new Object();
quotes[1].quote = "Goals transform a random walk into a chase";
quotes[1].source = "Sean Don";
quotes[1].year = 2001;

quotes[2] = new Object();
quotes[2].quote = "Life's a Trip";
quotes[2].source = "Trippie Redd";
quotes[2].citation = "Some song";
quotes[2].year = 2019;

quotes[3] = new Object();
quotes[3].quote = "Love is a drug";
quotes[3].source = "Anonymous";
quotes[3].year = 2004;

quotes[4] = new Object();
quotes[4].quote = "You never know where your motivation wil come from";
quotes[4].source = "Future Hendrix";
quotes[4].citation = "DC2";
//Additional property
quotes[4].tags = ["Motivation","Inspiration"]

//Every 5 seconds, the button is clicked
setInterval(function () {document.getElementById("showAnother").click();}, 5000);

// Function to create a random color to be used in the background
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

//Returns the corresponding quote at index 0 through 4 randomly
function getRandomQuote()
{

randomIndex = Math.floor( ( Math.random() * quotes.length) );  
    
return quotes[randomIndex]
}

//String concatenation used to write html directly to the document, classes are used to modify css
function printQuote()
{
var html = '';  
var randomQuote = getRandomQuote();
    
html += '<p class = "quote">' + '"' + randomQuote.quote + '."</p>'; 
html += '<p class = "source">' + '-' + randomQuote.source;
    
if (typeof(randomQuote.citation) !== 'undefined')
{
html += ', ' + '<span class = "citation">' + randomQuote.citation + '</span>';
}
    
if (typeof(randomQuote.year) !== 'undefined')
{
html += ', ' + '<span class = "year">' + randomQuote.year + '</span>';
}
    
if (typeof(randomQuote.tags) !== 'undefined')
{
html += ', ' + '<span class = "tags">' + randomQuote.tags + '</span>';
}
    
html += '</p>';
random_bg_color()
document.getElementById("quote-box").innerHTML = html;
}

printQuote();