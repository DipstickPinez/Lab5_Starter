// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;

  const voiceSelect = document.querySelector("select");
  const voiceImage = document.querySelector("img");
  const textToSpeakArea = document.querySelector("#text-to-speak");
  const playButton = document.querySelector("button");

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const voiceOption = document.createElement("option");
      voiceOption.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        voiceOption.textContent += " — DEFAULT";
      }

      voiceOption.setAttribute("data-lang", voices[i].lang);
      voiceOption.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(voiceOption);
    }
    console.log("Voice list populated.");
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.addEventListener("click", (event) => {
    const utterThis = new SpeechSynthesisUtterance(textToSpeakArea.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    console.log("Selected Option: " + selectedOption);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = function () {
      voiceImage.src = "assets/images/smiling-open.png";
    }

    utterThis.onend = function () {
      voiceImage.src = "assets/images/smiling.png";
    }

    synth.speak(utterThis);
    console.log("Uttering: " + textToSpeakArea.value);
  });

}