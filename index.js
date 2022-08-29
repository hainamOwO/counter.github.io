let count = 0;
let time = 0.00;


start();

const timer = setInterval(up,10);
  function up(){
    if (count!=0){
      time += 0.01;
      time = Math.round(time*100)/100;
      document.getElementById("clock").innerHTML = time;
      if (time >= 10){
        clearInterval(timer);
        alert(`your CPS is ${count/time} clicks per second`);
        count=0;
        time=0;
        document.getElementById("clock").innerHTML = time;
        document.getElementById("num").innerHTML = count;
        
      }
    }
  }
  
  function start(){
    document.getElementById("clock").innerHTML = time;

  document.getElementById("num").innerHTML = count;

  document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("num").innerHTML = count;
}
}