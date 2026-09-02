// Answer the question: 1 ---->

function describeValue(value){
    let valueType = typeof(value);
    let checkBoolean = Boolean(value);
    if(value === "0"){
        checkBoolean = false;
    }

    if(checkBoolean == true){
        checkBoolean = "truthy";
    }
    else{
        checkBoolean = "falsy";
    }

    return `${valueType} | ${checkBoolean}`;
}

// Answer the question no: 2 ---->

function getDayType(day){
    day = day.toLowerCase();
    switch(day){
        case "friday":
            return "Weekend"
        break;

        case "saturday":
            return "Weekend"
        break;

        case "sunday":
            return "Working Day"
        break;
        case "monday":
            return "Working Day"
        break;
        case "tuesday":
            return "Working Day"
        break;
        case "wednesday":
            return "Working Day"
        break;
        case "thursday":
            return "Working Day"
        break;
        
        default: 
        return "Invalid Day";      
}}

//  Answer the question no: 3 ---->

function validateUsername(username){
    username = username.toLowerCase();
    if(username.length < 4){
        return "Too Short";
    }
    else if(username.includes(" ")){
        return "No Space Allowed";
    }
    else if(username.includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}


// Answer the question no: 4 ---->

function getCngFare(distance, isNight = false, waitingMinutes = 0){
    let fare = 50;
    let waitingMin = waitingMinutes * 2;
    let fareIn2Km = fare + waitingMin
    let totalFare = (distance - 2)* 15 + fare + waitingMin;

    if(distance <=2 && isNight === true){
        return fareIn2Km + fareIn2Km*0.2;
    }
    else if(distance > 2 && isNight === true){
        return totalFare + totalFare*0.2;
    }
    else if(distance > 2){
        return totalFare;
    }
    else{
        return fareIn2Km;
    }
}

// Answer the question no: 5 ---->

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;
    requiredRate = (runsNeeded / ballsLeft) * 6
    if(runsNeeded === 0){
        return "Won";
    }
    else if(ballsLeft === 0){
        return "Lost";
    }
    else if(requiredRate <= 6){
        requiredRate = "Comfortable";
    }
    else if(requiredRate > 6 && requiredRate <= 12){
        requiredRate = "Tough";
    }
    else{
        requiredRate = "Almost Impossible";
    }
    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${requiredRate}`;
}