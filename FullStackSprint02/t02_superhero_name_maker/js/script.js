let animal = prompt ("What animal is the superhero most similar to?");
let reg = /^[a-z]{1,20}$/i;

if(reg.test(animal)){
    let sex = prompt ("Is the superhero male or female? Leave blank if unknown or other.");
    if(sex == "male" || sex == "female" || sex ==""){
        let age = prompt ("How old is the superhero?");
        if ( sex == "male" && age < 18){
            alert(`The superhero name is: ${"\n"} ${animal} -boy`);
       }else if ((animal.length <= 20 ) && sex == "male" && age >= 18){
           alert(`The superhero name is: ${animal}-man`);  
       }else if ((animal.length <= 20 ) && sex == "female" && age < 18){
           alert(`The superhero name is: ${animal}-girl`);  
       }else if((animal.length <= 20 ) && sex == "female" && age >= 18){
           alert(`The superhero name is: ${animal}-woman`);  
       }else if ((animal.length <= 20 ) && sex == "" && age < 18){
           alert(`The superhero name is: ${animal}-kid`);   
       }else if ((animal.length <= 20 ) && sex == "" && age >= 18){
           alert(`The superhero name is: ${animal}-hero`);
       }else{
           alert ("Error");
       }   
        
    } else {
        alert("Error");    
    } 
}else{
    alert("Error");
}
