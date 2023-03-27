// code your solution here
function saturdayFun (activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork (thingToDo = `go to the office`){
    return `This Monday, I will ${thingToDo}.`;
}
function wrapAdjective(specialSign ="*"){
    const specialMessage = function (alwaysThis = "special"){
        return `You are ${specialSign}${alwaysThis}${specialSign}!`;
    }
 return specialMessage;
}