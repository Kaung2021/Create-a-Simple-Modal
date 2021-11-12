//first,create the variable
 var button = document.getElementById('btn');
 var modal = document.querySelector(".modal");
 var closeButton = document.querySelector(".closeBtn");
  //function works when we click the button
   button.onclick = function(){
        modal.style.display = "block"
   };
   //Content disapear when we click the close button
    closeButton.onclick = function (){
         modal.style.display = "none"
    };
    window.onclick = function(element){
         if(element.target == modal){
              modal.style.display = "none"
         }
    }