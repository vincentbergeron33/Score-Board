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
let roosterSettingOne = document.getElementById("set-rooster-team-1");
let roosterSettingTwo = document.getElementById("set-rooster-team-2");
let playBtnNode = document.getElementById('start-time');
let stop = document.getElementById('stop-time');
let setTimerBtn = document.getElementById('set-time');
let setRoosterTeamOneBtn = document.getElementById('set-rooster-team-1');
let setRoosterTeamTwoBtn = document.getElementById('set-rooster-team-2');

playBtnNode.addEventListener('click', onPlayButtonClick);
stop.addEventListener('click', stopTime);
setTimerBtn.addEventListener('click', setTimer);
setRoosterTeamOneBtn.addEventListener('click', setRoosterOne);
setRoosterTeamTwoBtn.addEventListener('click', setRoosterTwo);

document.addEventListener('DOMContentLoaded', function() {
    minutesNode.innerHTML = '05';
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
});


/**
 * The function start the timer when the play button is clicked 
 */

var intervalRef = null;
function onPlayButtonClick() {
    intervalRef = setInterval(function()  {
    var minutes = parseInt(minutesNode.innerHTML);
    var seconds = parseInt(secondsNode.innerHTML);
    console.log(minutes, seconds, stop);
        if (seconds === 0 && minutes !== 0) {
                seconds = 59;
                minutes--;
                console.log(minutes, seconds);
                secondsNode.innerHTML = String(seconds).padStart(2, "0");
                minutesNode.innerHTML = String(minutes).padStart(2, "0");
        } else if (seconds > 0) {
                seconds--;
                secondsNode.innerHTML = String(seconds).padStart(2, "0");
        } else if (parseInt(seconds) === 0 && parseInt(minutes) === 0) {
            secondsNode.innerHTML = '00';
            clearInterval(intervalRef);
        }
    }, 1000);
    playBtnNode.disabled = true;
    stop.disabled = false;
}

/**
 * The function stop the timer when the stop button is clicked
 */
function stopTime() {
    clearInterval(intervalRef);
    intervalRef = null;
    playBtnNode.disabled = false;
    stop.disabled = true;
}

/**
 * Once clicked the function will create 2 input with a submit button
 */

function setTimer () {
    let setTimerInputHTML = `
        <label for="setMinutes" min='0' >Minutes</label>
        <input id="setMinutes" type="number" required>
        <label for="setSeconds" required>Seconds</label>
        <input id="setSeconds" type="number" min='0' max='59' required>
        <input type='submit'></submit>
        `;
    
    let setTimerInput = document.createElement("form");
    setTimerInput.id = 'submit-time';
    setTimerInput.innerHTML = setTimerInputHTML;
    document.getElementById('control-time').appendChild(setTimerInput);
    let subtmitTime = document.getElementById('submit-time');
    subtmitTime.addEventListener("submit", updateTime);
    setTimerBtn.disabled = true;
}

function updateTime(event) {  
    var newMins = document.getElementById('setMinutes');
    var newScds = document.getElementById('setSeconds');
    minutesNode.innerHTML = String(newMins.value).padStart(2,'0');
    secondsNode.innerHTML = String(newScds.value).padStart(2,'0');
    document.getElementById('submit-time').remove();
    setTimerBtn.disabled = false;
    String(seconds).padStart(2, "0");
}


/**
 * The function is called by the increment/reduce functions to add or remove UpdateValue to the number
 */
function updateCounter(scoreDiv, updateValue) {
    let i = parseInt(scoreDiv.innerHTML);
    i = i + updateValue;
    scoreDiv.innerHTML = i;
}


function incrementScoreTeamOne() {
    updateCounter(goalOneNode, 1);
    reduceScoreOneBtnNode.disabled = false;
}

function reduceScoreTeamOne() {
    updateCounter(goalOneNode, -1);
    if (parseInt(goalOneNode.innerText) === 0)
    reduceScoreOneBtnNode.disabled = true;
}

function incrementPeriod() {
    updateCounter(periodNode, 1);
    reducePeriodBtnNode.disabled = false;

    if (parseInt(periodNode.innerText) === 1) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 2) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 3) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 4) {
        minutesNode.innerHTML = '05';
        secondsNode.innerHTML = '00';
    }
}

function reducePeriod() {
    updateCounter(periodNode, -1);

    if (parseInt(periodNode.innerText) === 0) {
    reducePeriodBtnNode.disabled = true;
    minutesNode.innerHTML = '05';
    secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 1) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 2) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 3) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (parseInt(periodNode.innerText) === 4) {
        minutesNode.innerHTML = 10;
        secondsNode.innerHTML = '00';
    }

}

function incrementScoreTeamTwo() {
    updateCounter(goalTwoNode, 1);
    reduceScoreTwoBtnNode.disabled = false;
}

function reduceScoreTeamTwo() {
    updateCounter(goalTwoNode, -1);
    if (parseInt(goalTwoNode.innerText) === 0)
    reduceScoreTwoBtnNode.disabled = true;
}

function incrementShotTeamOne() {
    updateCounter(shotOneNode, 1);
    reduceShotOneBtnNode.disabled = false;
}

function reduceShotTeamOne() {
    updateCounter(shotOneNode, -1);
    if (parseInt(shotOneNode.innerText) === 0)
    reduceShotOneBtnNode.disabled = true;
}

function incrementShotTeamTwo() {
    updateCounter(shotTwoNode, 1);
    reduceShotTwoBtnNode.disabled = false;
}

function reduceShotTeamTwo() {
    updateCounter(shotTwoNode, -1);
    if (parseInt(shotTwoNode.innerText) === 0)
    reduceShotTwoBtnNode.disabled = true;
}

 /* Set rooster functions*/
/* Team 1*/

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
        `;
    
    let setRoosterOneInput = document.createElement("form");
    setRoosterOneInput.id = 'submit-team-one';
    setRoosterOneInput.innerHTML = setRoosterOneInputHTML;
    document.getElementById('rooster-setting-team-1').appendChild(setRoosterOneInput);

    let subtmitRoosterOne = document.getElementById('submit-team-one');
    subtmitRoosterOne.addEventListener("submit", updateRoosterOne);
    roosterSettingOne.disabled = true;
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
    `;
    setRoosterOneList.innerHTML = setRoosterOneListHTML;
    document.getElementById('rooster-details-team-1').appendChild(setRoosterOneList);
    document.getElementById('submit-team-one').remove();
    roosterSettingOne.disabled = false;
}

/* Team 2*/

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
        `;
    
    let setRoosterTwoInput = document.createElement("form");
    setRoosterTwoInput.id = 'submit-team-two';
    setRoosterTwoInput.innerHTML = setRoosterTwoInputHTML;
    document.getElementById('rooster-setting-team-2').appendChild(setRoosterTwoInput);

    let subtmitRoosterTwo = document.getElementById('submit-team-two');
    subtmitRoosterTwo.addEventListener("submit", updateRoosterTwo);
    roosterSettingTwo.disabled = true;

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
    `;
    setRoosterTwoList.innerHTML = setRoosterTwoListHTML;
    document.getElementById('rooster-details-team-2').appendChild(setRoosterTwoList);

    document.getElementById('submit-team-two').remove();

    roosterSettingTwo.disabled = false;
}

