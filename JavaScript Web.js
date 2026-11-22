
/* =========================================
   VÁNOČNÍ WEB 2026
   JavaScript
========================================= */

// ODPOČET DO ŠTĚDRÉHO DNE

function updateCountdown() {

    const now = new Date();

    const christmas = new Date(2026, 11, 24, 0, 0, 0);

    const difference = christmas - now;

    const countdown = document.getElementById("countdown");

    if (!countdown) return;

    if (difference <= 0) {

        countdown.innerHTML = "🎄 Veselé Vánoce!";

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdown.innerHTML =
        days + " dní " +
        hours + " h " +
        minutes + " min " +
        seconds + " s";
}

updateCountdown();

setInterval(updateCountdown, 1000);


// VÁNOČNÍ ZPRÁVA

const messageButton = document.getElementById("messageButton");

const christmasMessage = document.getElementById("christmasMessage");

if (messageButton && christmasMessage) {

    messageButton.addEventListener("click", function () {

        christmasMessage.classList.toggle("hidden");

        if (christmasMessage.classList.contains("hidden")) {

            messageButton.innerHTML =
                "<span>🎄</span> Otevřít vánoční zprávu";

        } else {

            messageButton.innerHTML =
                "<span>❤️</span> Zavřít vánoční zprávu";

        }

    });

}
