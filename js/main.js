// Hamburger menu
function toggle(){
    document.getElementById('main_menu').classList.toggle("toggleClass");
}

document.getElementById('main_menu').addEventListener('click',function(){
    document.getElementById('main_menu').classList.remove("toggleClass");
});

//Slider

  var i=0;
  var firstValue = document.getElementById('changeText').textContent;

  let timerId = setInterval(() => {
      var arr =["ÖZGÜN","ESNEK","YENİLİKÇİ"];
      document.getElementById('changeText').textContent = arr[i];

      if(i >= arr.length){ 
          i=0;
          document.getElementById('changeText').textContent = firstValue;
      }
      else{ i++; }
      
  }, 3000);