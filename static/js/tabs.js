/* TAB GENERAL */

var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var content5 = document.getElementById("content5");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

function openFirst(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(100%)";
    content5.style.transform = "translateX(100%)";
    btn1.style.color ="#0F70B7";
    btn2.style.color ="rgb(131, 131, 131)";
    btn3.style.color ="rgb(131, 131, 131)";
    btn4.style.color ="rgb(131, 131, 131)";
    btn5.style.color ="rgb(131, 131, 131)";
    /*
    btn1.style.borderBottom = "4px solid #0F70B7";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";
    */
    btn1.style.backgroundColor = "white";
    btn2.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn3.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn4.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn5.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    content1.style.transitionDelay = ".3s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0s"
    content5.style.transitionDelay = "0s"
}
function openSecond(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(0)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(100%)";
    content5.style.transform = "translateX(100%)";
    btn1.style.color ="rgb(131, 131, 131)";
    btn2.style.color ="#0F70B7";
    btn3.style.color ="rgb(131, 131, 131)";
    btn4.style.color ="rgb(131, 131, 131)";
    btn5.style.color ="rgb(131, 131, 131)";
    /*
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "4px solid #0F70B7";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";
    */
    btn1.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn2.style.backgroundColor = "white";
    btn3.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn4.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn5.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = ".3s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0s"
    content5.style.transitionDelay = "0s"
}
function openThird(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(0)";
    content4.style.transform = "translateX(100%)";
    content5.style.transform = "translateX(100%)";
    btn1.style.color ="rgb(131, 131, 131)";
    btn2.style.color ="rgb(131, 131, 131)";
    btn3.style.color ="#0F70B7";
    btn4.style.color ="rgb(131, 131, 131)";
    btn5.style.color ="rgb(131, 131, 131)";
    /*
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "4px solid #0F70B7";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "none";
    */
    btn1.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn2.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn3.style.backgroundColor = "white";
    btn4.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn5.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = ".3s"
    content4.style.transitionDelay = "0s"
    content5.style.transitionDelay = "0s"
}
function openFourth(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(0)";
    content5.style.transform = "translateX(100%)";
    btn1.style.color ="rgb(131, 131, 131)";
    btn2.style.color ="rgb(131, 131, 131)";
    btn3.style.color ="rgb(131, 131, 131)";
    btn4.style.color ="#0F70B7";
    btn5.style.color ="rgb(131, 131, 131)";
    /*
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "4px solid #0F70B7";
    btn5.style.borderBottom = "none";
    */
    btn1.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn2.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn3.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn4.style.backgroundColor = "white";
    btn5.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = ".3s"
    content5.style.transitionDelay = "0s"
}
function openFifth(){
    content1.style.transform = "translateX(100%)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    content4.style.transform = "translateX(100%)";
    content5.style.transform = "translateX(0)";
    btn1.style.color ="rgb(131, 131, 131)";
    btn2.style.color ="rgb(131, 131, 131)";
    btn3.style.color ="rgb(131, 131, 131)";
    btn4.style.color ="rgb(131, 131, 131)";
    btn5.style.color ="#0F70B7";
    /*
    btn1.style.borderBottom = "none";
    btn2.style.borderBottom = "none";
    btn3.style.borderBottom = "none";
    btn4.style.borderBottom = "none";
    btn5.style.borderBottom = "4px solid #0F70B7";
    */
    btn1.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn2.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn3.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn4.style.backgroundColor = "rgba(136, 136, 136, 0.199)";
    btn5.style.backgroundColor = "white";
    content1.style.transitionDelay = "0s"
    content2.style.transitionDelay = "0s"
    content3.style.transitionDelay = "0s"
    content4.style.transitionDelay = "0s"
    content5.style.transitionDelay = ".3s"
}



/* TAB CONTENT 5 */

var content5First = document.getElementById("content5First");
var content5Second = document.getElementById("content5Second");
var content5Third = document.getElementById("content5Third");
var btn1content5 = document.getElementById("content5-btn1");
var btn2content5 = document.getElementById("content5-btn2");
var btn3content5 = document.getElementById("content5-btn3");

function openFirstContent5(){
    btn1content5.style.color ="#0F70B7";
    btn2content5.style.color ="rgb(131, 131, 131)";
    btn3content5.style.color ="rgb(131, 131, 131)";
    btn1content5.style.backgroundColor = "rgb(226, 226, 226)";
    btn2content5.style.backgroundColor = "rgb(180, 180, 180)";
    btn3content5.style.backgroundColor = "rgb(180, 180, 180)";    
    content5First.style.transform = "translateX(0)";
    content5Second.style.transform = "translateX(110%)";
    content5Third.style.transform = "translateX(110%)";
    content5First.style.transitionDelay = ".3s"
    content5Second.style.transitionDelay = "0s"
    content5Third.style.transitionDelay = "0s"
}

function openSecondContent5(){
    btn1content5.style.color ="rgb(131, 131, 131)";
    btn2content5.style.color ="#0F70B7";
    btn3content5.style.color ="rgb(131, 131, 131)";
    btn1content5.style.backgroundColor = "rgb(180, 180, 180)";
    btn2content5.style.backgroundColor = "rgb(226, 226, 226)";
    btn3content5.style.backgroundColor = "rgb(180, 180, 180)";    
    content5First.style.transform = "translateX(110%)";
    content5Second.style.transform = "translateX(0)";
    content5Third.style.transform = "translateX(110%)";
    content5First.style.transitionDelay = "0s"
    content5Second.style.transitionDelay = ".3s"
    content5Third.style.transitionDelay = "0s"
}

function openThirdContent5(){
    btn1content5.style.color ="rgb(131, 131, 131)";
    btn2content5.style.color ="rgb(131, 131, 131)";
    btn3content5.style.color ="#0F70B7";
    btn1content5.style.backgroundColor = "rgb(180, 180, 180)";
    btn2content5.style.backgroundColor = "rgb(180, 180, 180)";
    btn3content5.style.backgroundColor = "rgb(226, 226, 226)";    
    content5First.style.transform = "translateX(110%)";
    content5Second.style.transform = "translateX(110%)";
    content5Third.style.transform = "translateX(0)";
    content5First.style.transitionDelay = "0s"
    content5Second.style.transitionDelay = "0s"
    content5Third.style.transitionDelay = ".3s"
}