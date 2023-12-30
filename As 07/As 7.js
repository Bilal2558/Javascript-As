document.write("<h1>...........As #9-10<br><h1>");

//  1
document.write("<br><h3>...........1<br>program to take “city” name <h3>");
var city=prompt("Enter your City", "Karachi");
if(city==="Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Not Avalibale");
}

//  2
document.write("<br><h3>...........2<br>program to take “gender” <h3>");
var gender=prompt("Enter your Gender", "male")
if(gender==="male"){
    alert("Good Morning Sir.");
}
else if(gender==="female"){
    alert("Good Morning Ma’am.");
}
else{
    alert("please Enter your Gender" );
}

// 3
document.write("<br><h3>...........3<br> program to take input color of road traffic signal from the user<h3>");
var color=prompt("Enter traffic signal color", "Red")
if(color==="Red"){
    alert("Must Stop");
}
else if(color==="Yellow"){
    alert("Ready to move");
}
else if(color==="Green"){
    alert("Move now");
}
else{
    alert("please Enter traffic signal color" );
}

//  4
document.write("<br><h3>...........4<br>program to take input remaining fuel in car less than 0.25litres<h3>");
var fuel=prompt("Enter fuel in car", 0.60)
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Move" );
}

// 5
document.write("<br><h3>...........5<br>Run this script<h3>");
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// Not run
var b = 82;   
if (b++ === 83){
alert("given condition for variable b is true");
}
// ...
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
 }
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// 6
document.write("<br><h3>...........6<br> program to take input the marks obtained in three subjects & total marks.<h3>");
var marks=prompt("Total marks: ", 300);
var English=+prompt("English marks: ", 90);
var Urdu=+prompt("Urdu marks: ",50 );
var Math=+prompt("Math marks: " ,80);

// Marks_obtained
var Marks_obtained = English + Urdu + Math;
// Percentag
var Percentag=(Marks_obtained/300*100).toFixed(0);

// Total Marks Show
document.write("Total marks:  ",  marks, "<br>");

// Marks_obtained Show
document.write("<h6>Marks obtained:  ", Marks_obtained, "</h6>");

//  Percentage show
document.write("<h6>Percentage:  ", Percentag, "%</h6>");

//  Grade Show
if(Percentag>=80 ) {
    document.write("<h6>Grade: A-one",  "<br>","Excellent","</h6>");
}
else if (Percentag>=70 ) {
    document.write("<h6>Grade: A",  "<br>", "Good","</h6>");
}
else if (Percentag>=60 ) {
    document.write ("<h6>Grade: B",  "<br>","You need to improve </h6>");
}
else  {
    document.write("<h6>Grade: Fail",  "<br>", "Sorry </h6>");
}






// 7
document.write("<br><h3>...........7<br> , Guess game <h3>");
var gnum = 100;
var guess=+prompt("Enter Number for Guess game");
if(guess === gnum){
    alert("Bingo! Correct answer"); 
}
else if(gnum === guess-1 || gnum === guess+1){
    alert("Close enough to the correct answer");
}
else{
    alert(sorry);
}





// // 8
document.write("<br><h3>...........8<br>check whether the given number <h3>");
var num = +prompt(" Enter a number  is divisible by 3 ")
if (num % 3 == 0) {
    alert(" the number is divisible by 3  ")
    document.write("<h6> the number is divisible by 3  </h6>")
}
else {
    alert(" the number is  not divisible by 3  ")
}




// 9
document.write("<br><h3>...........9<br> check even or odd number<h3>");
var Number3 = prompt("Enter even or odd Number");
if (Number3 % 2 === 0) {
    alert("This is Number even");
}
else {
    alert("This is Number odd");
}





// 10
document.write("<br><h3>...........10<br> program that takes temperature<h3>");
var temperature = prompt("Enter takes  temperature number")
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}

else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else {
    alert("OMG! Today’s weather is so Cool.");
}


// // 11
document.write("<br><h3>...........11<br> create a calculator for +,-,*, / %<h3>");
var FirstNumber = +prompt("Enter First Number for calculator");
var SecondNumber = +prompt("Enter Second Number for calculator");
document.write("<h6>======>", FirstNumber + SecondNumber, "<h6>");
document.write("<h6>======>", FirstNumber - SecondNumber, "<h6>");
document.write("<h6>======>", FirstNumber / SecondNumber, "<h6>");
document.write("<h6>======>", FirstNumber * SecondNumber, "<h6>");












