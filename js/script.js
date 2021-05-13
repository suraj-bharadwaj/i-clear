function show(){

    

let box = document.getElementById('socail-icon');

let arrow = document.querySelector('.fa-long-arrow-alt-left');


   if(box.style.transform=="translateX(151px)"){
    box.style.transform = "translateX(0)";
    arrow.style.transform = "rotateY(180deg)";

    }
    else{
         box.style.transform = "translateX(151px)";
    arrow.style.transform = "rotateY(0deg)";

    }

}

function respo(){
     document.getElementById('nav-menu').style.display = "block";
     document.getElementById('rotate-one').style.transform = "rotate(-45deg) translate(0px, 4px)";
     document.getElementById('rotate-two').style.transform = "rotate(45deg) translate(-2px, -8px)";

}