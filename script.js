var q1, q2 , q3 , q4 , q5;
var quotes = [q1,q2,q3,q4,q5];

class quote  {
  constructor(quote,source,citation,year) {
    this.quote = quote;
    this.source = source;
    this.citation = citation;
    this.year = year;
  }
}

setInterval(function () {document.getElementById("Button").click();}, 5000);

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

var sayings = ["Together we can change the world","Goals transform a random walk into a chase","Maybe life is random, but I doubt it","I take random inspiration from everywhere","Our time on Earth is so random"];
var sources = ["Ron Hall","Mihaly Csik","Steven Tyler","Edward Enninful","Lisa Ling"];
var citations = ["APA","MLA","Chicago","APA","MLA"];
var years = [1992,1993,2004,2013,2010];

for (var i = 0;i < quotes.length; i+=1)
    {
      quotes[i] = new quote(sayings[i],sources[i],citations[i],years[i]);
    }


function getRandomQuote()
{

randomIndex = Math.floor( ( Math.random() * quotes.length) );  
    
return quotes[randomIndex]
}

function printQuote()
{
var html = '';  
var randomQuote = getRandomQuote();
html += '<p class = "quote">' + '"' + randomQuote.quote + '."</p>';
html += '<p class = "source">' + '-' + randomQuote.source + ', ';
html += '<span class = "citation">' + randomQuote.citation + ', ' + '</span>';
html += '<span class = "year">' + randomQuote.year + '</span>';
html += '</p>';
document.write(html);    
}

random_bg_color();
printQuote();