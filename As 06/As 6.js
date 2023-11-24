document.write("<h1>...........As 06.01<br><h1>");

// 1
document.write("<h3>...........1</h3>");
var a=10;
document.write("<h6>...........",a,"</h6>");

document.write("<h4>..........value increase</h4>")
document.write("<h6>...........",++a,"</h6>");
document.write("<h6>...........",++a,"</h6>");

document.write("<h4>..........value decrease</h4>")
document.write("<h6>...........",--a,"</h6>");
document.write("<h6>...........",--a,"</h6>");

// 2
document.write("<h3>...........2</h3>");
var a = 2, b = 1 ;
document.write("<h6>&nbsp;&nbsp;&nbsp;a...........", a, "</h6>");
document.write("<h6>&nbsp;&nbsp;&nbsp;b...........", b, "</h6>");

//                 1   +     2       =3        
var result = --a - --b + ++b + b--;
document.write("<h6>&nbsp;&nbsp;&nbsp;result.....", result, "</h6>");

//                              0
document.write("<h6>...........", --a, "</h6>");

//                              0   - 0  =0
document.write("<h6>...........", --a - --b, "</h6>");

//                             0  -   0   +  1   = -1
document.write("<h6>...........",--a - --b + ++b, "</h6>");

//                             0 -   0  +   2  +    1  = -3
document.write("<h6>...........",--a - --b + ++b + b--,"</h6>" );

// 3
document.write("<h3>...........3</h3>");
 var yourName =prompt("your name", "Bilal");
 document.write("..........yourName: ",yourName,);
 alert ("weloome");


 // 4
document.write("<h3>...........4</h3>" ,"<br>");
var subjects1 =prompt("subjects1", "Urdo ");
var subjects2 =prompt("subjects2", "English ");
var subjects3 =prompt("subjects3", "Math ");

var number1 =+prompt("number1", "50 ");
var number2 =+prompt("number2", "50 ");
var number3 =+prompt("number3", "70 ", );
document.write("<h6>...........",subjects1, 100, "   ", number1, "  ", number1/100*100 ,"% ", "</h6>")
document.write("<h6>...........",subjects2, 100, "   ", number2, "  ", number2/100*100 ,"% ", "</h6>")
document.write("<h6>...........",subjects3, 100, "   ", number3, "  ", number3/100*100 ,"% ", "</h6>")
var total= number1+number2+number3;
document.write("<h6>...........","                "   , "    300", "   "   , number1+number2+number3  ,"  ", (total/300*100).toFixed(0), "% </h6>")

// 5
document.write("<br><h3>...........5</h3>");
var num = prompt("Enter Number", "5") //prompt user to enter the number
var num = parseInt(num); //parse the num to number
var i = 0;
document.write('<table border="1" cellspacing="0">');
  for (i = 1; i <= 10; i++) {
    document.write( "<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
  }
