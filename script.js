// MOBILE MENU

const menuBtn = document.querySelector(".mobile-menu");
const nav = document.querySelector("nav");


menuBtn.addEventListener("click",()=>{

    if(nav.style.display === "flex"){

        nav.style.display="none";

    }
    else{

        nav.style.display="flex";
        nav.style.flexDirection="column";
        nav.style.position="absolute";
        nav.style.top="85px";
        nav.style.right="5%";
        nav.style.background="white";
        nav.style.padding="25px";
        nav.style.borderRadius="20px";
        nav.style.boxShadow="0 10px 30px #0002";

    }

});





// APPOINTMENT POPUP


function openAppointment(){

    document.getElementById("appointment").style.display="flex";

}



function closeAppointment(){

    document.getElementById("appointment").style.display="none";

}







// SEND WHATSAPP APPOINTMENT


function sendWhatsApp(){


let name=document.getElementById("name").value;

let age=document.getElementById("age").value;

let problem=document.getElementById("problem").value;



if(name==="" || age==="" || problem===""){

alert("Please fill all details");

return;

}



let message =

"Hello Sharma Women And Child Hospital,%0A%0A"+

"I want to book an appointment.%0A%0A"+

"Name: "+name+"%0A"+

"Age: "+age+"%0A"+

"Problem: "+problem;



window.open(

"https://wa.me/919828023415?text="+message,

"_blank"

);



}







// CLOSE POPUP WHEN CLICK OUTSIDE


window.addEventListener("click",(e)=>{


let popup=document.getElementById("appointment");


if(e.target===popup){

popup.style.display="none";

}


});








// SCROLL REVEAL ANIMATION


const revealElements=document.querySelectorAll(
".section,.card,.doctor-box,.highlights div,.gallery img,.reviews div"
);



const observer=new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}


});


},{
threshold:.15

});





revealElements.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .7s ease";


observer.observe(el);


});








// COUNTER ANIMATION


const counters=document.querySelectorAll(".highlights h2");


counters.forEach(counter=>{


let target=counter.innerText;


if(target.includes("+")){


let number=parseInt(target);


let count=0;


let interval=setInterval(()=>{


count+=Math.ceil(number/80);


if(count>=number){

counter.innerText=target;

clearInterval(interval);

}

else{

counter.innerText=count+"+";

}


},30);


}


});







// NAVBAR SHADOW ON SCROLL


window.addEventListener("scroll",()=>{


let header=document.querySelector(".navbar");


if(window.scrollY>50){

header.style.boxShadow="0 8px 30px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow="0 5px 25px rgba(0,0,0,.08)";

}


});