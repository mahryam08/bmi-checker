
//  document.getElementById()


  function checkBmi(num1,num2){ 
    let heightinCm= num2
    let heightinm= num2/100
    let weightinKg= num1
    let bmi= weightinKg/((heightinm)*(heightinm))
    console.log(bmi)
    return(bmi)
  }

  
  function dropInput(){
     num1 = document.getElementById("takein1").value

    num2 = document.getElementById("takein2").value
    
  box2 = checkBmi(num1,num2) 

    document.getElementById("show").innerHTML = box2
  }
 