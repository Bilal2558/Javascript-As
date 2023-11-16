
// array
document.write("<h3>........... array<h3>");
var pets = ["A ","B ", "C ", "D ","F "];
document.write("<h6>=====>",pets ,"<h6>");

// Order in array
document.write("<br><h3>...........Order in array<h3>");
 pets[1] = "cat ";
 pets[2] = "bird ";
 document.write("<h6>=====>",pets ,"<h6>");

//  Pop use to remove end word
 document.write("<br><h3>........... Pop use to remove end  word <h3>");
 pets.pop();
 document.write("<h6>=====>",pets,"<br></h6>");

//  Push use to add end  word
 document.write("<br><h3>........... Push use to add end  word <h3>");
 pets.push("fish","<br>");
 document.write("<h6>=====>",pets,"</h6>");
 
//  Shift use to remove start  word
document.write("<br><h3>...........  Shift use to remove start  word <h3>");
 pets.shift();
 document.write("<h6>=====>",pets,"<br></h6>");

 //  Unshift use to add start word
document.write("<h3>...........  Unshift  use to add start word <h3>");
pets.unshift("fish  ");
document.write("<h6>=====>",pets,"<br></h6>");

 //  Splice use to add and remove in array
 document.write("<h3>...........  Splice use to  remove in array<h3>");
pets.splice(2, 1, "pig");
document.write("<h6>=====>",pets,"<br></h6>");

 //  Splice use to add  in array
 document.write("<h3>...........  Splice use to add  in array<h3>");
pets.splice(2, 0, "foc");
document.write("<h6>=====>",pets,"<br></h6>");

 //  Slice use to copy  in array
 document.write("<h3>........... Slice use to copy  in array<h3>");
 var noPets = pets.slice(1, 3);
document.write("<h6>=====>",noPets,"<br></h6>");
