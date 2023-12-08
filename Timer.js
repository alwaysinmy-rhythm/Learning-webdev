let stop_button = document.getElementById('stop');
let start_button = document.getElementById('start');
let time_box = document.getElementById('time_box');

     
let miliseconds = -1 ;
let seconds=-1;
let mins=-1;
let hours=-1;
let days=-1; 

function start_clock() {
    let current_start_stat = start_button.innerHTML;
    if (current_start_stat == 'START') {
        start.innerHTML = 'PAUSE';
        interval = setInterval(display_time,1000 );
        stop_button.disabled = false;
    }
    else if (current_start_stat == 'PAUSE') {
        start.innerHTML = 'CONTINUE';
        clearInterval(interval)
        //stop_button.disabled = true ;            
    }
    else if (current_start_stat == 'CONTINUE') {
        start_time = new Date() ; 
        start.innerHTML = 'PAUSE';
        interval = setInterval(display_time,1000);
    }
    // interval = setInterval(display_time,1000); 
}

function stop_clock(curr_time) {
    
    stop_button.disabled = true;
    start_button.innerHTML = 'START';
    miliseconds =-1;
    seconds=-1;
    mins=-1;
    hours=-1;
    days=-1;
    clearInterval(interval);
    display_time();
     
}


function display_time() {
    // miliseconds = (miliseconds+1)%100; 
    // if(miliseconds ==0 )seconds = (seconds+1)%60; 
    seconds = (seconds+1)%60;
    if(seconds == 0 ) mins= (mins+1)%60;
    if(mins==0 && seconds == 0)hours =(hours+1)%24;
    if(hours ==0 && mins==0 && seconds == 0 )days++ ; 

    formated_time = (pad_format(hours) + ':' + pad_format(mins) + ':' + pad_format(seconds));
    display = document.getElementById('display')
    display.innerHTML = formated_time ; 
}
//this function is to format the time to show in the clock. 
function zeroPad(numberStr) {
    return numberStr.padStart(2, "0");
}
function pad_format(num) {
    var numString = num.toString();
    var paddedNum = zeroPad(numString);
    return paddedNum;
}