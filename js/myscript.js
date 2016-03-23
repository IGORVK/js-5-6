
var active = false;
var msStart;
var msRunning;
var diff;
var memoryStart;



function start_timer(){
    
    
    if (active){
        
        msRunning = new Date().getTime();
         
         diff  = msRunning - msStart;
         
         var miliSec = new Date(diff).getUTCMilliseconds(); 
         var sec = new Date(diff).getUTCSeconds(); 
         var min = new Date(diff).getUTCMinutes();
         var hours = new Date(diff).getUTCHours();
            
        
          if(hours < 10) hours = "0" + hours;
              
          if(min < 10 ) min = "0" + min;
         
          if(sec < 10) sec = "0" + sec;
      
         document.getElementById("ms").innerHTML = miliSec;
         document.getElementById("my_timer").innerHTML = hours + ':' + min + ':' + sec;
         setTimeout(start_timer, 1); 
         }
    

};


function changeState() {
  if (active == false) {
    
    active = true;
    msStart = new Date().getTime();
    start_timer();
    console.log('Timer has been started');
    document.getElementById("control").innerHTML = "PAUSE";
  }else {
    active = false;
    
    console.log('Timer is on pause');
    document.getElementById('control').innerHTML = "START";
  }
};

  
function reset() {
      document.getElementById("my_timer").innerHTML = "00" + ':' + "00" + ':' + "00";
      document.getElementById("ms").innerHTML = "0";
      
      
      
      console.log("Timer has been reset");
};

