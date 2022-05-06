
var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    //loop: true,
    slidesPerView: 4,
     slidesPerColumn:2,
     slidesPerColumnFill:'row',
     spaceBetween:0,
     /*
    grapCursor:true,
    effect:"slide",
    grid: {
        fill:'column',
        rows: 2,
      }, 
    autoplay:{
        delay:3000,
        disableOnIntraction:false,

    },
    
    spaceBetween: 15,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  on:{
      init(){
          this.el.addEventListener("mouseenter", () =>{
              this.autoplay.stop();
          });
          this.el.addEventListener("mouseleave", () =>{
            this.autoplay.start();
        })
      }
  }
    */
  });
  const myswiper = document.getElementById("swiper")
  myswiper.addEventListener("mouseenter", function(){
      
      swiper.autoplay.stop()
  })