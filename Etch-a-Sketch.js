// target the container class
let gridContainer = document.querySelector('.container');

for (let i = 1 ; i <= 256 ; i++){
    let div = document.createElement('div');
gridContainer.appendChild(div);
div.classList.add('tile');
}

