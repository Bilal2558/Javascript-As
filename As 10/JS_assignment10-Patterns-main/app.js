// ----------------- TASK 01 -----------------

document.write("<h2> Pattern 01 </h2>");
for (var a = 0; a <= 5; a++) {
  for (var b = a; b <= 5; b++) {
    document.write(" * ");
  }
  document.write("<br>");
}

document.write("<br>");

// ----------------- TASK 02 -----------------

document.write("<h2> Pattern 02 </h2>");
for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write(a + "&nbsp;&nbsp;");
  }
  document.write("<br>");
}

document.write("<br>");

// ----------------- TASK 03 -----------------

document.write("<h2> Pattern 03 </h2>")
document.write("<div align=right style='width: 80px'> ");
for (var a = 1; a <= 5; a++) {
  if (a <= 5) {
    for (var b = 1; b <= a; b++) {
      document.write(b);
      document.write("&nbsp; ")
    }
  } else {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br>");
}
document.write("</div>")

document.write("<br>");

// ----------------- TASK 04 -----------------

document.write("<h2> Pattern 04 </h2>")
for (var a = 65; a <= 69; a++) {
  if (a <= 79) {
    for (var b = 65; b <= a; b++) {
        var chrCode= String.fromCharCode(b);
      document.write(chrCode);
      document.write("&nbsp; ")
    }
  } else {
    document.write("&nbsp;&nbsp;&nbsp;");
  }
  document.write("<br>");
}

document.write("<br>");

// ----------------- TASK 05 -----------------


document.write("<h2> Pattern 05 </h2>")
document.write("<div align=center style='width: 110px'> ");
for (var a = 1; a <= 9; a+=2) {
  for (var b = 1; b <= a; b++) {
    document.write(" * ");
  }
  document.write("<br>");
}
document.write("</div>")

document.write("<br>");

// ----------------- TASK 06 -----------------

document.write("<h2> Pattern 06 </h2>")
document.write("<div align=center style='width: 110px'> ");
for (var a = 1; a <= 9; a+=2) {
  for (var b = a; b <= 9; b++) {
    document.write(" * ");
  }
  document.write("<br>");
}
document.write("</div>")

document.write("<br>");

// ----------------- TASK 07 -----------------

document.write("<h2> Pattern 07 </h2>")
document.write("<div align=center style='width: 110px'> ");

document.write("<center>");
for(var i=1; i<=5; i++){
    
    for(var j=1; j<=i; j++){
        document.write(j);
        document.write("&nbsp;");
    }
    for(var k=i-1; k>=1; k--){
        document.write(k);
        document.write("&nbsp;")
    }
    
    document.write("<br>")
}
document.write("</center>");

document.write("</div>");

document.write("<br>");

// ----------------- TASK 08 -----------------

document.write("<h2> Pattern 08 </h2>")
document.write("<div align=center style='width: 110px'> ");
for (var a = 70; a >= 65; a--) {
    for (var b = 65; b <= a; b++) {
        var chrCode= String.fromCharCode(b);
      document.write(chrCode);
      document.write("&nbsp; ")
    }
  document.write("<br>");
}
document.write("</div>")

document.write("<br>");

// ----------------- TASK 09 -----------------

document.write("<h2> Pattern 09 </h2>")
for(var a=1; a<=5; a+=2){
  for(var b=1; b<=a; b++){
      document.write(b);
      document.write("&nbsp;");
  }
  document.write("<br>")
}
for(var a=5; a>=1; a-=2){
  for(var b=1; b<=a-2; b++){
      document.write(b);
      document.write("&nbsp;");
  }
  document.write("<br>")
}

// ----------------- TASK 10 -----------------

document.write("<h2> Pattern 10 </h2>");

// for(var i=1; i<=4; i++){
//   if(i==1){
//     for(var j=i; j<=7; j++){
//       document.write(" * ");
//       // document.write("&nbsp;");
//     }
//   }

//   else{
//     for(var k=1; k<=7; k++){
//       if(k!==i+2){
//         document.write(" * ");
//       }
//       else{
//         document.write("&nbsp;");
//       }
//     }
//   }
//   document.write("<br>")
// }

document.write("<div style='width:500px; display:flex;'>");
document.write("<div id=a>");
for(var i=1; i<=4; i++){
  for(var j=i; j<=4; j++){
    document.write(" * ");
  }
  document.write("<br>")
}
document.write("</div>");

document.write("<div id=b align=right>")
for(var a=1; a<=4; a++){
  for(var b=a; b<=4; b++){
    document.write(" * ");
  }
  document.write("<br>")
}
document.write("</div>")
document.write("</div>");

document.write("<br>")

// ----------------- TASK 11 -----------------

document.write("<h2> Pattern 11 </h2>");
for(var a=1; a<=10; a++){
  if(a==1 || a==10){
      for(var b=1; b<=7; b++){
          document.write(" * ");
          // document.write("&nbsp;")
      }
  }
  else{
      for(var c=10; c>=1; c--){
          if(c==a){
              document.write("*")
              //document.write("&nbsp;")
          }
          else{	
              document.write("&nbsp;&nbsp;");
          }
      }
      //document.write("&nbsp;");
  }
  document.write("<br>");
}

document.write("<br>");



// ----------------- TASK 12 -----------------

document.write("<h2> Pattern 12 </h2>")
for (var i = 1; i <= 5; i++) {
    if (i == 1 || i == 5) {
      for (var j = 1; j <= 5; j++) {
        document.write("*");
        document.write("&nbsp;");
      }
    } else {
      for (var k = 1; k <= 5; k++) {
        if (k == 1 ||  k == 5) {
          document.writeln("*");
        } else {
          document.write("&nbsp;&nbsp;&nbsp;");
        }
      }
    }
    document.write("<br>");
  }

document.write("<br>");



// ----------------- ADDITIONAL WORK -----------------

document.write("<h2> ADDITIONAL PATTERNS </h2>")
for (var i = 1; i <= 10; i++) {
  if (i == 1 || i == 10) {
    for (var j = 1; j <= 20; j++) {
      document.write("*");
      document.write("&nbsp;");
    }
  } else {
    for (var k = 1; k <= 20; k++) {
      if (k == 1 || k == 6 || k == 20) {
        document.writeln("*");
      } else {
        document.write("&nbsp;&nbsp;&nbsp;");
      }
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");

for (var i = 1; i <= 11; i++) {
  if (i == 4 || i == 8) {
    for (var k = 1; k <= 17; k++) {
      document.write("*");
      // document.write(i);
      document.write("&nbsp;");
    }
  } else {
    for (var j = 1; j <= 11; j++) {
      if (j == 4 || j == 8) {
        document.write("*");
      } else {
        document.write("&nbsp; &nbsp; &nbsp;");
      }
    }
  }
  document.write("<br>");
}

document.write("<br>");
document.write("<br>");



var num=11;
for(var i=1; i<=10; i++){
  for(var j=1; j<=10; j++){
    if(j==i || j==num-1){
      document.write("*");
      document.write("&nbsp;")
    }
    else{
      document.write("&nbsp;");
    }
  }
  num--;
  // document.write("&nbsp;");
  document.write("<br>")
}

document.write("<br>")

for(var i=1; i<=9; i++){
  if(i==1 || i==5 || i==9){
    for(var j=1; j<=10; j++){
      document.write(" * ");
    }
  }
  else{
    for(k=1; k<=10; k++){
      if(k==1 && (i==2 || i==3 || i==4) || k==10 && (i==6 || i==7 || i==8)){
        document.write("*");
      }
      else{
        document.write("&nbsp;&nbsp;&nbsp;")
      }
    }
    document.write("&nbsp;")
  }
  document.write("<br>")
}