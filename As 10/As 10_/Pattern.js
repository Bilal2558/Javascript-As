document.write("<h1>...........", "As Pattern </h1>");
// 1

document.write("<br><h3> Pattern 01 </h3>");
for (var a = 0; a <= 5; a++)
// document.write(a) ;
{
  for (var b = a; b <= 5; b++) {
    document.write(" * ");
  }
  document.write("<br>");
}

document.write("<br><h3> Pattern 02 </h3>");
for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write( a +"&nbsp;&nbsp;");
  }
  document.write("<br>");
}


