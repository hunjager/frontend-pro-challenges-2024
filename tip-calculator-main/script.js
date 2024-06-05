const bill = document.getElementById("bill");
const people = document.getElementById("people");
const total = document.querySelector(".total");
const reset = document.getElementById("reset");
const fivePercent  = document.getElementById("five-percent");
const tenPercent  = document.getElementById("ten-percent");
const fifteenPercent  = document.getElementById("fifteen-percent");
const twentyFivePercent  = document.getElementById("twentyFive-percent");
const fiftyPercent  = document.getElementById("fifty-percent");
const tip =  document.querySelector(".tip-value");
const custom = document.getElementById("custom");
const error = document.getElementById("error")
reset.addEventListener("click",()=>{
    tip.textContent = `$0.00`
    total.textContent = `$0.00`
    fivePercent.classList.remove("click")
    tenPercent.classList.remove("click")
    fifteenPercent.classList.remove("click")
    twentyFivePercent.classList.remove("click")
    fiftyPercent.classList.remove("click")
    custom.value =""
    bill.value= null
    people.value=null
});
people.addEventListener("input",()=>{
    if(people.value==0){
        error.style.display= "block";
        people.classList.add("error")
    }
    else{
        error.style.display= "none";
        people.classList.remove("error")


        fivePercent.addEventListener("click",()=>{
            let tipAmount = ((5 * Number(bill.value))/100).toFixed(2);
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
            fivePercent.classList.add("click")
            tenPercent.classList.remove("click")
            fifteenPercent.classList.remove("click")
            twentyFivePercent.classList.remove("click")
            fiftyPercent.classList.remove("click")
        })


        tenPercent.addEventListener("click",()=>{
            let tipAmount = ((10 * Number(bill.value))/100).toFixed(2);
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
            tenPercent.classList.add("click");
            fivePercent.classList.remove("click")
            fifteenPercent.classList.remove("click")
            twentyFivePercent.classList.remove("click")
            fiftyPercent.classList.remove("click")
        })


        fifteenPercent.addEventListener("click",()=>{
            let tipAmount = (15 * Number(bill.value))/100;
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
            fivePercent.classList.remove("click")
            tenPercent.classList.remove("click")
            fifteenPercent.classList.add("click")
            twentyFivePercent.classList.remove("click")
            fiftyPercent.classList.remove("click")

        })



        twentyFivePercent.addEventListener("click",()=>{
            let tipAmount = ((25 * Number(bill.value))/100).toFixed(2)
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
            fivePercent.classList.remove("click")
            tenPercent.classList.remove("click")
            fifteenPercent.classList.remove("click")
            twentyFivePercent.classList.add("click")
            fiftyPercent.classList.remove("click")
    
        })


        fiftyPercent.addEventListener("click",()=>{
            let tipAmount = ((50 * Number(bill.value))/100).toFixed(2)
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
            fivePercent.classList.remove("click")
            tenPercent.classList.remove("click")
            fifteenPercent.classList.remove("click")
            twentyFivePercent.classList.remove("click")
            fiftyPercent.classList.add("click")
    
        })

        custom.addEventListener("click",()=>{
            fivePercent.classList.remove("click")
            tenPercent.classList.remove("click")
            fifteenPercent.classList.remove("click")
            twentyFivePercent.classList.remove("click")
            fiftyPercent.classList.remove("click")
        })

        custom.addEventListener("input",()=>{
        
            let tipAmount = ((Number(custom.value) * Number(bill.value))/100).toFixed(2);
            let totalAmount = ((Number(bill.value) + Number(tipAmount))/ Number(people.value)).toFixed(2)
            tip.textContent  = `$${tipAmount}`
            total.textContent = `$${totalAmount}`
           
        })
    }
})

