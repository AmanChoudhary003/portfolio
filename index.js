let welcomeTab= document.querySelector(".welcomeTab");
let portfolio= document.querySelector(".main");
let moreContent= document.querySelector(".main2");
let welcomeMessage = document.querySelector(".welcomeMessage");
welcomeTab.classList.add("welcomeAnimation")
portfolio.style.display="none"
moreContent.classList.add("showDiv")
welcomeMessage.style.display="block"


// setTimeout(()=>{
//     welcomeMessage.style.display="block"
// }, 100)
setTimeout(()=>{
    portfolio.style.display="block"
    moreContent.classList.remove("showDiv");
}, 500)

setTimeout(()=>{
    welcomeMessage.style.display="none"
}, 1500)

setTimeout(()=>{
    welcomeTab.style.display="none";
    welcomeTab.classList.remove("welcomeAnimation")
    
}, 2000)

