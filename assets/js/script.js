// Data to be at 0 and time to be at 10 mins when the page loads

// Move all HTML nodes at the top
let minutesNode = document.getElementById("minutes");
let secondsNode = document.getElementById("seconds");
let goalOneNode = document.getElementById("goal-team-1");
let periodNode = document.getElementById("period-number");
let goalTwoNode = document.getElementById("goal-team-2");
let shotOneNode = document.getElementById("shot-team-1-number");
let shotTwoNode = document.getElementById("shot-team-2-number");
let roosterOneNode = document.getElementById("rooster-details-team-1");
let roosterTwoNode = document.getElementById("rooster-details-team-2");

let addScoreOneBtnNode = document.getElementById('increment-score-team-1');
let reduceScoreOneBtnNode = document.getElementById('reduce-score-team-1');
let addPeriodBtnNode = document.getElementById('increment-period');
let reducePeriodBtnNode = document.getElementById('reduce-period');
let addScoreTwoBtnNode = document.getElementById('increment-score-team-2');
let reduceScoreTwoBtnNode = document.getElementById('reduce-score-team-2');
let addShotOneBtnNode = document.getElementById('increment-shot-team-1');
let reduceShotOneBtnNode = document.getElementById('reduce-shot-team-1');
let addShotTwoBtnNode = document.getElementById('increment-shot-team-2');
let reduceShotTwoBtnNode = document.getElementById('reduce-shot-team-2');
let roosterSettingOne = document.getElementById("rooster-setting-team-1");
let roosterSettingTwo = document.getElementById("rooster-setting-team-2");

document.addEventListener('DOMContentLoaded', function() {
    minutesNode.innerHTML = 5;
    secondsNode.innerHTML = '00';
    goalOneNode.innerHTML = 0;
    periodNode.innerHTML = 0;
    goalTwoNode.innerHTML = 0;
    shotOneNode.innerHTML = 0;
    shotTwoNode.innerHTML = 0;
    roosterOneNode.innerHTML = '';
    roosterTwoNode.innerHTML = '';


    reduceScoreOneBtnNode.disabled = true;
    reducePeriodBtnNode.disabled = true;
    reduceScoreTwoBtnNode.disabled = true;
    reduceShotOneBtnNode.disabled = true;
    reduceShotTwoBtnNode.disabled = true;
})


/**
 * The function will start the timbreak when the stop button is clicked
 */
let playBtnNode = document.getElementById('start-time');
playBtnNode.addEventListener('click', onPlayButtonClick);
let stop = document.getElementById('stop-time');
stop.addEventListener('click', stopTime);

ddScoreOneBtnNode.addEventListener('click', incrementScoreTeamOne);
reduceScoreOneBtnNode.addEventListener('click', reduceScoreTeamOne);
addPeriodBtnNode.addEventListener('click', incrementPeriod);
reducePeriodBtnNode.addEventListener('click', reducePeriod);
addScoreTwoBtnNode.addEventListener('click', incrementScoreTeamTwo);
reduceScoreTwoBtnNode.addEventListener('click', reduceScoreTeamTwo);
addShotOneBtnNode.addEventListener('click', incrementShotTeamOne);
reduceShotOneBtnNode.addEventListener('click', reduceShotTeamOne);
addShotTwoBtnNode.addEventListener('click', incrementShotTeamTwo);
reduceShotTwoBtnNode.addEventListener('click', reduceShotTeamTwo);
roosterSettingOne.addEventListener('click', setRoosterOne);
roosterSettingTwo.addEventListener('click', setRoosterTwo);

var intervalRef = null;
function onPlayButtonClick() {
    intervalRef = setInterval(function()  {
    var minutes = parseInt(minutesNode.innerHTML);
    var seconds = parseInt(secondsNode.innerHTML);
    console.log(minutes, seconds, stop);
        if (seconds === 0 & minutes !== 0) {
                seconds = 59;
                minutes--;
                console.log(minutes, seconds);
                secondsNode.innerHTML = String(seconds).padStart(2, "0");
                minutesNode.innerHTML = String(minutes).padStart(2, "0");
        } else if (seconds > 0) {
                seconds--;
                secondsNode.innerHTML = String(seconds).padStart(2, "0");
        } else if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
            alert('end of period!')
            secondsNode.innerHTML = '00';
            clearInterval(intervalRef);
        }
    }, 1000)
    playBtnNode.disabled = true;
    stop.disabled = false;
}

function stopTime() {
    clearInterval(intervalRef);
    intervalRef = null;
    playBtnNode.disabled = false;
    stop.disabled = true;
}

/**
 * Once clicked the function will create 2 input with a submit button
 */
let setTimerBtn = document.getElementById('set-time');
setTimerBtn.addEventListener('click', setTimer);
function setTimer () {
    let setTimerInputHTML = `
        <label for="setMinutes">Minutes</label>
        <input id="setMinutes" type="number" required>
        <label for="setSeconds" required>Seconds</label>
        <input id="setSeconds" type="number" required>
        <input type='submit'></submit>
        `
    
    let setTimerInput = document.createElement("form");
    setTimerInput.id = 'submit-time';
    setTimerInput.innerHTML = setTimerInputHTML;
    document.getElementById('control-time').replaceChild(setTimerInput, document.getElementById('control-time').childNodes[0]);

    let subtmitTime = document.getElementById('submit-time');
    subtmitTime.addEventListener("submit", updateTime);
}

function updateTime(event) {
    event.preventDefault();   
    var newMins = document.getElementById('setMinutes');
    var newScds = document.getElementById('setSeconds');
    if (parseInt(newScds.value) >= 60) {
        alert('Impossible, please enter valid time!');
    } else if (parseInt(newMins.value) >= 100) {
        alert('Be carefull of exhaustion, the game is way too long!');
        minutesNode.innerHTML = newMins.value;
        secondsNode.innerHTML = newScds.value;
        document.getElementById('submit-time').remove(); ; 
    } else {
        minutesNode.innerHTML = newMins.value;
        secondsNode.innerHTML = newScds.value;
        document.getElementById('submit-time').remove(); 
    }
}



function updateCounter(scoreDiv, updateValue) {
    let i = parseInt(scoreDiv.innerHTML);
    i = i + updateValue;
    scoreDiv.innerHTML = i;
}


/**
 * The function will increment the score of team 1
 */
function incrementScoreTeamOne() {
    updateCounter(goalOneNode, 1)
    reduceScoreOneBtnNode.disabled = false;
}

function reduceScoreTeamOne() {
    updateCounter(goalOneNode, -1)
    if (parseInt(goalOneNode.innerText) === 0)
    reduceScoreOneBtnNode.disabled = true;
}

function incrementPeriod() {
    let i = parseInt(periodNode.innerText);
    i++;
    periodNode.innerHTML = i;

    if (i==1) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 1!')
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==2) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 2!')
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==3) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 3!')
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==4) {
        /* Timmer = 5 mins*/
        alert('Beginning of Overtime!')
        minutesNode.innerHTML = 5;
        secondsNode.innerHTML = '00';
    }
}

function reducePeriod() {
    let i = parseInt(periodNode.innerHTML);
    if (i !== 1) {
        i--;
    } else { 
        alert('Impossible!');
    }

    periodNode.innerHTML = i;

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
    updateCounter(goalTwoNode, 1);
}

function reduceScoreTeamTwo() {
    updateCounter(goalTwoNode, -1);
}

function incrementShotTeamOne() {
    updateCounter(shotOneNode, 1);
}

function reduceShotTeamOne() {
    updateCounter(shotOneNode, -1);
}

function incrementShotTeamTwo() {
    updateCounter(shotTwoNode, 1);
}

function reduceShotTeamTwo() {
    updateCounter(shotTwoNode, -1);
}

 /* Set rooster functions*/


/* Team 1*/

let setRoosterTeamOneBtn = document.getElementById('set-rooster-team-1');
setRoosterTeamOneBtn.addEventListener('click', setRoosterOne);

/**
 * Set the rooster for team1 - Add the HTML form
 */

function setRoosterOne () {
    let setRoosterOneInputHTML = `
        <label for="team-one-number">Player #</label>
        <input id="team-one-number" type="number" required>
        <label for="team-one-fname">First Name</label>
        <input id="team-one-fname" type="text" required>
        <label for="team-one-lname">Last Name</label>
        <input id="team-one-lname" type="text" required>
        <input type='submit'></submit>
        `
    
    let setRoosterOneInput = document.createElement("form");
    setRoosterOneInput.id = 'submit-team-one';
    setRoosterOneInput.innerHTML = setRoosterOneInputHTML;
    document.getElementById('rooster-setting-team-1').replaceChild(setRoosterOneInput, document.getElementById('rooster-setting-team-1').childNodes[0]);

    let subtmitRoosterOne = document.getElementById('submit-team-one');
    subtmitRoosterOne.addEventListener("submit", updateRoosterOne);

}

/** 
 * add the details to the div and delete the form for team 1
 */

function updateRoosterOne(event) {
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
    let setRoosterTwoInputHTML = `
        <label for="team-two-number">Player #</label>
        <input id="team-two-number" type="number" required>
        <label for="team-two-fname">First Name</label>
        <input id="team-two-fname" type="text" required>
        <label for="team-two-lname">Last Name</label>
        <input id="team-two-lname" type="text" required>
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

