const stars = document.querySelectorAll(".stars i");
const texts = ["We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.","We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.","Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.","Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.","Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform"];
const message = document.getElementById("text")
stars.forEach((star,i)=>{
    for(let i=0; i < texts.length;i++){
    }
    star.onclick = function(){
        let current_star_level = i+1;
        stars.forEach((star,j)=>{
            if(current_star_level >= j+1){
                star.style.color = "#FACC15"
                message.textContent = texts[i];
            }
            else{
                star.style.color = "#E2E8F0";
            }
        })
        
    }
})
