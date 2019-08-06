function setHeight() {
  let el = document.querySelector('.is-hidden');
  let height = el.scrollHeight;
  console.log(el.scrollHeight, el.clientHeigh);
  console.log(el.scrollWidth, el.clientWidth);
  el.style.setProperty('--js-scrollHeight', (height * 1.7) + 'px');
}


setHeight();
