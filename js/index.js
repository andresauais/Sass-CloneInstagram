var img = document.getElementsByClassName('postMobile');
var myVar = setInterval(myTimer, 2000);
var count = 0;

function myTimer() {
  document.getElementsByClassName('postMobile')[0].classList.remove("active");
  document.getElementsByClassName('postMobile')[1].classList.remove("active");
  document.getElementsByClassName('postMobile')[2].classList.remove("active");
  document.getElementsByClassName('postMobile')[3].classList.remove("active");
  if(count < 3){
    document.getElementsByClassName('postMobile')[count].classList.add("active");
    return count ++;
  }
  else{
    document.getElementsByClassName('postMobile')[count].classList.add("active");
    return count = 0;
  }
}
