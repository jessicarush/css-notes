function randomBg() {

  // Generate a random number between 0 and given number (inclusive)
  function random(n) {
    return Math.floor(Math.random() * (n + 1));
  }

  // Generate a random rgb color
  function randomRGB() {
    let rgbColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rgbColor;
  }

  // Set an elements --random-bg property to a random color
  function changeBg(selector) {
    let els = document.querySelectorAll(selector);
    for (let el of els) {
      el.style.setProperty('--random-bg', randomRGB());
    }
  }
  changeBg('.color-box');
}

randomBg();
