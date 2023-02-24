// Data to be at 0 and time to be at 10 mins when the page loads

// Move all HTML nodes at the top
let minutesNode = document.getElementById("minutes");
let secondsNode = document.getElementById("seconds");

document.addEventListener('DOMContentLoaded', function() {
    minutesNode.innerHTML = 5;
    secondsNode.innerHTML = '00';
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
let playBtnNode = document.getElementById('start-time');
playBtnNode.addEventListener('click', onPlayButtonClick);
let stop = document.getElementById('stop-time');
stop.addEventListener('click', stopTime);


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
}

function stopTime() {
    clearInterval(intervalRef);
    intervalRef = null;
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
    updateCounter(document.getElementById("goal-team-1"), 1)
}

function reduceScoreTeamOne() {
    updateCounter(document.getElementById("goal-team-1"), -1)
    // let i = parseInt(document.getElementById("goal-team-1").innerHTML);
    // if (i !== 0) {
    //     i--;
    // } else { 
    //     alert('Impossible!');
    // }
    // document.getElementById("goal-team-1").innerHTML = i;
}

function incrementPeriod() {
    let i = parseInt(document.getElementById("period-number").innerText);
    i++;
    document.getElementById("period-number").innerHTML = i;

    if (i==1) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 1!')
        document.getElementById("minutes").innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==2) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 2!')
        document.getElementById("minutes").innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==3) {
        /* Timmer = 10 mins*/
        alert('Beginning of Period 3!')
        document.getElementById("minutes").innerHTML = 10;
        secondsNode.innerHTML = '00';
    } else if (i==4) {
        /* Timmer = 5 mins*/
        alert('Beginning of Overtime!')
        document.getElementById("minutes").innerHTML = 5;
        secondsNode.innerHTML = '00';
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
    updateCounter(document.getElementById("goal-team-2"), 1);
}

function reduceScoreTeamTwo() {
    updateCounter(document.getElementById("goal-team-2"), -1);
    // let i = parseInt(document.getElementById("goal-team-2").innerHTML);
    // if (i !== 0) {
    //     i--;
    // } else { 
    //     alert('Impossible!');
    // }
    // document.getElementById("goal-team-2").innerHTML = i;
}

function incrementShotTeamOne() {
    updateCounter(document.getElementById("shot-team-1-number"), 1);
    // let i = parseInt(.innerHTML);
    // i++;
    // document.getElementById("shot-team-1-number").innerHTML = i;
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
    document.getElementById('rooster-setting-team-1').appendChild(setRoosterOneInput);

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

