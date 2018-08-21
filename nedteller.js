const container = document.querySelector('.buttons');
container.addEventListener('click', function(event) {
    const element = event.target;

    console.log(element.nodeName); // => BUTTON eller DIV
    console.log(element.innerHTML);

    const el = document.querySelector('#counter');

    if (el.innerText == 0 && element.nodeName == "BUTTON"){
      el.innerText = element.innerHTML;
    } else if (element.nodeName == "BUTTON") {
      el.innerText = el.innerText + element.innerHTML;
    }
});

const button = document.querySelector('#start');
button.addEventListener('click', function() {
  const el = document.querySelector('#counter');
  if (el.innerText != 0){
    tid();
    id = setInterval(tid, 1000);
  }

});


function tid() {
  const el = document.querySelector('#counter');
  nyTid = parseInt(el.innerText) - 1;
  el.innerText = nyTid;
  if (nyTid == 0){
      clearInterval(id);
      //alarm();
      const id_alarm = setInterval(alarm,200);
      setTimeout(() => clearInterval(id_alarm),4000);
  }
}

function alarm() {
  const el_main = document.querySelector('#body');
  if (el_main.style.backgroundColor ==  "rgb(253, 81, 88)"){
    el_main.style.backgroundColor = "262626";
  } else {
    el_main.style.backgroundColor = "fd5158";
  }
}
