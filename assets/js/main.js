window.onload = function() { 

    var sub = document.querySelector("header .sub-menu ");

    var nav = document.querySelector(".subnav");

    sub.addEventListener("click", function on () {
        if(nav.classList.contains("open")) {
            nav.classList.remove("open");
        } else {
            nav.classList.add("open");
            nav.style.animation = 'slide 0.8s ease-in';
        }
        
    });

    // sub.addEventListener("click", function off () {
    //     nav.style.display = 'none';
    // });
  
    function login() {
        var login = document.querySelector('header .button-header');

        login.addEventListener('click', function () {

            window.open('login.html', '_self');


        });
    }

    login();
}



    // $window.resize(function(){
     
    //     var width = $(window).width();
    //     console.log(width);
    //     if (width <= 768){
    //        var flex = document.querySelectorAll(".section3 .box-grid .box");
    //        flex.classList.remove("flex");
    //     }
    //     else{
    //         return false;
    //     }
    // });

  



    // var mq2 = window.matchMedia('screen and (max-width: 76.8em)');
    // if (mql.matches){ 

    // } 















