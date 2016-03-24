
var active = false;
var msStart;
var msRunning;
var diff;
var pauseStart = 0;
var pauseEnd = 0;
var pauseLength = 0;



function start_timer(){
    
    
    if (active){
                     
         msRunning = new Date().getTime();
                 
         if(msStart == 0){
             msStart = new Date().getTime();
           }
         
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
    if(!msStart){ msStart = new Date().getTime();}
        
        if(pauseStart)
        {pauseEnd = new Date().getTime();
        pauseLength = pauseEnd - pauseStart;
        msStart = msStart + pauseLength;}
        
       
    start_timer();
    console.log('Timer has been started');
    document.getElementById("control").innerHTML = "PAUSE";
  }else {
    active = false;
    pauseStart = new Date().getTime();
    console.log('Timer is on pause');
    document.getElementById('control').innerHTML = "START";
  }
};

  
function reset() {
      document.getElementById("my_timer").innerHTML = "00" + ':' + "00" + ':' + "00";
      document.getElementById("ms").innerHTML = "0";
       msStart = 0;
       msRunning = 0;
       diff = 0;
       pauseStart = 0;
       pauseEnd = 0;
       pauseLength = 0;
      console.log("Timer has been reset");
};

