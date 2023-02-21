// Data to be at 0 and time to be at 10 mins when the page loads

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("minutes").innerHTML = 5;
    document.getElementById("seconds").innerHTML = '00';
    document.getElementById("goal-team-1").innerHTML = 0;
    document.getElementById("period-number").innerHTML = 0;
    document.getElementById("goal-team-2").innerHTML = 0;
    document.getElementById("shot-team-1-number").innerHTML = 0;
    document.getElementById("shot-team-2-number").innerHTML = 0;
    document.getElementById("rooster-details-team-1").innerHTML = '';
    document.getElementById("rooster-details-team-2").innerHTML = '';
})


/**
 * The function will start the timbreak when the stop button is clicked
 */
let start = document.getElementById('start-time');
start.addEventListener('click', startTime);


var timer1 = null;
function startTime() {

    timer1 = setTimeout(function()  {

    var minutes = parseInt(document.getElementById('minutes').innerHTML);
    var seconds = parseInt(document.getElementById('seconds').innerHTML);
    let stop = document.getElementById('stop-time');
    console.log(minutes, seconds, stop);
    stop.addEventListener('click', stopTime);

        if (seconds === 0 & minutes !== 0) {
                seconds = 59;
                minutes--;
                console.log(minutes, seconds);
                document.getElementById('seconds').innerHTML = seconds;
                document.getElementById('minutes').innerHTML = minutes;
                startTime();

        } else if (seconds > 0) {
                seconds--;
                document.getElementById('seconds').innerHTML = seconds;
                startTime();

        } else if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
            alert('end of period!')
            document.getElementById('seconds').innerHTML = '00';
        }
    }, 1000)
}
function stopTime() {
    clearInterval(timer1);
    timer1 = null;
}

/**
 * Once clicked the function will create 2 input with a submit button
 */
let setTimerBtn = document.getElementById('set-time');
setTimerBtn.addEventListener('click', setTimer);
function setTimer () {
    alert('function set timer started')
    let setTimerInputHTML = `
        <label for="setMinutes">Minute</label>
        <input id="setMinutes" type="text">
        <label for="setSeconds">Seconds</label>
        <input id="setSeconds" type="text">
        <input type='submit'></submit>
        `
    
    let setTimerInput = document.createElement("form");
    setTimerInput.id = 'submit-time';
    setTimerInput.innerHTML = setTimerInputHTML;
    document.getElementById('control-time').appendChild(setTimerInput);

    let subtmitTime = document.getElementById('submit-time');
    subtmitTime.addEventListener("submit", updateTime);

}



function updateTime(event) {
    alert("Function submit started");
    event.preventDefault();   

    let newMins = document.getElementById('setMinute');
    let newScds = document.getElementById('setSeconds');
    if (parseInt(newScds.innerHTML) > 59) {
        alert('Impossible, please enter valid time!')
    } else if (parseInt(newMins.innerHTML) > 100) {
        alert('Be carefull of exhaustion, the game is way too long!')
    } else {
        document.getElementById('minutes').innerHTML = newMins.value;
        document.getElementById('seconds').innerHTML = newScds.value;
        let divRemove = document.getElementById('control-time');
        divRemove.removeChild(divRemove.children[3]); 
    }
}



/**
 * The function will increment the score of team 1
 */
function incrementScoreTeamOne() {
    let i = parseInt(document.getElementById("goal-team-1").innerHTML);
    i++;
    document.getElementById("goal-team-1").innerHTML = i;
}

function reduceScoreTeamOne() {
    let i = parseInt(document.getElementById("goal-team-1").innerHTML);
    if (i !== 0) {
        i--;
    } else { 
        alert('Impossible!');
    }
    document.getElementById("goal-team-1").innerHTML = i;
}

function incrementPeriod() {
    let i = parseInt(document.getElementById("period-number").innerText);
    i++;
    document.getElementById("period-number").innerHTML = i;

    if (i==1) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 1!')
        document.getElementById("minutes").innerHTML = 10;
        document.getElementById("seconds").innerHTML = '00';
    } else if (i==2) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 2!')
        document.getElementById("minutes").innerHTML = 10;
        document.getElementById("seconds").innerHTML = '00';
    } else if (i==3) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 3!')
        document.getElementById("minutes").innerHTML = 10;
        document.getElementById("seconds").innerHTML = '00';
    } else if (i==4) {
        /* Timmer = 5 mins*/
        alert('Beginning of Overtime!')
        document.getElementById("minutes").innerHTML = 5;
        document.getElementById("seconds").innerHTML = '00';
    }
}

function reducePeriod() {
    let i = parseInt(document.getElementById("period-number").innerHTML);
    if (i !== 1) {
        i--;
    } else { 
        alert('Impossible!');
    }

    document.getElementById("period-number").innerHTML = i;

    if (i==1) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 1!')
    } else if (i==2) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 2!')
    } else if (i==3) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 3!')
    } else if (i==4) {
        /* Timmer = 5 mins*/
        alert('Beginning of Overtime!')
    }

}

function incrementScoreTeamTwo() {
    let i = parseInt(document.getElementById("goal-team-2").innerHTML);
    i++;
    document.getElementById("goal-team-2").innerHTML = i;
}

function reduceScoreTeamTwo() {
    let i = parseInt(document.getElementById("goal-team-2").innerHTML);
    if (i !== 0) {
        i--;
    } else { 
        alert('Impossible!');
    }
    document.getElementById("goal-team-2").innerHTML = i;
}

function incrementShotTeamOne() {
    let i = parseInt(document.getElementById("shot-team-1-number").innerHTML);
    i++;
    document.getElementById("shot-team-1-number").innerHTML = i;
}

function reduceShotTeamOne() {
    let i = parseInt(document.getElementById("shot-team-1-number").innerHTML);
    if (i !== 0) {
        i--;
    } else { 
        alert('Impossible!');
    }
    document.getElementById("shot-team-1-number").innerHTML = i;
}

function incrementShotTeamTwo() {
    let i = parseInt(document.getElementById("shot-team-2-number").innerHTML);
    i++;
    document.getElementById("shot-team-2-number").innerHTML = i;
}

function reduceShotTeamTwo() {
    let i = parseInt(document.getElementById("shot-team-2-number").innerHTML);
    if (i !== 0) {
        i--;
    } else { 
        alert('Impossible!');
    }
    document.getElementById("shot-team-2-number").innerHTML = i;
}

/**
 * Set the rooster for each team
 */

let setRoosterTeamOneBtn = document.getElementById('set-rooster-team-1');
setRoosterTeamOneBtn.addEventListener('click', setRoosterOne);

function setRoosterOne () {
    alert('Set rooster team 1 started')
    let setRoosterOneInputHTML = `
        <label for="team-one-number">Player #</label>
        <input id="team-one-number" type="text">
        <label for="team-one-fname">First Name</label>
        <input id="team-one-fname" type="text">
        <label for="team-one-lname">Last Name</label>
        <input id="team-one-lname" type="text">
        <input type='submit'></submit>
        `
    
    let setRoosterOneInput = document.createElement("form");
    setRoosterOneInput.id = 'submit-team-one';
    setRoosterOneInput.innerHTML = setRoosterOneInputHTML;
    document.getElementById('rooster-setting-team-1').appendChild(setRoosterOneInput);

    let subtmitRoosterOne = document.getElementById('submit-team-one');
    subtmitRoosterOne.addEventListener("submit", updateRoosterOne);

}



function updateRoosterOne(event) {
    alert("Function submit team one started");
    event.preventDefault();   

    let playerNumber = document.getElementById('team-one-number').value;
    let playerFirstName = document.getElementById('team-one-fname').value;
    let playerLastName = document.getElementById('team-one-lname').value;

    let setRoosterOneList = document.createElement('ol');
    let setRoosterOneListHTML = `
        <li>#${playerNumber}  ${playerFirstName}  ${playerLastName}</li>
    `
    setRoosterOneList.innerHTML = setRoosterOneListHTML;
    document.getElementById('rooster-setting-team-1').appendChild(setRoosterOneList);

    document.getElementById('submit-team-one').remove();
}

