// write your JavaScript here
const ratings  = document.querySelectorAll(".numbers div")
const submit = document.getElementById('submit');
const ratePoint = document.getElementById("rate");
const first = document.querySelector(".one");
const second = document.querySelector(".two");

let rate = null;
ratings.forEach((rating)=>{
    rating.addEventListener("click",()=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked")
        }
       rating.classList.add("checked");
       rate = rating.innerText;

    })
})
submit.addEventListener("click",()=>{
    if(rate){
        ratePoint.innerText = rate;
        second.classList.remove("hidden");
        first.classList.add("hidden");
    }
})