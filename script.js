// for drop box
function dropBox() {
  document.getElementById('dd').classList.toggle("dwn");
}
 //first slide show
var sliderImages = document.querySelectorAll('.slide');
var arrowRight = document.querySelector('#arrowRight');
var arrowLeft = document.querySelector('#arrowLeft');
var current = 0;

    //clear all images

    function reset(){
      for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
      }
    }

    //Init slider

    function startSlide(){
      reset();
      sliderImages[0].style.display = 'block';
    }

    //show prev

    function slideLeft(){
      reset();
      sliderImages[current - 1].style.display = 'block';
      current--;
    }

     //show next

     function slideRight(){
       reset();
       sliderImages[current + 1].style.display = 'block';
       current++;
     }

    //left arrow  click

    arrowLeft.addEventListener('click',function(){
      if(current === 0){
        current = sliderImages.length;
      }
      slideLeft();
    });

      //right arrow click

    arrowRight.addEventListener('click',function(){
      if(current === sliderImages.length - 1){
        current = -1;
      }
      slideRight();
    });
    startSlide();


    //second slide show

   var i = 0;
   var images = [];
   var x = 4;
   var img = [];
   var y = 8;
   var image = [];
   var time = 5000;

   images[0] = 'images/a.jpg';
   images[1] = 'images/b.jpg';
   images[2] = 'images/c.jpg';
   images[3] = 'images/d.jpg';
   img[4] = 'images/e.jpg';
   img[5] = 'images/f.jpg';
   img[6] = 'images/g.jpg';
   img[7] = 'images/h.jpg';
   image[8] = 'images/i.jpg';
   image[9] = 'images/j.jpg';
   image[10] = 'images/k.jpg';
   image[11] = 'images/l.jpg';

     function changeImg(){
       document.slide.src = images[i];
       document.ship.src = img[x];
       document.flight.src = image[y];
       if(i<images.length-1 && x<img.length-1 && y<image.length-1){
         i++;
         x++;
         y++;
       }else{
         i = 0;
         x = 4;
         y = 8;
       }
       setTimeout("changeImg()",time);
     }
     window.onload = changeImg;
