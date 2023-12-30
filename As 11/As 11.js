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