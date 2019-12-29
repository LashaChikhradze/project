$(document).ready(function(){
    new WOW().init();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout:3000,
        autoplaySpeed: 700,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            },
            1400:{
                items:3
            }
        }
    })
})
let req1 = document.querySelector('#firstinput')
let req2 = document.querySelector('#secondinput')
let req3 = document.querySelector('.contact form textarea')
console.log(req1)
console.log(req2)
console.log(req3.value.length)
function required(){
    for(let i = 0; i < req1.length; i++){
        if (req1[i].value.length == 0){
            req1[i].style.borderColor = "#f5543f";
        } else{
            req1[i].style.borderColor = "rgba(0, 0, 0, 0.06)";
        }
    }
    for(let i = 0; i < req2.length; i++){
        if (req2[i].value.length == 0){
            req2[i].style.borderColor = "#f5543f";
        } else{
            req2[i].style.borderColor = "rgba(0, 0, 0, 0.06)";
        }
    }
    for(let i = 0; i < req3.length; i++){
        if (req3[i].value.length == 0){
            req3[i].style.borderColor = "#f5543f";
        } else{
            req3[i].style.borderColor = "rgba(0, 0, 0, 0.06)";
        }
    }
}
$(window).scroll(function(){
    if ($(document).scrollTop() > 70) {
        $('.header .item2').addClass('changes')
    } else{
        $('.header .item2').removeClass('changes')
    }
})
let hamburger = document.querySelector('.hamburger')
let hamburgerOne = document.querySelector('.hamburger .one')
let hamburgerTwo = document.querySelector('.hamburger .two')
let hamburgerThree = document.querySelector('.hamburger .three')
let body = document.querySelector('body')
let fade = document.querySelector('.fade')

hamburger.addEventListener('click', function(){
    if(hamburgerOne.classList.contains('one1')){
        hamburgerOne.classList.remove("one1")
        hamburgerTwo.classList.remove("two1")
        hamburgerThree.classList.remove("three1")
        fade.classList.remove('fadeRight')
    } else{
        hamburgerOne.classList.add("one1")
        hamburgerTwo.classList.add("two1")
        hamburgerThree.classList.add("three1")
        fade.classList.add('fadeRight')
    }
})
