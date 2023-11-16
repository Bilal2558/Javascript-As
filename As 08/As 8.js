document.write("<h1>...........", "As #12-13</h1>");

// 1
document.write("<h3>...........1<br> checks  string uppercase letter or lower case letter.<h3>");
var character =prompt("Inter character string");
if (character == character.toUpperCase()) {
 alert ('upper case true');
}
else if (character == character.toLowerCase()){
 alert ('lower case true');
}
else{
    alert("Inter character string");
}


// 2
document.write("<h3>...........3<br> display  larger and equal number<h3>");
var num1 =prompt("Inter number");
var num2 =prompt("Inter number");
if (num1 === num2) {
 alert ('equal number');
}
else if  (num1 > num2 ){
 alert ('larger number');
}
else{
    alert("Small number");
}


// 3
document.write("<h3>...........3<br> check number is positive negative or zero in javascript<h3>");
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    alert("The number is positive");
}

// check if number is 0
else if (number == 0) {
    alert("The number is zero");
}

// if number is less than 0
else {
    alert("The number is negative");
}


// 4
document.write("<h3>...........4<br>character vowel and Consonant<h3>");
var vowel_Consonant =prompt("Inter Words vowel and Consonant");
if ("a"===vowel_Consonant ) {
 alert ("vowel words");
}
else if("i"===vowel_Consonant ) {
    alert ("vowel words");
   }
   else if("e"===vowel_Consonant ) {
    alert ("vowel words");
   }
   else if("o"===vowel_Consonant ) {
    alert ("vowel words");
   }
   else if("u"===vowel_Consonant ) {
    alert ("vowel words");
   }
else{
    alert(" Consonant words");
}


// 5
document.write("<h3>...........5<br> Correct and Incorrect password<h3>");
var mypsd = 1234
var password = +prompt("Inter password in number");
if (password == 0) {
    alert("Please enter your password");
}
else if (password == mypsd) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password ");
}


document.write("<h3>...........6<br> if/else statement fix <h3>");
var hour =prompt("inter hour in number");
if (hour < 18) {
alert ("Good day");
}
else {
alert("Good evening");
}


document.write("<h3>...........7<br> 24 hours clock format like: 1900 = 7pm.  <h3>");
var time = +prompt("inter time in 24 format");
// Good morning
if (time >= 0 && time < 12) {
    alert("Good morning")
}
// Good afternoon
else if (time >= 12 && time < 17) {
    alert("Good afternoon")
}
// Good evenning
else if (time >= 17 && time < 21) {
    alert("Good evenning")
}
// Good nigh
else if (time >= 21 && time <= 24) {
    alert("Good night")
}

else {
    alert("inter time in 24 format");
}