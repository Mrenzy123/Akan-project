function get(){
   var dd = parseFloat(document.getElementById('findday').value);
   var mm = parseFloat(document.getElementById('findmonth').value);
   var yy = parseFloat(document.getElementById('year').value);
   var cc = (yy-1) / 100 + 1;
   var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
   var femalenames = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];
   var dayOfWeek = Math.round( ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
   var checkedValue = document.getElementById('find').value;
   
}