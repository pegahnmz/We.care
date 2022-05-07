var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  effect:"slide",
  autoplay:{
      delay:2000,
      disableOnIntraction:false,

  },
  
  spaceBetween: 30,

  
  
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
  
});

var swiper = new Swiper('.swip', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  effect:"slide",
  autoplay:{
      delay:2000,
      disableOnIntraction:false,

  },
  
 
spaceBetween:0,
  
  
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
  
});




  const header = this.document.querySelector(".header__container")
  window.addEventListener("scroll", function(){
      
      header.classList.toggle("sticky", window.scrollY > 0)
    //  header.classList.toggle("header-onscroll", window.scrollY > 0)
  })

  document.querySelector(".bi-x").addEventListener("click",function(event){
     
    
  })
  function delete_element(event){
    event.target.parentElement.parentElement.classList.add("hide");
  }

var sp = document.querySelector("#specialties")
var con = document.querySelector("#conditions")
var pro = document.querySelector("#procedures")

sp.addEventListener("click" , showslide);
con.addEventListener("click" , showslide);
pro.addEventListener("click" , showslide);




function showslide(ev){
  var cond = document.querySelector("#con_container");
  var proc = document.querySelector("#pro_container")

  var sww = document.querySelector("#swiper")

  if(ev.target.id === "specialties"){

    sp.classList.add("ps__case-active");
    con.classList.remove("ps__case-active");
    pro.classList.remove("ps__case-active");

     
    sww.classList.remove("hide");
    cond.classList.add("hide")
    proc.classList.add("hide")
    
   
   
  } 
  if(ev.target.id === "conditions"){
    
    sp.classList.remove("ps__case-active");
    con.classList.add("ps__case-active");
    pro.classList.remove("ps__case-active");

    
    sww.classList.add("hide");
    cond.classList.remove("hide")
    procd.classList.add("hide")
    
  }
   if(ev.target.id === "procedures"){


    sp.classList.remove("ps__case-active");
    con.classList.remove("ps__case-active");
    pro.classList.add("ps__case-active");

     
    sww.classList.add("hide");
    cond.classList.add("hide")
    proc.classList.remove("hide")
  }
  
   
}


const fd =  document.querySelector("#fd")
fd.addEventListener("scroll", function () { 
  console.log("lpp")
 })
window.addEventListener("scroll", function(){
    console.log("hi",window.scrollY == 10)
  //  fd.classList.toggle("sticky", window.scrollY > 0)
  //  header.classList.toggle("header-onscroll", window.scrollY > 0)
})