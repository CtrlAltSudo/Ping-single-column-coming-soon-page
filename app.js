const input = document.querySelector("input");

input.addEventListener("input", (event) => {
    event.preventDefault()
    if( input.value.includes("@") && !input.value.includes(" ")){
        console.log("it's valid")
    } else {
        console.log("it's not valid")
    }
});