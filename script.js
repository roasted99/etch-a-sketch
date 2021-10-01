const container = document.querySelector('.container')
let boxNum = 16;
let box = '';

function draw(boxes) {
    for (let i = 0; i < boxes ** 2; i++) {
        let box = document.createElement('div')
        box.classList.add('square');
        box.style.backgroundColor = 'red'
        container.appendChild(box)
    }
    container.style.gridTemplateColumns = `repeat(${boxes}, auto)`;
    container.style.gridTemplateRows = `repeat(${boxes}, auto);`
}

draw(boxNum);

const reset = (resetBox) => {
    let button = document.getElementsByTagName(button)
    button.addEventListener('click', e => {
        
    })
}

const drawGrid = () => {
    let grids = document.querySelectorAll('.square');
    grids.forEach(grid => {
        grid.addEventListener('mouseover', e => {
            grid.style.backgroundColor = 'black'
        })
    })
}

