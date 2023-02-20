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

function startTime() {
    alert ('Function started');
    let minute = parseInt(document.getElementById('minutes').innerHTML);
    let second = parseInt(document.getElementById('seconds').innerHTML);
    let stop = document.getElementById('stop-time');
    console.log(minute, second, stop)

    while (second !== 0 || minute !== 0) {
        if (second == 0) {
            second = 59;
            minute--;
            document.getElementById('seconds').innerHTML = second;
            document.getElementById('minutes').innerHTML = minute;
        } else if (second > 0) {
            second--;
            document.getElementById('seconds').innerHTML = second;
        } else if (stop.addEventListener("click")) {
            break;
        }
        minute =
        alert("End of period!")
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
