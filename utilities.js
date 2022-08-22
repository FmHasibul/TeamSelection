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







