function get(){
   var dd = parseFloat(document.getElementById('findday').value);
   var mm = parseFloat(document.getElementById('findmonth').value);
   var yy = parseFloat(document.getElementById('year').value);
   var cc = (yy-1) / 100 + 1;
   
}