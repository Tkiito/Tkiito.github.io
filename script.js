document.addEventListener("DOMContentLoaded", function () {
    // メトロノームの初期設定
    let bpm = 60;
    let count = 1;
    let maxCount = 4;
    let resetPressed = false;
    let running = false;
    let hihat = false;
    let metronomeLabel = document.getElementById("metronomeLabel");
    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");
    let countEntry = document.getElementById("countEntry");
    let updateCountButton = document.getElementById("updateCountButton");
    let bpmEntry = document.getElementById("bpmEntry");
    let updateBpmButton = document.getElementById("updateBpmButton");
    let hihatSwitch = document.getElementById("hihatSwitch");

    startButton.addEventListener("click", startMetronome);
    resetButton.addEventListener("click", resetMetronome);
    updateCountButton.addEventListener("click", updateCount);
    updateBpmButton.addEventListener("click", updateBpm);
    hihatSwitch.addEventListener("change", toggleHihat);

    function startMetronome() {
        running = true;
        if (resetPressed) {
            resetPressed = false;
            count = 1;
        } else if (count === maxCount) {
            count = 1;
            changeBackgroundColor();
        }
        metronomeLabel.textContent = count;
        playMetronomeSound();
        startButton.disabled = true;
        resetButton.disabled = false;
    }

    function resetMetronome() {
        running = false;
        count = 1;
        resetPressed = true;
        metronomeLabel.textContent = count;
        startButton.disabled = false;
        resetButton.disabled = true;
    }

    function updateCount() {
        maxCount = parseInt(countEntry.value);
    }

    function updateBpm() {
        bpm = parseInt(bpmEntry.value);
    }

    function playMetronomeSound() {
        if (count === 1) {
            // Play the first beat sound
        } else {
            // Play the other beat sound
        }
        if (hihat) {
            // Play hihat sound
        }
        setTimeout(function () {
            if (running) {
                playMetronomeSound();
            }
        }, (60 / bpm / 2) * 1000);
    }

    function changeBackgroundColor() {
        let rightFrame = document.querySelector(".right-frame");
        if (rightFrame.style.backgroundColor === "red") {
            rightFrame.style.backgroundColor = "green";
        } else {
            rightFrame.style.backgroundColor = "red";
        }
    }

    function toggleHihat() {
        hihat = hihatSwitch.checked;
    }
});
