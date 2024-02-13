// INFO - game box is 960px x 960x
// number of boxes defined by PROMPT
// boxes are created by a Loop
// 

const body = document.querySelector('body');

let numberOfBoxes = 16;

const gameContainer = document.createElement('div');
gameContainer.classList.add('gameContainer');
body.appendChild(gameContainer);

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');

const blackPen = document.createElement('button');
blackPen.textContent = "Pen";
blackPen.addEventListener('click', () => {
    penEffect();
});
const sketchPen = document.createElement('button');
sketchPen.textContent = "Pencil";
sketchPen.addEventListener('click', () => {
    sketchEffect();
});
const rainbowPen = document.createElement('button');
rainbowPen.textContent = "Rainbow";
rainbowPen.addEventListener('click', () => {
    rainbowEffect();
});

const buttonsArr = [blackPen, sketchPen, rainbowPen];

buttonsArr.forEach(button => {
    button.classList.add('functionButton');
    buttonContainer.appendChild(button);
});

body.appendChild(buttonContainer);

for (i = 0; i < numberOfBoxes; i++) {
    const tileY = document.createElement('div');
    tileY.classList.add('tile');
    gameContainer.appendChild(tileY);
    for (j = 0; j < numberOfBoxes; j++) {
        const tileX = document.createElement('div');
        tileX.classList.add('tile');
        tileY.appendChild(tileX);
    }
};

const tileList = document.querySelectorAll('.tile')


function sketchEffect () {
    tileList.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            const currentBgColor = window.getComputedStyle(tile).backgroundColor;

            const rgbValues = currentBgColor.match(/\d+/g);
            let r = parseInt(rgbValues[0]);
            let g = parseInt(rgbValues[1]);
            let b = parseInt(rgbValues[2]);
            
            r = Math.floor(r * 0.8);
            g = Math.floor(g * 0.8);
            b = Math.floor(b * 0.8);
            
            tile.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

function penEffect () {
    tileList.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            tile.style.backgroundColor = 'black';
        })
    });
}

function rainbowEffect () {
    tileList.forEach(tile => {
        tile.addEventListener('mouseover', () => {
            
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);

            tile.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    });
}

sketchEffect();