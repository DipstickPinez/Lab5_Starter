// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.querySelector("#horn-select");
  const hornImage = document.querySelector("img");
  const hornAudio = document.querySelector(".hidden");
  const hornVolume = document.querySelector("#volume");
  const volumeImage = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  let confetti = 0;
  const jsConfetti = new JSConfetti()

  hornAudio.volume = 0.5;

  hornSelect.addEventListener("change", (event) => {
    console.log(event.target.value);

    const hornType = event.target.value;

    const baseImages = 'assets/images/';
    const extSvg = '.svg';

    const baseAudio = 'assets/audio/';
    const extMp3 = '.mp3';

    const imageAltEnd = ' selected';

    hornImage.src = baseImages + hornType + extSvg;
    hornImage.alt = hornType + imageAltEnd;

    hornAudio.src = baseAudio + hornType + extMp3;

    if (hornType == "party-horn") {
      confetti = 1;
      console.log("Confetti: ON");
    } else {
      confetti = 0;
      console.log("Confetti: OFF")
    }
  });

  hornVolume.addEventListener("input", (event) => {
    console.log(event.target.value);
    const volumeVal = event.target.value;

    let levelImage = '';

    hornAudio.volume = volumeVal * 0.01;

    const baseIcons = 'assets/icons/';
    const extSvg = '.svg';

    if (volumeVal == 0) {
      levelImage = 'volume-level-0';
      console.log('level-0');
    } else if (1 <= volumeVal && volumeVal < 33) {
      levelImage = 'volume-level-1';
      console.log('level-1');
    } else if (33 <= volumeVal && volumeVal < 67) {
      levelImage = 'volume-level-2';
      console.log('level-2');
    } else if (67 <= volumeVal) {
      levelImage = 'volume-level-3';
      console.log('level-3');
    }

    volumeImage.src = baseIcons + levelImage + extSvg;

  });

  playButton.addEventListener("click", (event) => {
    hornAudio.play()
    if (confetti) {
      jsConfetti.addConfetti();
    }
  });
}