const text=document.querySelector(".sec-text");

const textLoad=()=>{
    setTimeout(() => {
        text.textContent="Front End Developer";
    }, 0);
    setTimeout(() => {
        text.textContent="UI Developer";
    }, 5000);
    setTimeout(() => {
        text.textContent="Full Stack Developer";
    }, 10000);
}
textLoad();
setInterval(textLoad,15000);
