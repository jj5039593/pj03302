"use strict";

const secCon=document.querySelector('.sec-con');
const secConUl=document.querySelector('.sec-con>ul');
const secConLi=document.querySelectorAll('.sec-con>ul>li');

secConUl.addEventListener('click',(e)=>{

    const eTarget=e.target;
    const liTag=eTarget.parentElement;

    console.log(eTarget,liTag)

    secConLi.forEach((el,idx)=>{
        if(liTag===el){
            el.classList.add('on')
        }else{
            el.classList.remove('on')
        }
    })
});