let images = [
    "https://images.pexels.com/photos/23081238/pexels-photo-23081238/free-photo-of-a-bicycle-is-parked-in-the-sand-next-to-a-palm-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/23228195/pexels-photo-23228195/free-photo-of-time-on-laptop-screen.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/22638802/pexels-photo-22638802/free-photo-of-sol-de-congreso.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/22670156/pexels-photo-22670156/free-photo-of-a-street-with-a-building-and-flowers-on-the-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

    "https://images.pexels.com/photos/22591486/pexels-photo-22591486/free-photo-of-a-street-with-a-bunch-of-flags-hanging-from-the-buildings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

];
 let currentIndex = 0;
 let timer;
 const imageElement = document.getElementById('image');
 const prevButton = document.getElementById('prevbtn');
 const nextButton =document.getElementById('nextbtn');

 function showImage(index){
    imageElement.src = images[index];
 }
 function nextImage(){
    currentIndex =(currentIndex + 1) % images.length;
    showImage(currentIndex);
    resetTimer();
 }
 function prevImage(){
    currentIndex =(currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
    resetTimer();
 }
//  function resetTimer will change the slide in 3 seconds. 
 function resetTimer(){
    clearTimeout(timer);
    timer = setTimeout(nextImage,3000);
 }

 prevButton.addEventListener('click',prevImage);
 nextButton.addEventListener('click',nextImage);

// initialized the slider.
 showImage(currentIndex);
 resetTimer();
