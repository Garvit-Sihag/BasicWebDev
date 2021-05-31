
let height =$(document).height();

// 0 -- height;


generator = ()=>{

    let freq=parseInt(Math.random()*7-3);
    
    
    for(let i=1;i<freq;i++){

        let pos=(Math.random()*height)-$(monster).innerHeight();
        
        // fas fa-pastafarianism monster

        let ele=document.createElement('i');

         

         $('container').add(ele);

    }

}





$(window).on("keydown",(event)=>{

})