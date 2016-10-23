var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winScore = 5;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score++;
        console.log(p1Score, winScore);
        if (p1Score === winScore) {
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});
p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score++;
        if (p2Score === winScore) {
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
});
resetButton.addEventListener("click", function () {
    reset();
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

numInput.addEventListener("change", function () {
    winningScoreDisplay.textContent = this.value;
    winScore = Number(this.value);
    reset();
});