function shoutOut (){
    console.log("Halo Function");
  }
  // part 1
  shoutOut();


  function calculateMultiply (){
    return num1 * num2; 
   
  }
  
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian);
//part 2
  function processSentence (){
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya ' + 
      address + ', dan saya punya hobby yaitu ' + '!'  
   
  }
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence);
  //part 3