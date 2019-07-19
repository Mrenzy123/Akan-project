function get(){
   var dd = parseFloat(document.getElementById('findday').value);
   var mm = parseFloat(document.getElementById('findmonth').value);
   var yy = parseFloat(document.getElementById('year').value);
   var cc = (yy-1) / 100 + 1;
   var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
   var femaleNames = ['Akosua', 'Adwoa', 'Abena', 'Akua', 'Yaa', 'Afua', 'Ama'];
   var dayOfWeek = Math.round( ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7);
   var checkedValue = document.getElementById('find').value;
   if (checkedValue === "male"){
      console.log(dayOfWeek);
      if (dayOfWeek === 7){
         document.getElementById('chckmale').innerHTML= maleNames[0];
         console.log(maleNames);
      }
   } else {
      console.log(Math.round(dayOfWeek));
      document.getElementById('chckmale').innerHTML= femaleNames[dayOfWeek];
      if (dayOfWeek === 7){
         document.getElementById('chckmale').innerHTML= femaleNames[0];
         console.log(femaleNames);
      }
   }
}