document.write("<h1>...........", "As #13-15</h1>");
// 1
document.write("<br><h3>...........1 literal Array<h3>");
var literal = ["Owais "+ "Bilal "+ "Osama " +"Salman "+ "Hasnain "] ;
document.write("<h6>=====>"+literal+"</h6>");
// 2
document.write("<br><h3>...........2 object Array<h3>");
var fruits = ( "apple "+ "orange "+ "mango" );
document.write("<h6>=====>"+fruits+"</h6>");

// 3
document.write("<br><h3>...........3 strings array<h3>");
var stringArray= ["This ", "is ", "String ", "Array"];
document.write("<h6>=====>"+stringArray+"</h6>");

// 4
document.write("<br><h3>...........4 numbers array<h3>");
var numberArray= [1,2,3,4,5];
document.write("<h6>=====>"+numberArray+"</h6>");

// 5 
document.write("<br><h3>...........5 boolean array<h3>");
var boolArray=[true ,"   "+ false];
document.write("<h6>=====>"+boolArray+"</h6>");

// 6
document.write("<br><h3>...........6 mixed array<h3>");
var mixedArray= ["Pakistan: ", 1947];
document.write("<h6>=====>"+mixedArray+"</h6>");

// 7
document.write("<br><h3>...........7 education qualifications in  array<h3>");
var education= ["Qualification: <br> <br>"+"1) SSC<br>"+ "2) HSC<br>"+ "3) BCS<br>"+ "4) BS<br>"+ "5) BCOM<br>"+ "6) MS<br>"+ "7) M. Phil<br>"+ "8) PhD<br>"];
document.write("<h6>"+education+"</h6>");

// 8
document.write("<br><h3>...........8 students  result in  array<h3>");
var studentNames = ["Ali", "Bilal", "Danish"];
var totalScore= 500;
var score= [490, 440, 410];
for(var i=0; i<score.length;i++){
    document.write("<br><h6>=====> Score of " + studentNames[i] + " is " + score[i] + ". Percentage: " + score[i]*100/totalScore + "% </h6><br>");
}

// 9
document.write("<br><h3>...........9  <h3>");

// color name in  array
document.write("<h3>...........  color name in  array </h3>");
var colors =[" red", " green", " blue"];
document.write("<h6>=====>", colors + "</h6><br>");

// add frist color one more
document.write("<h3>...........A. add frist color one more in array<h3>");
colors.unshift("Yellow");
document.write("<h6>=====>",colors , "</h6>");

// add end color one more
document.write("<br><h4>...........B. add end color one more<h4>");
colors.push("Black","<br>");
document.write("<h6>=====>", colors + "</h6><br>");

// Add two more color to the beginning of the array
document.write("<h4>...........C. Add two more color to the beginning of the array<h4>");
colors.unshift( "Black", "blue");
document.write("<h6>=====>",colors,"<br></h6>");

// Delete first color in array
document.write("<h4>...........D.   Delete first color in array<h4>");
colors.shift();
document.write("<h6>=====>",colors,"<br></h6>");

// Delete last color in array
document.write("<h4>...........E.   Delete last color in array<h4>");
colors.pop();
document.write("<h6>=====>",colors,"<br></h6>");

// index color in array
document.write("<h4>...........F. index color add in array<h4>");
var indexColor=[];
// var colorNumber=+prompt("add color Number",3);
// var colorname=prompt("color name add", "yellow");
// colors[colorNumber]=colorname;
document.write("<h6>=====>"+colors+"<br></h6>");

// index color in array
document.write("<h4>...........G. index color delete in array<h4>");
// var deleteNumber=+prompt("delete Color Number",2);
// var deleteColor=prompt("deleteColor", "white");
// colors.splice(deleteNumber, 1, deleteColor);
document.write("<h6>=====>"+colors+"<br></h6>");


// 10
document.write("<br><h3>.........10  student scores & sort the array in ascending order using Array’s sort method.<h3>");
var scores= [320, 230, 480, 120];
document.write("<h6>====>Scores of Students: " +scores +  "</h6>");
document.write("<h6>====>Ordered Scores of Students: " + scores.sort()),"</h6>";

// 11
document.write("<br><br><h3>...........11 initialize  city names in array and Copy 3 array elements in selected Cites list<h3>");
var cities=["Karachi ", "lahore ", "Islambad ", "Quetta "]
document.write("<h5>===>Cities list: <h5><h6>====>",cities,"</h6>");
var selectedCites=cities.slice(2,4);
document.write("<h5>===>selected Cites list<h5><h6>====>",selectedCites,"<br></h6>");
// 12
document.write("<br><h3>...........12join method in array<h3>");
var arr=["This ", "is ", "my ", "cat "];
document.write("<h5>=>Array: </h5><h6>=====>" + arr + "</h6>");
var singleString = arr.join(" ");
document.write("<h5>=>String: </h5><h6>=====>" + singleString ,"</h6>");

// 13
document.write("<br><h3>...........13  values one by one in array<h3>");
var devices = ["keyboard " , "mouse ", "printer ", "monitor "];
document.write("==>Devices: <br><h6>======>",devices,"</h6><br>");
document.write("=>Out: <br>======>",devices.shift() + "<br>");
document.write("=>Out: <br>======>",devices.shift() + "<br>");
document.write("=>Out: <br>======>",devices.shift() + "<br>");
document.write("=>Out: <br>======>",devices.shift() + "<br>");

// 14
document.write("<br><h3>............14  values one by one order in array<h3>");
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("==>Devices: <br><h6>======>",devices,"</h6><br>");
document.write("=>Out: <br>======>",devices.pop() + "<br>");
document.write("=>Out: <br>======>",devices.pop() + "<br>");
document.write("=>Out: <br>======>",devices.pop() + "<br>");
document.write("=>Out: <br>======>",devices.pop() + "<br>");

// 15
document.write("<br><h3>...........15  phone Manu facturers in an array the dropdown<h3>");
var phoneManufacturers = ["Apple ", " Huawei ", " Samsung ", " Motorola ", " Nokia ", " Sony ", " Haier ", " Xiaomi ", " Infinix ", " Oppo ", " Vivo "];
document.write("<h6>======>",phoneManufacturers,"</h6>");
document.write("<br><h5>........... array ine dropdown<h5>");
document.write("======>","<select>");
for(var i=0; i<phoneManufacturers.length; i++){
    document.write("<option>" + phoneManufacturers[i] + "</option>")
}
document.write("</select>");
