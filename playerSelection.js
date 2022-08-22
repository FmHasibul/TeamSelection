// Making Player list

function choosenPlayer(element) {
    const numberOfLi = document.getElementById('player-list').children.length
    if (numberOfLi < 5) {
        const playerName = element.parentNode.children[0].innerText;
        const playerList = document.getElementById('player-list')
        const li = document.createElement('li');
        li.innerText = playerName;
        playerList.appendChild(li)
        const buttonDisabled = element;
        buttonDisabled.disabled = true,
            buttonDisabled.style.backgroundColor = 'lightgray';
    }
    else {
        alert('You can\'t choose More than 5 players')
    }
    
    
}

// Per Player Cost 
document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost')

    if (perPlayerCost >= 0  ) {
        const numberOfLi = document.getElementById('player-list').children.length
        const playersExpense = perPlayerCost * numberOfLi;
        setElementById('players-cost', playersExpense)
    }
    else {
        alert('Input a valid Cost')
    }
    
})
// Calculate Total Cost 

document.getElementById('total-expense-btn').addEventListener('click', function () {
    
    const managerCost = getInputValueById('manager-cost');
    const coachCost = getInputValueById('coach-cost');
    if (managerCost >= 0 && coachCost >= 0) {
        const totalPlayerCost = parseFloat(document.getElementById('players-cost').innerText);
        const totalTeamExpense =totalPlayerCost + managerCost + coachCost;
        setElementById('total-expense', totalTeamExpense)
    }
    else {
        alert('Input a numaric Value, Please!!!')
    }
})