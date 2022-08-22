// click function 

function choosenPlayer(element) {
    const numberOfLi = document.getElementById('player-list').children.length
    if (numberOfLi < 5) {
        const playerName = element.parentNode.children[0].innerText;
        const playerList = document.getElementById('player-list')
        const li = document.createElement('li');
        li.innerText = playerName;
        playerList.appendChild(li)
        const button = element;
        button.disabled = true
    }
    else {
        alert('You can\'t choose More than 5 players')
    }
    
    
}


document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost')

    const  numberOfLi = document.getElementById('player-list').children.length
    const playersExpense = perPlayerCost * numberOfLi;
    const totalPlayerCost = setElementById('players-cost', playersExpense)
    
})

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