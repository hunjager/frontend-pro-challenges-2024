const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email =  document.getElementById("email");
const general  =  document.getElementById("general-enquiry")
const support  = document.getElementById("support-request")
const query1 = document.querySelector('.query1');
const query2 = document.querySelector('.query2');
const message= document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit")
const successMsg = document.querySelector(".success-message")
const main= document.querySelector(".main")

//errors
const firstNameError = document.getElementById("first-name-error");
const lastNameError =  document.getElementById("last-name-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("text-error");
const queryError = document.getElementById("query-error");
const checkboxError = document.getElementById("checkbox-error");

let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const  emailValidator = () =>{
    
    if ((regEx.test(email.value)))
        {
          emailError.classList.add("hidden")
          email.style.outline = "1px solid grey"
          return true
        }
            emailError.classList.remove("hidden")
            email.style.outline = "1px solid hsl(0, 66%, 56%)"
            return false

}
const nameValidator = () => {
    if(firstName.value!=="" && lastName.value!==""){
        firstNameError.classList.add("hidden");
        firstName.style.outline = "1px solid grey"
        lastNameError.classList.add("hidden");
        lastName.style.outline = "1px solid grey"
        return true
    }
        firstNameError.classList.remove("hidden");
        firstName.style.outline = "1px solid hsl(0, 66%, 56%)" 
        lastNameError.classList.remove("hidden");
        lastName.style.outline = "1px solid hsl(0, 66%, 56%)" 
        return false
}
general.addEventListener("click",()=>{
    query1.style.backgroundColor = "hsl(148, 38%, 91%)";
    query2.style.backgroundColor = "white"
    query1.style.outline = "1px solid hsl(169, 82%, 27%)"
    query2.style.outline = "1px solid grey"
    query2.style.border = "none"
})
support.addEventListener("click",()=>{
    query2.style.backgroundColor = "hsl(148, 38%, 91%)";
    query1.style.backgroundColor = "white"
    query2.style.outline = "1px solid hsl(169, 82%, 27%)"
    query1.style.outline = "1px solid grey"
    query1.style.border = "none"

})

const radioValidator = () =>{
  if(!general.checked && !support.checked){
    queryError.classList.remove("hidden")
    return false
  }
  queryError.classList.add("hidden")
  return true
}

const messageValidator = () =>{
    if(message.value!=""){
        messageError.classList.add("hidden");
        message.style.outline = "1px solid grey"
        return true
    }

        messageError.classList.remove("hidden");
        message.style.outline = "1px solid hsl(0, 66%, 56%)" 
        return false

}

const checkboxValidator=()=>{
    if (!checkbox.checked){
        checkboxError.classList.remove("hidden")
        return false
    }
    checkboxError.classList.add("hidden")
    return true
}

const validate = ()=>{
    checkboxValidator();
    nameValidator();
    radioValidator();
    messageValidator();
    emailValidator();
}

submit.addEventListener("click",()=>{
    if((general.checked || support.checked) && (firstName.value!=="" && lastName.value!=="")&& (message.value !="") && (checkbox.checked) && (regEx.test(email.value))){
        successMsg.classList.remove("hide");
        main.classList.add("hide");
    }
    else{
        validate()
        successMsg.classList.add("hide");
        main.classList.remove("hide");
    }


})