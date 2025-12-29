const poemLines = [
  "In a world of noise, I seek the true,",
  "Not marks or medals — just deeper view.",
  "No envy burns where effort leads,",
  "I sow my path with honest deeds.",
  "",
  "A quiet realm, not wide but wise,",
  "Where real hearts dwell and falsehood dies.",
  "Each day I build, each step I climb,",
  "To sharpen soul, expand the mind.",
  "",
  "Dreaming, doing — never still,",
  "Learning not for praise, but will.",
  "I am Vamika Arya, a flame unshaken,",
  "By truth, by thought — forever awakened."
];

const poemElement = document.getElementById("poem");

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < poemLines.length) {
    const currentLine = poemLines[lineIndex];
    if (charIndex <= currentLine.length) {
      poemElement.innerHTML = poemElement.innerHTML.replace(/<span class="cursor">|<\/span>/g, '');
      poemElement.innerHTML += currentLine.charAt(charIndex);
      poemElement.innerHTML += '<span class="cursor">|</span>';
      charIndex++;
      setTimeout(typeLine, 40);
    } else {
      poemElement.innerHTML = poemElement.innerHTML.replace(/<span class="cursor">|<\/span>/g, '');
      poemElement.innerHTML += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  } else {
    // Remove cursor at end
    poemElement.innerHTML = poemElement.innerHTML.replace(/<span class="cursor">|<\/span>/g, '');
  }
}

typeLine();
