document.write("<h1>...........", "As #21-25</h1>");

// 1
document.write("<h4>...........1 two user inputs for first and last name using prompt and merge them in a new variable titled fullName <h4>");
// let firstName = prompt("Enter first name");
// let secondName = prompt("Enter second name");
// let fullName = firstName + " " + secondName;
// document.write("<h6>=====>Hello Mr. " + fullName, "</h6>")

// 2
document.write("<h4>...........2 input about favorite mobile phone model. Find and display the length of user input in your browser <h4>");
// let userInput = prompt("Enter your favourite Mobile Phone Model");

// document.write("My favourite mobile phone model is: " + userInput + "<br>");
// document.write("Length of String: " + userInput.length);

// 3
document.write("<h4>...........3 find the index of letter “n” in the word “Pakistani” and display the result in your browser . <h4>");
let pak = "pakistani";
let FristFind = pak.indexOf("n");

document.write("<h6>=====>String: " + pak + "<br>=====> Index of 'n': " + find+ "</h6>");

// 4
document.write("<h4>...........4 find the last index of letter “l” in the word “Hello World”  <h4>");
let Hello = "Hello World";
let LastFind = Hello.lastIndexOf("l");

document.write("<h6>=====>String: " + Hello + "<br>=====>Last index of 'l': " + LastFind+ "</h6>");

// 5
document.write("<h4>...........5 find the character at 3rd index in the word “Pakistani” <h4>");
let pak2 = "pakistani";
let indCharAt = pak2.charAt(3);

document.write("<h6>=====>String is: " + pak2 + "<br>=====> Character at Index 3: " + indCharAt + "</h6>");

// 6
document.write("<h4>...........6 Repeat Q1 using string concat() method. <h4>");
// let fName = prompt("Q6: Enter first name");
// let lName = prompt("Q6: Enter last name")
// //let cocatenate = fName.concat("", lName);

// document.write("<h6>=====>Hi Mr. " + fName.concat(" ", lName) +"</h6>");

// 7
document.write("<h4>...........7 replace the “Hyder” to “Islam” in the word “Hyderabad” <h4>");
let strHyd= "Hyderabad";
let repIslam = strHyd.replace("Hyder", "Islam");

document.write("<h6>=====>City: " + strHyd + "<br> =====>after replacement: " + repIslam+ "</h6>");

// 8
document.write("<h4>...........8 replace all occurrences of “and” in the string with “&” <h4>");
let strRepAll= "Ali and Sami are best friends. They play cricket and football together";
let repAll = strRepAll.replaceAll("and", "*<b>&</b>*");
// var repGlobal = strRepAll.replace(/and/g, "*<b>&</b>*")

document.write("<h6>=====>String is: " + strRepAll + "<br>=====>After replacement: " + repAll + "</h6>");
// let secondName = prompt("Enter second name");
// let fullName = firstName + " " + secondName;
// document.write("<h6>=====>Hello Mr. " + fullName, "</h6>")

// 2
document.write("<h4>...........2 input about favorite mobile phone model. Find and display the length of user input in your browser <h4>");
// let userInput = prompt("Enter your favourite Mobile Phone Model");

// document.write("My favourite mobile phone model is: " + userInput + "<br>");
// document.write("Length of String: " + userInput.length);

// 3
document.write("<h4>...........3 find the index of letter “n” in the word “Pakistani” and display the result in your browser . <h4>");
let pak = "pakistani";
let FristFind = pak.indexOf("n");

document.write("<h6>=====>String: " + pak + "<br>=====> Index of 'n': " + find+ "</h6>");

// 4
document.write("<h4>...........4 find the last index of letter “l” in the word “Hello World”  <h4>");
let Hello = "Hello World";
let LastFind = Hello.lastIndexOf("l");

document.write("<h6>=====>String: " + Hello + "<br>=====>Last index of 'l': " + LastFind+ "</h6>");

// 5
document.write("<h4>...........5 find the character at 3rd index in the word “Pakistani” <h4>");
let pak2 = "pakistani";
let indCharAt = pak2.charAt(3);

document.write("<h6>=====>String is: " + pak2 + "<br>=====> Character at Index 3: " + indCharAt + "</h6>");

// 6
document.write("<h4>...........6 Repeat Q1 using string concat() method. <h4>");
// let fName = prompt("Q6: Enter first name");
// let lName = prompt("Q6: Enter last name")
// //let cocatenate = fName.concat("", lName);

// document.write("<h6>=====>Hi Mr. " + fName.concat(" ", lName) +"</h6>");

// 7
document.write("<h4>...........7 replace the “Hyder” to “Islam” in the word “Hyderabad” <h4>");
let strHyd= "Hyderabad";
let repIslam = strHyd.replace("Hyder", "Islam");

document.write("<h6>=====>City: " + strHyd + "<br> =====>after replacement: " + repIslam+ "</h6>");

// 8
document.write("<h4>...........8 replace all occurrences of “and” in the string with “&” <h4>");
let strRepAll= "Ali and Sami are best friends. They play cricket and football together";
let repAll = strRepAll.replaceAll("and", "*<b>&</b>*");
// var repGlobal = strRepAll.replace(/and/g, "*<b>&</b>*")

document.write("<h6>=====>String is: " + strRepAll + "<br>=====>After replacement: " + repAll + "</h6>");

// ---------- Task 01 ---------

document.write("<h3> Question 01 </h3>")

let firstName = prompt("Q1: Enter first name");
let secondName = prompt("Q1: Enter second name");
let fullName = firstName + " " + secondName;

document.write("Hello Mr. " + fullName);
document.write("<br> <br>");


// ---------- Task 02 ---------

document.write("<h3> Question 02 </h3>")

let userInput = prompt("Q2: Enter your favourite Mobile Phone Model");

document.write("My favourite mobile phone model is: " + userInput + "<br>");
document.write("Length of String: " + userInput.length);

document.write("<br> <br>");


// ---------- Task 03 ---------

document.write("<h3> Question 03 </h3>")

let pakStr = "pakistani";
let indOf = pakStr.indexOf("n");

document.write("String is: " + pakStr + "<br> Index of 'n' is: " + indOf);

document.write("<br> <br>");


// ---------- Task 04 ---------

document.write("<h3> Question 04 </h3>")

let helloStr = "Hello World";
let lIndOf = helloStr.lastIndexOf("l");

document.write("String is: " + helloStr + "<br> Last Index of 'l' is: " + lIndOf);

document.write("<br> <br>");


// ---------- Task 05 ---------

document.write("<h3> Question 05 </h3>")

let pakStr2 = "pakistani";
let indCharAt = pakStr2.charAt(3);

document.write("String is: " + pakStr2 + "<br> Character at Index 3 is: " + indCharAt);

document.write("<br> <br>");


// ---------- Task 06 ---------

document.write("<h3> Question 06 </h3>")

let fName = prompt("Q6: Enter first name");
let lName = prompt("Q6: Enter last name")
//let cocatenate = fName.concat("", lName);

document.write("Hi Mr. " + fName.concat(" ", lName));

document.write("<br> <br>");


// ---------- Task 07 ---------

document.write("<h3> Question 07 </h3>")

let strHyd= "Hyderabad";
let repIslam = strHyd.replace("Hyder", "Islam");

document.write("String is: " + strHyd + "<br> String after replacement is: " + repIslam);

document.write("<br> <br>");


// ---------- Task 08 ---------

document.write("<h3> Question 08 </h3>")

let strRepAll= "Ali and Sami are best friends. They play cricket and football together";
let repAll = strRepAll.replaceAll("and", "&");

document.write("String is: " + strRepAll + "<br> String after replacement is: " + repAll);

document.write("<br> <br>");


// ---------- Task 09 ---------

document.write("<h3> Question 09 </h3>")

let value = "472";
document.write("Value: " + value + "<br> Type: " + typeof value);
let convert = parseInt(value);
document.write("<br> Value: " + convert + "<br> Type: " + typeof convert);

document.write("<br> <br>");


// ---------- Task 10 ---------

document.write("<h3> Question 10 </h3>")

let userInp = prompt("Q10: Which nut do you like?");
document.write("User Input: " + userInp);
document.write("<br> Upper Case: " + userInp.toUpperCase());

document.write("<br> <br>");


// ---------- Task 11 ---------

document.write("<h3> Question 11 </h3>")

let js = "javascript";
let up = js.slice(0,1).toUpperCase();
document.write("User Input: " + js + "<br> Title Case: " + up + js.slice(1));

document.write("<br> <br>");


// ---------- Task 12 ---------

document.write("<h3> Question 12 </h3>")

let num = 35.38;
let numToStr = num.toString();
let strNum = numToStr.replace(".", "")

document.write("Number: " + num + "<br> Result: " + strNum);

document.write("<br> <br>");


// ---------- Task 13 ---------

document.write("<h3> Question 13 </h3>")

let userName = prompt("Q 13: Enter your username:");
const specialSymbols = ["@", ".", ",", "!"];
var mark = true;
for(let i= 0; i < userName.length; i++){
    if(userName.includes(specialSymbols[i])){
        mark = true;
        break;
    }
    else{
        mark = false;
        //break;
    }
}
if(mark == true){
    document.write("Invalid Password, please enter a password without [@.,!]")
}
else{
    document.write("Username is valid. Welcome,  " + userName + "!" )
}

document.write("<br> <br>");


// ---------- Task 14 ---------

document.write("<h3> Question 14 </h3>")


let bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];

let uInputBakery= prompt("Q 14: Welcome to ABC Bakery. What do you want to order sir/mam?").toLowerCase();
let flag = true;
var BakeInd = 0;
for(var i = 0; i < bakeryItems.length; i++){
    if(bakeryItems[i] === uInputBakery.toLowerCase()){
        flag = true;
        BakeInd = i;
        break;
    }
    else{
        flag = false;
    }
}
if(flag){
    document.write(uInputBakery + " is available at index " + BakeInd + " in our bakery")
}
else{
    document.write("Sorry " + uInputBakery + " is not available")
}

document.write("<br> <br>");


// ---------- Task 15 ---------

document.write("<h3> Question 15 </h3>")


var password = prompt("Q 15: Please enter your password:");

var nums = [1,2,3,4,5,6,7,8,9,0];

var flags = true;

if(password.length >= 6){
  for(let i = 0; i < password.length; i++){
    
    if(password.includes(nums[i]) && password[0] != nums[i]){
      flags = true;
      break;
    }
    else{
      flags = false;
      //break;
    }
  }
    
  if(flags == true){
    document.write("Valid Password");
  }
  else{
    document.write("Invalid Password! Password must contain alphabets and numbers, and should not be started with number");
  }
}
  
else{
  document.write("Minimum 6 characters are required");
}

document.write("<br> <br>");


// ---------- Task 16 ---------

document.write("<h3> Question 16 </h3>")

let university = "University of Karachi";
let uniArray = university.split("");

for(var i=0; i<uniArray.length; i++){
    document.write(uniArray[i] + "<br>")
}

document.write("<br> <br>");


// ---------- Task 17 ---------

document.write("<h3> Question 17 </h3>")

let uInput = prompt("Q 17: Please enter a word");
let lastChar = uInput.slice(-1);

document.write("User Input: " + uInput + "<br> Last Character of User Input: " + lastChar);

document.write("<br> <br>");


// ---------- Task 18 ---------

document.write("<h3> Question 18 </h3>")

let fox = "the quick brown fox jumps over the lazy dog";
let word = "the"

let find = fox.matchAll(word);
let count = Array.from(find).length;

document.write("Text: " + fox + "<br> There are " + count + " occurrence(s) of the word '" + word + "'");

document.write("<br> <br>");