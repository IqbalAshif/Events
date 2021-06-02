'use strict';
const selectBaloon = document.querySelector('p');
let baloonSize = 100;

const resizeBaloon = (evt) => {
  evt.preventDefault();
  console.log(evt);
  if (evt.key === 'ArrowUp') {
    console.log('up');
    baloonSize += 10;
    if (baloonSize > 600) {
      selectBaloon.innerHTML = '💥';
      document.removeEventListener('keydown', resizeBaloon);
    }
  } else if (evt.key === 'ArrowDown') {
    console.log('Down');
    baloonSize -= 10;
  }
  selectBaloon.style.fontSize = baloonSize + '%';
};
document.addEventListener('keydown', resizeBaloon);
