var count=1;
var box_div=document.getElementById('box');

box_div.addEventListener('click',function(){
    
    var num=document.getElementById('num');
      
    num.innerText=count;
    count+=1;
       

})

var reset=document.getElementById('reset');

reset.addEventListener('click',function(){
   
    count=0;
    num.innerText=count;

});

var toggle_switch=document.getElementsByClassName('toggle-switch')[0];

var flag=false;

var toggle=document.getElementById('toggle');
toggle.addEventListener('click',function(){
   
    
    var parah=document.getElementsByTagName('p')[0];
    var body=document.getElementsByTagName('body')[0];
    if(flag){
        toggle.style.backgroundColor="white";
        toggle.style.borderColor = "black"
        toggle_switch.style.marginLeft ="10px";
        parah.style.color="black";
        body.style.backgroundColor="white";
       flag=false;
    
    }else{
        toggle.style.backgroundColor="white";
        toggle.style.borderColor = "white"
        toggle_switch.style.marginLeft ="60px";


        body.style.backgroundColor="black";

        parah.style.color="white";

        flag=true;
    }
    


});