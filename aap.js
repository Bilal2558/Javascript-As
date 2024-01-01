
// array
document.write("<h3>........... array<h3>");
var pets = ["A ", "B ", "C ", "D ", "F "];
document.write("<h6>=====>", pets, "<h6>");

// Order in array
document.write("<br><h3>...........Order in array<h3>");
pets[1] = "cat ";
pets[2] = "bird ";
document.write("<h6>=====>", pets, "<h6>");

//  Pop use to remove end word
document.write("<br><h3>........... Pop use to remove end  word <h3>");
pets.pop();
document.write("<h6>=====>", pets, "<br></h6>");

//  Push use to add end  word
document.write("<br><h3>........... Push use to add end  word <h3>");
pets.push("fish", "<br>");
document.write("<h6>=====>", pets, "</h6>");

//  Shift use to remove start  word
document.write("<br><h3>...........  Shift use to remove start  word <h3>");
pets.shift();
document.write("<h6>=====>", pets, "<br></h6>");

//  Unshift use to add start word
document.write("<h3>...........  Unshift  use to add start word <h3>");
pets.unshift("fish  ");
document.write("<h6>=====>", pets, "<br></h6>");

//  Splice use to add and remove in array
document.write("<h3>...........  Splice use to  remove in array<h3>");
pets.splice(2, 1, "pig");
document.write("<h6>=====>", pets, "<br></h6>");

//  Splice use to add  in array
document.write("<h3>...........  Splice use to add  in array<h3>");
pets.splice(2, 0, "foc");
document.write("<h6>=====>", pets, "<br></h6>");

//  Slice use to copy  in array
document.write("<h3>........... Slice use to copy  in array<h3>");
var noPets = pets.slice(1, 3);
document.write("<h6>=====>", noPets, "<br></h6>");

// Changing case
var myName = "Bilal";
document.write("<h3>........... UpperCase<h3>");
document.write("<h6>=====>", myName.toLocaleUpperCase(), "<br></h6>");
document.write("<h3>...........LowerCase<h3>");
document.write("<h6>=====>", myName.toLocaleLowerCase(), "<br></h6>");

var firstChar = myName.slice(0, 1);
var otherChars = myName.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var capitalize = firstChar + otherChars;
document.write("<h3>...........capitalize<h3>");
document.write("<h6>=====>", capitalize, "<br></h6>");

document.write("<h3>=====>", "double spaces", "<br></h3>");
// var fullName=prompt( "Muhammad   Bilal");
// for (var i = 0; i < fullName.length; i++) {
//      if (fullName.slice(i, i + 2) === "  ") {
//      alert("No double spaces!");
//      break;
//     }
//      }
var userInput = "In which  city do you live?";
lengthUserInput = userInput.length;
correctName = true;

for (i = 0; i < lengthUserInput; i++) {
  if (userInput.slice(i, i + 2) === "  ") {
    correctName = false;
  }
}

if (correctName === false) {
  alert("Double spaces  not allowed");
  document.write("Double spaces  not allowed");
} else {
  alert(userInput);
  document.write(userInput);
}

document.write("<h3>=====>", "print first 3 letters", "<br></h3>");
var month = "November";
var charsInMonth = month.length;
if (charsInMonth > 3) {
  monthAbbrev = month.slice(0, 3);
}
document.write(monthAbbrev);

document.write("<h3>=====>", "print last 3 letters", "<br></h3>");
var Name = "Bilal";
document.write(Name.slice(-3));

document.write("<h3>=====>", "find without method", "<br></h3>");
var texWord = "lorem ipsum dolor sit amet,";
var find = "dolor";
for (var i = 0; i < texWord.length; i++) {
  if (texWord.slice(i, i + find.length) === find) {
    document.write(find);
    break
  }
}

document.write("<h3>=====>", "find with method ", "<br></h3>");
var texWord = "lorem ipsum dolor sit amet,";
var find = "dolor";
document.write(texWord.indexOf(find));

document.write("<h3>=====>", "find with statment ", "<br></h3>");
if (texWord.indexOf(find) !== -1) {
  document.write("match");
}
else {
  document.write("no match");
}

document.write("<h3>=====>", "Replace without method", "<br></h3>");
var text = "It is startling to think that, even in the darkest depths of World War II, J. R. R. ";
document.write("<h6>", text, "</h6>");
for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 12) === "World War II") {
    text = text.slice(0, i) + "*<b>Second  War</b>*" + text.slice(i + 12);
  }
}
document.write("<h6>", text, "</h6>");

document.write("<h3>=====>Replace with method  indexOf</h3>");
var text = "To be or not to be.";
document.write("<h6>", text, "</h6>");
var segIndex = text.indexOf("be");
if (segIndex !== -1) {
  text = text.slice(0, segIndex) + "*<b>bablo</b>*" + text.slice(segIndex + 1);
  document.write("<h6>", text, "</h6>");
}

document.write("<h3>=====>Replace with method  lastIndexOf</h3>");
var text = "To be or not to be.";
document.write("<h6>", text, "</h6>");
var segIndex = text.lastIndexOf("be");
if (segIndex !== -1) {
  text = text.slice(0, segIndex) + "*<b>bablo</b>*";
  document.write("<h6>", text, "</h6>");
}

document.write("<h3>=====>Replace method  </h3>");
var text = "To be or not to be.";
var newText = text.replace("be", "*<b>bablo</b>*");
document.write("<h6>", newText, "</h6>");

document.write("<h3>=====>ReplaceAll method  </h3>");
var newText = text.replaceAll("be", "*<b>bablo</b>*");
document.write("<h6>", newText, "</h6>");

document.write("<h3>=====>Replace method global </h3>");
var text = "To be or not to be.";
var newText = text.replace(/be/g, "*<b>bablo</b>*")
document.write("<h6>", newText, "</h6>");

document.write("<h3>=====>typeof</h3>");
document.write("<h6>", typeof (newText), "</h6>");

document.write("<h3>=====>.charAt</h3>");
let str = "Welcom";
let index = 5;
let ctr = str.charAt(index);
document.write("<h6>", str, "</h6>");
document.write("<h6>", index, "</h6>");

document.write("<h5>=====>.charAt method 1</h5>");
document.write("<h6>Character at " + index + "th position is: " + ctr, "</h6>");

document.write("<h5>=====>.charAt method 2</h5>");
var lastChar = str.charAt(str.length - 1);
document.write("<h6>Character at " + "5th position is: " + lastChar, "</h6>");

document.write("<h3>=====>split</h3>");
document.write("<h5>=====جملے میں سے کسی بھی لفظ کو حاصل کرنا</h5>");
var text1= "my name is muhamad bilal"
document.write("<h6>", text1, "</h6>");
var spl = text1.split(" ")
 document.write(spl[3], "<br>");

 document.write("<h5>=====جملے میں سے ہر لفظ کا پہلا حرف کیپیٹل کرنا</h5>");
 var text2= "my name is Ali";
 document.write("<h6>", text2, "</h6>");
 var Array=[];
 var spl = text2.split(" ")
for (var i = 0; i <spl.length; i++) {
  var proper = spl[i][0].toUpperCase() + spl[i].slice(1);
  Array.push(proper);
}
// document.write(Array);

var joi = Array.join (" ")
document.write(joi);

document.write("<h3>=====>Math.round </h3>");
let a = Math.round(2.60);
document.write("<h6>", a, "</h6>");

document.write("<h3>=====>پیچھے سے آگے راونڈ کرنا </h3>");
let b = Math.ceil(2.60);
document.write("<h6>", b, "</h6>");

document.write("<h3>=====آگے سے پیچھے راونڈ کرنا</h3>");
let c = Math.floor(2.60);
document.write("<h6>", c, "</h6>");

document.write("<h3>=====random numbers</h3>");
var bigDecimal = Math.random();
document.write("<h6>", bigDecimal, "</h6>");

document.write("<h3>=====</h3>");
var improvedNum = (bigDecimal * 6) + 1;
document.write("<h6>", improvedNum, "</h6>");


// var currentAge = prompt("Enter your age.");
// var yearsEligibleToVote = currentAge - 18;

document.write("<h3>=====code run</h3>");
var profit = "200" - "150";
document.write("<h6>", profit, "</h6>");

document.write("<h3>=====parseInt </h3>");
var myInteger = parseInt("1.9999");
document.write("<h6>", myInteger, "</h6>");

document.write("<h3>=====parseFloat </h3>");
var myFractional = parseFloat("1.9999");
document.write("<h6>", myFractional, "</h6>");

document.write("<h3>=====convert Number </h3>");
var integerString = "24"
var num = Number(integerString);
document.write("<h6>",typeof num , "</h6>")

document.write("<h3>=====convert String </h3>");
var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();
document.write("<h6>", typeof numberAsString , "</h6>")

document.write("<h3>=====code </h3>");
var total =  (5.555 * 5.119);
document.write("<h6>", total , "</h6>")

document.write("<h3>=====toFixed</h3>");
var prettyTotal = total.toFixed(2);
document.write("<h6>", prettyTotal, "</h6>")

document.write("<h3>=====add a dollar sign, and you're all set</h3>");
var currencyTotal = "$" + prettyTotal;
document.write("<h6>", currencyTotal, "</h6>")

document.write("<h3>=====code run</h3>");
var num =5;
var str1 = num.toString();
if (str1.charAt(str1.length - 1) === "5") {
str = str1.slice(0, str.length - 1) + "6";
document.write("<h6>", str, "</h6>")
 }
num = Number(str1);
prettyNum = num.toFixed(2);
document.write("<h6>", prettyNum, "</h6>")

document.write("<h3>=====Date method</h3>");
var rightNow = new Date();
document.write("<h6>", rightNow.toLocaleDateString(), "</h6>")
document.write("<h6>", rightNow.toDateString(), "</h6>")
document.write("<h6>", rightNow.toLocaleString(), "</h6>")
document.write("<h6>", rightNow.toLocaleTimeString(), "</h6>")

document.write("<h3>=====getDay</h3>");
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("<h6>", nameOfToday, "</h6>")

// const lastYear = new Date("2021-03-25");
// lastYear.getFullYear();
// document.write("<h6>", lastYear, "</h6>")

document.write("<h3>=====.getMonth</h3>");
var d = new Date();
var currentMonth = d.getMonth();
document.write("<h6>", currentMonth+1, "</h6>")

document.write("<h3>=====.getDate</h3>");
var dayOfMonth = d.getDate();
document.write("<h6>", dayOfMonth, "</h6>")

document.write("<h3>=====.getFullYear</h3>");
var currYr = d.getFullYear();
document.write("<h6>", currYr, "</h6>")

document.write("<h3>=====.getHours</h3>");
var currentHrs = d.getHours();
document.write("<h6>", currentHrs, "</h6>")

document.write("<h3>=====.getMinutes</h3>");
var currMins = d.getMinutes();
document.write("<h6>", currMins, "</h6>")

document.write("<h3>=====.getSeconds</h3>");
var currSecs = d.getSeconds()
document.write("<h6>", currSecs, "</h6>")

document.write("<h3>=====getMilliseconds</h3>");
var currMills = d.getMilliseconds();
document.write("<h6>", currMills, "</h6>")

document.write("<h3>=====.getTime</h3>");
var d = new Date();
var millsSince = d.getTime();
document.write("<h6>", millsSince, "</h6>")


document.write("<h3>==Time in pm and am</h3>");

document.write("<h3>=====Time in pm and am</h3>");

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

document.write(formatAMPM(new Date));


document.write("<h1>===Bilal</h1>");


