let popbutton = document.querySelector("#popbutton")
let bigbutton = document.querySelector("#bigbutton")
let fancybutton = document.querySelector("#fancybutton")
let negativebutton = document.querySelector("#negativebutton")
let button = document.querySelector("#makeown")
let targetbutton = document.querySelector("#target")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
    if(targetbutton.classList.contains("pop")){
    targetbutton.classList.remove("pop")
  }else{
    targetbutton.classList.add("pop")
  }
})
bigbutton.addEventListener("click", e => {
    console.log("big button clicked!")
    if(targetbutton.classList.contains("big")){
    targetbutton.classList.remove("big")
  }else{
    targetbutton.classList.add("big")
  }
})
fancybutton.addEventListener("click", e => {
    console.log("fancy button clicked!")
    if(targetbutton.classList.contains("fancy")){
    targetbutton.classList.remove("fancy")
  }else{
    targetbutton.classList.add("fancy")
  }
})
negativebutton.addEventListener("click", e => {
    console.log("negative button clicked!")
    if(targetbutton.classList.contains("negative")){
    targetbutton.classList.remove("negative")
  }else{
    targetbutton.classList.add("negative")
  }
})
button.addEventListener("click", e => {
    console.log("button clicked!")
    if(targetbutton.classList.contains("makeityourown")){
    targetbutton.classList.remove("makeityourown")
  }else{
    targetbutton.classList.add("makeityourown")
  }
})