let animal = prompt ("What animal is the superhero most similar to?");
let re = /^[a-z]{1,20}$/i;
if(re.test(animal)){
    let male = prompt ("Is the superhero male or female? Leave blank if unknown or other.");
    if(male == "male" || male == "female" || male ==""){
        let age = prompt ("How old is the superhero?");
        if ( male == "male" && age<18){
            alert(`The superhero name is: ${"\n"} ${animal} -boy`);
       }else if ((animal.length <= 20 ) && male == "male" && age>=18){
           alert(`The superhero name is: ${"\n"} ${animal} -man`);  
       }else if ((animal.length <= 20 ) && male == "female" && age<18){
           alert(`The superhero name is: ${"\n"} ${animal} -girl`);  
       }else if((animal.length <= 20 ) && male == "female" && age>=18){
           alert(`The superhero name is: ${"\n"} ${animal} -woman`);  
       }else if ((animal.length <= 20 ) && male == "" && age<18){
           alert(`The superhero name is: ${"\n"} ${animal} -kid`);   
       }else if ((animal.length <= 20 ) && male == "" && age>=18){
           alert(`The superhero name is: ${"\n"} ${animal} -hero`);
       }else{
           alert ("Error");
       }   
        
    } else {
        alert("Error");    
    } 
}else{
    alert("Error");
}
