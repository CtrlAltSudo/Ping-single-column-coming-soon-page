const input = document.querySelector("input");
const errMsg = document.querySelector(".emailErrMsg")

input.addEventListener("input", (event) => {
    event.preventDefault()
    if( input.value.includes("@") && !input.value.includes(" ")){
        console.log("it's valid")
        input.style.border = "2px solid hsl(223, 100%, 88%)";
        errMsg.style.visibility = "hidden";
    } else {
        console.log("it's not valid")
        input.style.border = "2px solid red";
        errMsg.style.visibility = "visible";
    }
});