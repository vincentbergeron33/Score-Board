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

/* Set oenality functions*/
let penalityBtn = document.getElementById('set-penality');
penalityBtn.addEventListener('click', setPenality);

function setPenality() {
    alert('set penality function started');
    let setPenalityInputHTML = `
    <label for="player-team">Player team</label>
    <input id="player-team-1" name='team' type="radio" class='radio-btn' required>1
    <input id="player-team-2" name='team' type="radio" class='radio-btn' required>2
    <br>
    <label for="player-number">Player #</label>
    <input id="player-number" type="number">
    <label for="Penality-time">Penality Time</label>
    <input id="pen-mins" type="number">
    <input id="pen-scds" type="number">
    <input type='submit'></submit>
    `
    let setPenalityInput = document.createElement('form');
    setPenalityInput.id = 'penality-form';
    setPenalityInput.innerHTML = setPenalityInputHTML;
    document.getElementById('penality-border-setting').appendChild(setPenalityInput);

    let subtmitPenality = document.getElementById('penality-form');
    subtmitPenality.addEventListener("submit", updatePenalityBox);

}

/**
 * The function will check which team the player is from and update the penality box with the
 * player # and time
 */

function updatePenalityBox() {
    alert('start update peneality box function');
    let team1 = document.getElementById('player-team-1');
    let team2 = document.getElementById('player-team-2');
    let playerNumber = document.getElementById('player-number').value;
    let penMins = document.getElementById('pen-mins').value;
    let penScds = document.getElementById('pen-scds').value;
    if (team1.checked) {
        alert('team 1 seclected');
        let setPenalityList = document.createElement('ul');
        let setPenalityListHTML = `
            <li>#${playerNumber} ${penMins}:${penScds}</li>
        `
        setPenalityList.innerHTML = setPenalityListHTML;
        document.getElementById('penality-players-team-1').appendChild(setPenalityList);
    
        document.getElementById('penality-form').remove();
    } else if (team2.checked) {
        alert('team 2 selected');
    }

}


 /* Set rooster functions*/


/* Team 1*/

let setRoosterTeamOneBtn = document.getElementById('set-rooster-team-1');
setRoosterTeamOneBtn.addEventListener('click', setRoosterOne);

/**
 * Set the rooster for team1 - Add the HTML form
 */

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

/** 
 * add the details to the div and delete the form for team 1
 */

function updateRoosterOne(event) {
    alert("Function submit team one started");
    event.preventDefault();   

    let playerNumber = document.getElementById('team-one-number').value;
    let playerFirstName = document.getElementById('team-one-fname').value;
    let playerLastName = document.getElementById('team-one-lname').value;

    let setRoosterOneList = document.createElement('ul');
    let setRoosterOneListHTML = `
        <li>#${playerNumber}  ${playerFirstName}  ${playerLastName}</li>
    `
    setRoosterOneList.innerHTML = setRoosterOneListHTML;
    document.getElementById('rooster-details-team-1').appendChild(setRoosterOneList);

    document.getElementById('submit-team-one').remove();
}

/* Team 2*/

let setRoosterTeamTwoBtn = document.getElementById('set-rooster-team-2');
setRoosterTeamTwoBtn.addEventListener('click', setRoosterTwo);
/**
 * Add the form to submit the player 2 details
 */
function setRoosterTwo () {
    alert('Set rooster team 2 started')
    let setRoosterTwoInputHTML = `
        <label for="team-two-number">Player #</label>
        <input id="team-two-number" type="text">
        <label for="team-two-fname">First Name</label>
        <input id="team-two-fname" type="text">
        <label for="team-two-lname">Last Name</label>
        <input id="team-two-lname" type="text">
        <input type='submit'></submit>
        `
    
    let setRoosterTwoInput = document.createElement("form");
    setRoosterTwoInput.id = 'submit-team-two';
    setRoosterTwoInput.innerHTML = setRoosterTwoInputHTML;
    document.getElementById('rooster-setting-team-2').appendChild(setRoosterTwoInput);

    let subtmitRoosterTwo = document.getElementById('submit-team-two');
    subtmitRoosterTwo.addEventListener("submit", updateRoosterTwo);

}

/** 
 * add the details to the div and delete the form for team 2
 */

function updateRoosterTwo(event) {
    alert("Function submit team one started");
    event.preventDefault();   

    let playerNumberTwo = document.getElementById('team-two-number').value;
    let playerFirstNameTwo = document.getElementById('team-two-fname').value;
    let playerLastNameTwo = document.getElementById('team-two-lname').value;

    let setRoosterTwoList = document.createElement('ul');
    let setRoosterTwoListHTML = `
        <li>#${playerNumberTwo}  ${playerFirstNameTwo}  ${playerLastNameTwo}</li>
    `
    setRoosterTwoList.innerHTML = setRoosterTwoListHTML;
    document.getElementById('rooster-details-team-2').appendChild(setRoosterTwoList);

    document.getElementById('submit-team-two').remove();
}

