newGame(16);

let button = document.getElementById('resetButton');

button.addEventListener('click', function ( e ) {

    let hover = document.querySelectorAll('.square');

    for (let i = 0; i < hover.length; i++) {

          hover[i].style.background = 'white';
 
    }
    
    let amountOfDivs = prompt("Please enter new width (100 Max");

    while (amountOfDivs < 1 || amountOfDivs > 100 || Number.isInteger(amountOfDivs) || isNaN(amountOfDivs)) {
        amountOfDivs = prompt("Please enter new width (100 Max");
    }

    newGame(amountOfDivs);

});

function newGame(width) {

    let hover = document.querySelectorAll('.square');

    for (let i = 0; i < hover.length; i++) {

        hover[i].remove();

    }  

    for (let i = 0; i < width**2; i++) {

        const container = document.querySelector('#container');

        container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${width}, 1fr)`;

        const content = document.createElement('div');
        content.classList.add('square');
        content.id = 'square';
    
        container.appendChild(content);
    }

    let hover2 = document.querySelectorAll('.square');
    let rgbData = [];
    let r;
    let g;
    let b;
    

    for (let i = 0; i < hover2.length; i++) {

       
        hover2[i].addEventListener("mouseenter", function( e ) {

            

            if (!hover2[i].style.background) {
                r = random_rgba()[0];
                g = random_rgba()[1];
                b = random_rgba()[2];

                hover2[i].style.background = `rgba(${r}, ${g}, ${b}`;
                rgbData[i] = [r, g, b];
                
            }
            else {
                // TRIED TO MAKE THE OPTIONAL WITH DARKER BUT NO LUCK
                // let darkerR = r/10;
                // let darkerG = g/10;
                // let darkerB = b/10;

                // hover2[i].style.background = `rgba(${r - darkerR}, ${g - darkerG}, ${b - darkerB}`;

                // r = r - darkerR;
                // g = g - darkerG;
                // b = b - darkerB;
            }
            

        });
    
        

    }

}


function random_rgba() {

    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);

    return [r, g, b];

}
