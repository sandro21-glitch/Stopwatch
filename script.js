

const min = document.getElementById('minutes');
const sec = document.getElementById('sec');
const startT = document.getElementById('start');
const stopT  = document.getElementById('stop');
const resetT = document.getElementById('reset');



let interval;
let seconds = 0; 
let minutes = 0; 


startT.addEventListener('click', function(), {once:true} {
    interval = setInterval(startTimer, 10);
});

stopT.addEventListener('click', () => {
    stopTimer();
});

resetT.addEventListener('click', function() {
    clearInterval(interval);
    resetTimer();
});


// Start Timer
function startTimer() {
    seconds++;

    if(seconds < 9){
        sec.innerHTML = `0${seconds}`;
    }else {
        sec.innerHTML = seconds;
    }
    
    if(seconds === 99) {
        minutes++;
        seconds = 0;
        min.innerHTML = `0${minutes}`;
    }
    if(minutes > 9){
        min.innerHTML = minutes;
    }
}

// StopTimer
function stopTimer() {
    clearInterval(interval);
}

// ResetTimer
function resetTimer() {
    seconds = 0; 
    minutes = 0; 

    sec.innerHTML = '00';
    min.innerHTML = '00';
}
