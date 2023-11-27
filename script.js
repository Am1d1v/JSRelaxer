

const container = document.querySelector('#container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = (totalTime / 5);


breathAnimation();

function breathAnimation(){

    text.innerText = 'Breathe In';
    
    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
        }, holdTime)

    }, breathTime)
}

setInterval(breathAnimation, totalTime);








