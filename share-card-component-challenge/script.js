
let text = document.getElementById('link').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Content copied to clipboard');
    } catch (err) {
      alert.error('Failed to copy: ', err);
    }
}
const socials  = document.querySelectorAll(".socials svg");
socials.forEach((social)=>{
    social.addEventListener("click",()=>{
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked");
        }
       social.classList.add("checked");

    })
})