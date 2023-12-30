document.write("<h1>...........", "As #17-20</h1>");

// 1
document.write("<br><h3>...........1 multidimensional array (Array of arrays)<h3>");
let array1=[["A","B","C","D"], [1,2,3,4], ["a","b","c","d"]];
for(var a=0; a<array1.length; a++){
    document.write("<h6>=====>",array1[a].join(" "), "</h6>")
}

// 2
document.write("<br><h3>...........2 multidimensional array representing the matrix<h3>");
let array2=[[0,1,2,3], [1,0,1,2], [2,1,0,1]];
for(var a=0; a<array2.length; a++){
    document.write("<h6>=====>"+array2[a].join(" "), "</h6>")
}

// 3
document.write("<br><h3>...........3 program to print numeric counting from 1 to 10<h3>");
for(var a=1; a<=10; a++){
    document.write("<h6>=====>",a, "</h6>");
}


// 4
document.write("<br><h3>...........4 multiplication table<h3>");
// let table= +prompt("Enter a Number of Multiplication Table");
// let endPoint = +prompt("Enter A Number of End of Table");

// for(var i=1; i<=endPoint; i++){
//     document.write("<h6>=====>",table + " x " + i + " = " + i*table,"</h6>");
   
// }

// 5
document.write("<br><h3>...........5  print items of the following array using for loop<h3>");
var fruits= ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<fruits.length; i++){
    document.write("<h6>=====>", fruits[i],"</h6>");
    
}
document.write("<br>");

for(var i=0; i<fruits.length; i++){
    document.write("<h6>=====>","Element at Index " + i + " is " + fruits[i],"</h6>");
}

// 6
document.write("<br><h3>...........6  Generate the following series in your browser.<h3>");
document.write("<h5>  Counting: </h5>");
for(var i=1; i<=15;i++){
document.write(i ,",   ");
}

document.write("<h5>  Reverse counting: </h5>");
for(var i=15; i>=1;i--){
    document.write(i ,",   ");
    }

    document.write("<h5>  Even: </h5>");
    for(var i=0; i<=20;i+=2){
        document.write(i ,",   ");
        }

        document.write("<h5>  Odd: </h5>");
        for(var i=1; i<=20;i+=2){
            document.write(i ,",   ");
            }

            document.write("<h5>  Series:</h5>");
            for(var i=2; i<=20;i+=2){
                document.write(i ,"K,  ");
                }

// 7
document.write("<br><h3>...........7  Generate the following series in your browser.<h3>");
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/mam?");
var available;

for(var i=0; i<items.length; i++){
    if(userInput === items[i]){
        available="yes";
    }
   
}
if(available==="yes"){
    document.write(userInput + " is/are <b> available </b> at index " + i + " in our bakery");
}
else{
    document.write("=====>We are sorry. " + userInput + " is/are <b> not available </b> in our bakery.");
}



// 8
document.write("<br><h3>...........8  program to identify the largest number in array<h3>");
var A= [24, 53, 78, 91, 12];
document.write("<h6>=====>Array items: ",A,"</h6>");

var largest=A[0];
for(var i=1; i<A.length; i++){
    if(A[i] > largest){
        largest = A[i];
    }
}
document.write(`<h6>=====>Largest value is ${largest}</h6>`);

// 9
document.write("<br><h3>...........9  program to identify the smallest number in array<h3>");
var A= [24, 53, 78, 91, 12];
document.write("<h6>=====>Array items: ",A,"</h6>");

var smallest=A[0];
for(var i=1; i<A.length; i++){
    if(A[i] < smallest){
        smallest = A[i];
    }
}
document.write(`<h6>=====>smallest  value is ${smallest}</h6>`);

// 10
document.write("<br><h3>...........10   program to print multiples of 5 ranging 1 to 100.<h3>");
for(var i=5; i<=100; i+=5){
    document.write(`<h6>=====> ${i}</h6>`);
    }