let yazi = 0;
let tura = 0;

let coins = document.querySelectorAll(".coin");
let flipButton = document.querySelector("#flip-button");
let resetButton = document.querySelector("#reset-button");

flipButton.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coins.forEach((coin, index) => {
        coin.style.animation = "none";
        if (i) {
            setTimeout(() => {
                coins[index].style.animation = "spin-tura 3s forwards";
            }, 100);
            tura++;
        } else {
            setTimeout(() => {
                coins[index].style.animation = "spin-yazi 3s forwards";
            }, 100);
            yazi++;
        }
    });
    setTimeout(updateStats, 3000);
    disableButton();
});

function updateStats() {
    document.querySelector("#Tura-count").textContent = `Tura: ${tura}`;
    document.querySelector("#Yazı-count").textContent = `Yazı: ${yazi}`;
}

function disableButton() {
    flipButton.disabled = true;
    setTimeout(() => {
        flipButton.disabled = false;
    }, 3000);
}

resetButton.addEventListener("click", () => {
    coins.forEach((coin, index) => {
        coin.style.animation = "none";
    });
    tura = 0;
    yazi = 0;
    updateStats();
});
