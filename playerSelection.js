// Getting input value function 
function getInputValueById(getValue) {
    const getInputValue = document.getElementById(getValue);
    const valueString = getInputValue.value;
    const integerValue = parseFloat(valueString);
    return integerValue;
}

// Set Element 
function setElementById(elementId, value) {
    const grabElement = document.getElementById(elementId);
    const getInneText = grabElement.innerText = value;
    return getInneText;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost')
    const playersExpense = perPlayerCost *5
    const totalPlayerCost = setElementById('players-cost', playersExpense)
    
})
document.getElementById('total-expense-btn').addEventListener('click', function () {
    const managerCost = getInputValueById('manager-cost');
    
    const coachCost = getInputValueById('coach-cost');
    
    const totalTeamExpense = managerCost + coachCost;
    setElementById('total-expense', totalTeamExpense)
})