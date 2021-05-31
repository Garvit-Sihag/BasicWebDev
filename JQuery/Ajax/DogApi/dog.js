

function fetchRandomImage(){

    //  // method-1

    // let xhrReq=new XMLHttpRequest();

    // xhrReq.onload=()=>{
    //     let res=JSON.parse(xhrReq.response);

    //     let imgUrl=res.message;

    //     console.log(imgUrl);
    //     $('#dog-img').attr('src',imgUrl);
    // }

    // xhrReq.open('get','https://dog.ceo/api/breeds/image/random',true);
    // xhrReq.send();



    // // method2

    // $.ajax({

    //     url:'https://dog.ceo/api/breeds/image/random',
    //     method:'GET',

    //     success: function(data){

    //         let imgUrl=data.message;

    //     $('#dog-img').attr('src',imgUrl);

    //     }

    // });


    // method 3

    $.get('https://dog.ceo/api/breeds/image/random',function(data){

        let imgUrl=data.message;

    $('#dog-img').attr('src',imgUrl);

});




}



$('#fetch-dog-img').click(fetchRandomImage);