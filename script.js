const container = document.querySelector('.container');
const button = document.querySelector('.reset');
let boxNum = 16;
//let box = '';

function draw(boxes) {
    for (let i = 0; i < boxes ** 2; i++) {
        let box = document.createElement('div')
        box.classList.add('square');
        container.appendChild(box);     
    } 
    container.style.gridTemplateColumns = `repeat(${boxes}, auto)`;
    container.style.gridTemplateRows = `repeat(${boxes}, auto)`
}
draw(boxNum)

button.addEventListener('click', () => {
    boxNum = prompt('Please enter grid size no more than 100', 16);
    container.innerHTML = '';
    draw(boxNum);
    color()
})

const color = () => {
const squares = document.querySelectorAll('.square');
squares.forEach((square => {
    square.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black'
    })
}))
}
color()