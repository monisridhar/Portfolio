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


let loadMoreBtn=document.querySelector('.load-more');
let currentItems=3;

loadMoreBtn.addEventListener('click',function(){
    let cards=[...document.querySelectorAll('.project .project-cards .project-card')];
    for(var i=currentItems; i<currentItems+3;i++){
        if(cards[i]){
            cards[i].style.display='inline-block';
        }
    }
    currentItems+=3;
    if(currentItems>=cards.length){
        loadMoreBtn.style.display='none';
    }
})
