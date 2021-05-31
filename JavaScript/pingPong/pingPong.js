// initial positions 

let player1=document.getElementById('player1');
let player2=document.getElementById('player2');
let ball=document.getElementById('ball');

let ball_left=window.getComputedStyle(ball).getPropertyValue('left');
let ball_top=window.getComputedStyle(ball).getPropertyValue('top');

ball_left=parseFloat(ball_left);
ball_top=parseFloat(ball_top);

let ball_radius=parseFloat(window.innerHeight)-(parseFloat(window.getComputedStyle(ball).getPropertyValue('top')) + parseFloat(window.getComputedStyle(ball).getPropertyValue('bottom')));



let p1_top=window.getComputedStyle(player1).getPropertyValue('top');
let p2_top=window.getComputedStyle(player2).getPropertyValue('top');

let p1_width=28;
let p2_width=28;

let p1_len=parseFloat(window.innerHeight)-(parseFloat(window.getComputedStyle(player1).getPropertyValue('top')) + parseFloat(window.getComputedStyle(player1).getPropertyValue('bottom')));
let p2_len=p1_len;

p1_top=parseFloat(p1_top);
p2_top=parseFloat(p2_top);


let left_speed=0;
let top_speed=0;
let directiony=1;
let directionx=1;

let speed=0;

//

// reset_ball();


let val=confirm("Start game");

if(val){
   setBall();
}



function reset_ball(){
    ball.style.top="50%";
    ball.style.left="50%";

    if(top_speed!=0 && left_speed!=0){
     ball_left=parseFloat(window.getComputedStyle(ball).getPropertyValue('left'));
     ball_top=parseFloat(window.getComputedStyle(ball).getPropertyValue('top'));
     top_speed=0;
     left_speed=0;
    }

    setBall();
}



function setBall(){
    
   

    if(Math.random()<0.5){
        directiony=-1;
    }else{
         directiony=1;
        }

        
    if(Math.random()<0.5){
        directionx=-1;
    }else{
         directionx=1;
    }


    top_speed=directiony*(Math.random()*10+2);
    left_speed=directionx*(Math.random()*10+2);
//    console.log(top_speed);
 
};



window.addEventListener('keydown',(e)=>{


    let k=e.keyCode;

   if(k == 38){
       
        speed=-10;
        console.log(speed);
   }

   if(k == 40){
       speed=10;
   }



});




window.addEventListener('keyup',(e)=>{


    let k=e.keyCode;

   if(k == 38){
       
        speed=0;
        
   }

   if(k == 40){
       speed=0;
   }

   if(k==87){
       let temp=parseFloat(window.innerHeight)-p1_len;
    p1_top=p2_top=temp;
    console.log("done");
   }

   if(k==27){
       alert("Game pause");
       console.log("esc");
   }

});




let update=setInterval(()=>{

    p1_top+=speed;
    p2_top+=speed;
    
    ball_top+=top_speed;
    ball_left+=left_speed;
   
    if(p1_top <= 5.2){
        p1_top=5.2;
    }


    
    if(p2_top <= 5.2){
        p2_top=5.2;
    }



    if(ball_left <=0  ||  ball_left+38 >= window.innerWidth){
    
        // left_speed=-1*left_speed;
          
        reset_ball();

    }
// console.log(ball_top);


    if(ball_top <= 0 || ball_top+39 >= window.innerHeight){
        top_speed=-1*top_speed;
        directiony=-1*directiony;

        
    }

    if(ball_top >= p1_top && ball_top <= p1_top+p1_len  && ball_left <= p1_width){
        left_speed=-1*left_speed;
    }


    if(ball_top >= p2_top && ball_top <= p2_top+p2_len  && ball_left+ball_radius+p2_width >= window.innerWidth){
        left_speed=-1*left_speed;
    }


    if(p2_top>= parseFloat(window.innerHeight)-p2_len){
        p2_top=parseFloat(window.innerHeight)-p2_len;
    }

    if(p1_top >= parseFloat(window.innerHeight)-p1_len){
        p1_top=parseFloat(window.innerHeight)-p1_len;
    }

   player1.style.top=p1_top+"px";
   player2.style.top=p2_top+"px";
   
 if(top_speed!=0 && left_speed!=0) { ball.style.top=ball_top+"px";
   ball.style.left=ball_left+"px";}
   

},1000/60);