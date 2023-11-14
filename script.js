const guessable_value = document.querySelector(".guessable_value");
const squares = document.querySelectorAll(".square");
const restart = document.querySelector(".restart");
let isWin = false;
const colors = [];


for (let i=0; i < 9; i++){
    colors.push(
        `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    );
}

squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];
    square.setAttribute("color", colors[i]);
});

const valueForGuess = colors[Math.floor(Math.random() * 9)];
guessable_value.textContent = valueForGuess;

squares.forEach((square) => {
    square.addEventListener("click", (event) => {
        const squareColor = event.target.getAttribute("color");

        if(!isWin) {
            if (squareColor === valueForGuess){
                squares.forEach((square) => {
                    square.style.backgroundColor = valueForGuess;
                });

                isWin = true;

                restart.style.display = "block";
            }else{
                square.style.backgroundColor = "#0C1722";
            }
        }else {
            return;
        }
    });
});

restart.addEventListener("click", () => {
    location.reload();
});