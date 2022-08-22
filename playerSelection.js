// click function 

function choosenPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    const playerList = document.getElementById('player-list')
    const li = document.createElement('li');
    li.innerText = playerName
    console.log(li)
    playerList.appendChild(li)
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
    
    const totalTeamExpense = managerCost + coachCost;
    setElementById('total-expense', totalTeamExpense)
})