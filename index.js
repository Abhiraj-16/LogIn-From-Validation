function seterror(id, error){
    //inside tag of id
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function  validateForm(){
    var returnval = true;
    var name = document.forms['myForm']["fname"].value;
        if (name.length < 5){
            seterror("name", "*length is too short")
            returnval= false;
        }
       if(name.length==0){
        seterror("name","*Length cannot be zero") 
        returnval = false;    
     }

     var name = document.forms['myForm']["fname"].value;
     if (name.length < 5){
         seterror("name", "*length is too short")
         returnval= false;
     }
    if(name.length==0){
     seterror("name","*Length cannot be zero") 
     returnval = false;    
  }

     var email = document.forms['myForm']["femail"].value;
     if (email.length < 10){
         seterror("email", "*length is too short")
         returnval= false;
     }
    if(email.length==0){
     seterror("email","*Length cannot be zero") 
     returnval = false;    
  }



    return returnval;
}
