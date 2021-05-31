

let btn=document.getElementsByClassName('btn')[0];

btn.addEventListener('click',startCounter);


function startCounter(){

    let prev=document.getElementsByClassName('prev')[0];
    let next=document.getElementsByClassName('next')[0];

    let num=10;
    let count=1;
   let counter=setInterval(() => {
    
    if(count==num){
        clearInterval(counter);
        return;
    }
    
    animate(prev,next);
    count++;
   }, 1000);
}


function animate(prev,next){
    next.classList.add('animate');

    setTimeout(function(){
      prev.innerText=parseInt(next.innerText);
      next.classList.remove('animate');
      next.innerText=parseInt(next.innerText)+1;

    },500);
    
}