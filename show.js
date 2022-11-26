let form = document.getElementById('form');
let btn = document.getElementById("btn");
let msgg = document.getElementById("msgg");

document.getElementById('click').addEventListener('click',function(){

      if(form.style.opacity == "0"){
          form.style.opacity="1";
          btn.innerHTML="x";
      }
      else{
          form.style.opacity="0";
          btn.innerHTML="+";
      }
      
    

});

document.getElementById('sugg').addEventListener('click',function(){

    if(msgg.style.opacity == "0"){
        msgg.style.opacity="1";
       
    }
    else{
        msgg.style.opacity="0";
        
    }
  

});

