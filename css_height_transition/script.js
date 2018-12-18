function setHeight() {
  let el = document.querySelector('.is-hidden');
  let height = el.scrollHeight;
  console.log(el.scrollHeight, el.clientHeigh);
  console.log(el.scrollWidth, el.clientWidth);
  el.style.setProperty('--js-scrollHeight', (height * 1.7) + 'px');
}


function randomBg() {
  // Generate a random number between 0 and given number (inclusive)
  function random(n) {
    return Math.floor(Math.random() * (n + 1));
  }
  // Generate a random rgb color
  function randomRGB() {
    let rgbColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rgbColor;
  }
  // Set an elements --random-bg property to a random color
  function changeBg() {
    let el = document.querySelector('.color-box');
    el.style.setProperty('--random-bg', randomRGB());
  }
  changeBg();
}


setHeight();
randomBg();
