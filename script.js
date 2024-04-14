const email  = document.getElementById('email');
const submit  = document.getElementById('submit');
submit.addEventListener("click",()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        alert("Thank you for subscribing!")
      return (true)
    }
      alert("You have entered an invalid email address!")
      return (false)
})