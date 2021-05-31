{
flag =true;

$('#container').on('click',function(){


   let ele=$('#toggle-btn')
   
    
  if(flag){
   ele.css('left','60px')

      $('body').css({
          'background-color':'black',
              'color':'white'
    })
      
    $('#container').css({

        'background-color':'white',

    })

    $('h1').css({
        'color':'white'
    })
    flag=false;
}

else{

    ele.css('left','5px')

    $('body').css({
        'background-color':'white',
            'color':'black'
  })
    
  $('#container').css({

      'background-color':'white',

  })

  $('h1').css({
      'color':'black'
  })
  flag=true;



}

});

}