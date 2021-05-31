
let url="";

$.get('https://dog.ceo/api/breeds/list/all',(data)=>{
  
    // $("#dog-list")

let ele=document.getElementById('dog-list');
let arr=Object.keys(data.message)
 
for (i in arr){

    let val=arr[i];

   let temp=data.message[val];

   if(temp.length === 0){

    let opt=document.createElement('option');

    opt.text=val;
   opt.value=val;



    ele.appendChild(opt);
   }else{


    for (j in temp){
       
        let opt=document.createElement('option');

        opt.text=val+" "+temp[j];
       opt.value=val+'/'+temp[j];
       ele.appendChild(opt);
    }


   }



}


    
  });



function fetchNextImg(){

    if(url != ""){
        $.get(url,(data)=>{
            console.log(data.message);
            $("#dog-img").attr('src',data.message);
        });
    }

}


function fetchUrl(){
     let dogName=$("#dog-list :selected").val();

     url = "https://dog.ceo/api/breed/"+dogName+"/images/random";

     $.get(url,(data)=>{
         console.log(data.message);
         $("#dog-img").attr('src',data.message);
     });

}

  
  $('#get-img').click(fetchUrl)

  $('#next').click(fetchNextImg)
