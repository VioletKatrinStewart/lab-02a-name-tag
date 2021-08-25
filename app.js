//get element that holds nametag name
const newName = document.getElementById('new-name');
//console.log (newName)

//get the button
const button = document.getElementById('button');
//console.log (button)

//get the input
const inputName = document.getElementById('input-name');
//console.log (newName);

button.addEventListener('click', () => {
    //console.log ('button was clicked');
    const value = inputName.value;
    newName.textContent = value;
});



