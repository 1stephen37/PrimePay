var mql = window.matchMedia('screen and (max-width: 76.8em)');
if (mql.matches){
     var flex = document.querySelectorAll(".section3 .box-grid .box");
     for(var i of flex) {
        i.classList.remove("flex");
        i.classList.remove("align-center");
        i.classList.remove("justify-space-between");
        i.classList.remove("grid-2");
     }

     var box = document.querySelector(".section3 .box-grid");
     var remove = document.querySelector(".section3 .box-grid .box");
     console.log(box);
     box.removeChild;

     var gird = `
 

 <div class="box"> 

 <img src="assets/img/section4/5.svg" alt="" class="img-full">

 </div>

 <div class="box">
 <div class="detail">
     <div class="heading">
        Tích hợp khác
     </div>
     <div class="des">
     PrimePay không những là ứng dụng giao dịch tốt nhất 
     mà còn tích hợp những tiện ích khac nhằm biến trải nghiệm 
     người dùng trở nên tốt nhất có thể
     </div>
 </div>



</div>

 <div class="box">
     <div class="image">
         <img src="assets/img//section4/1.svg" alt="" class="img-full">
     </div>
     <div class="detail">
         <div class="heading">
            An toàn & Bảo mật
         </div>
         <div class="des">
         Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
             
         </div>
     </div>
 </div>

 <div class="box">
     <div class="image">
         <img src="assets/img/section4/2.svg" alt="" class="img-full">
     </div>
     <div class="detail">
         <div class="heading">
             An toàn & Bảo mật
         </div>
         <div class="des">
         Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
             
         </div>
     </div>
 </div>

 <div class="box">
     <div class="image">
         <img src="assets/img/section4/3.svg" alt="" class="img-full">
     </div>
     <div class="detail">
         <div class="heading">
             An toàn & Bảo mật
         </div>
         <div class="des">
         Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
             
         </div>
     </div>
 </div>

 <div class="box">
     <div class="image">
         <img src="assets/img/section4/4.svg" alt="" class="img-full">
     </div>
     <div class="detail">
         <div class="heading">
             An toàn & Bảo mật
         </div>
         <div class="des">
         Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động

         </div>
     </div>
 </div>

     `;


     box.innerHTML = gird;
//     }
    // window width is at least 500px
  } else {
    var normal = `
    <div class="box grid-2 flex justify-space-between align-center">
    <div class="left flex">
        <div class="heading">
            Tích hợp khác
        </div>
        <div class="des">
            PrimePay không những là ứng dụng giao dịch tốt nhất 
            mà còn tích hợp những tiện ích khac nhằm biến trải nghiệm 
            người dùng trở nên tốt nhất có thể
        </div>
    </div>

    <div class="right">

        <img src="assets/img/section4/5.svg" alt="" class="img-full">

    </div>



</div>

<div class="box">
    <div class="image">
        <img src="assets/img//section4/1.svg" alt="" class="img-full">
    </div>
    <div class="detail">
        <div class="heading">
            An toàn & Bảo mật
        </div>
        <div class="des">
            Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
        </div>
    </div>
</div>

<div class="box">
    <div class="image">
        <img src="assets/img/section4/2.svg" alt="" class="img-full">
    </div>
    <div class="detail">
        <div class="heading">
            An toàn & Bảo mật
        </div>
        <div class="des">
            Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
        </div>
    </div>
</div>

<div class="box">
    <div class="image">
        <img src="assets/img/section4/3.svg" alt="" class="img-full">
    </div>
    <div class="detail">
        <div class="heading">
            An toàn & Bảo mật
        </div>
        <div class="des">
            Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
        </div>
    </div>
</div>

<div class="box">
    <div class="image">
        <img src="assets/img/section4/4.svg" alt="" class="img-full">
    </div>
    <div class="detail">
        <div class="heading">
            An toàn & Bảo mật
        </div>
        <div class="des">
            Dễ dàng tích hợp với tất cả các công cụ yêu thích cần thiết của bạn thông qua và APIsing tự động
        </div>
    </div>
</div>
    `;

    var box = document.querySelector(".section3 .box-grid");
    box.innerHTML = normal;

    // window width is less than 500px
  }