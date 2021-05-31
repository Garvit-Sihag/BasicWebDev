var ac=document.getElementById('ac');
var display=document.getElementById('cal-display');

var num1=null;
var num2=null;
var operator=null;
ac.addEventListener('click',function(){
    num1=num2=null;
   display.innerText="";

});



var btn=document.getElementsByClassName('btn');

for(var i=0;i<btn.length;i++){
   btn[i].addEventListener('click',function(event){
        
    var val=this.getAttribute('data-value');

      if(val == '+'){

       
            num1=parseFloat(display.textContent);
            operator='+'
            display.innerText="";

      }else if(val == '-'){

        
            num1=parseFloat(display.textContent);
            operator='-'
            display.innerText="";

      }else if(val == '*'){

        
            num1=parseFloat(display.textContent);
            operator='*'
            display.innerText="";
          
      }else if(val == '/'){

       
            num1=parseFloat(display.textContent);
            operator='/'
            display.innerText="";
    }else if(val == '%'){

        
            num1=parseFloat(display.textContent);
            operator='%'
            display.innerText="";
          
    }else if(val == '+/-'){

      
            num1=parseFloat(display.textContent);
            num1=-1*num1;
            display.innerText=num1;
          
    }else if(val == '='){

        num2=parseFloat(display.textContent);

        if(operator=='+'){ 
            display.innerText=num1+num2;
        }else if(operator=='-'){
            display.innerText=num1-num2;
        }else if(operator=='*'){
            display.innerText=num1*num2;
        }else if(operator=='/'){
            display.innerText=num1/num2;
        }else{

        }

          
    }else{
        display.innerText+=val;
    }
               


   });
}