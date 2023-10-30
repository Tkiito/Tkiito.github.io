document.addEventListener("DOMContentLoaded", function () {
    let maxCount = 4;
    let bpm = 80;
    let count = 1;
    let interval;
    let running = false;
    let metronomeLabel = document.getElementById("metronomeLabel");
    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");
    let countEntry = document.getElementById("countEntry");
    let bpmEntry = document.getElementById("bpmEntry");
    let controls = document.querySelector(".controls");

    // 音声ファイルの設定
    let tinSound = new Audio("Tin.wav");
    let taktSound = new Audio("Takt.wav");

    startButton.addEventListener("click", startMetronome);
    resetButton.addEventListener("click", resetMetronome);

    function startMetronome() {
        if (!running) {
            maxCount = parseInt(countEntry.value);
            bpm = parseInt(bpmEntry.value);
            running = true;
            startButton.disabled = true;
            resetButton.disabled = false;
            playMetronomeSound();
        }
    }

    function resetMetronome() {
        running = false;
        clearInterval(interval);
        startButton.disabled = false;
        resetButton.disabled = true;
        metronomeLabel.textContent = "1";
        let centerFrame = document.querySelector(".center-frame");
        centerFrame.style.backgroundColor = "yellowgreen";
        count = 1;
        controls.style.backgroundColor = "yellowgreen";
    }

    function playMetronomeSound() {
        interval = setInterval(function () {
            if (running) {
                metronomeLabel.textContent = count;
                if (count === 1) {
                    let centerFrame = document.querySelector(".center-frame");
                    centerFrame.style.backgroundColor = centerFrame.style.backgroundColor === "yellowgreen" ? "orange" : "yellowgreen";
                    controls.style.backgroundColor = controls.style.backgroundColor === "yellowgreen" ? "orange" : "yellowgreen";
                    tinSound.play(); // Tin.wav音声再生
                } else {
                    taktSound.play(); // Takt.wav音声再生
                }
                count++;
                if (count > maxCount) {
                    count = 1;
                }
            }
        }, (60 / bpm) * 1000);
    }
});
