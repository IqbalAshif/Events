'use strict';
const divArray = [];

document.addEventListener('mousemove', (evt) => {
  console.log('mouse coordinates: ', evt.pageX, evt.pageY);

  const div = document.createElement('div');
  div.classList.add('trail');

  div.style.top = evt.pageY + 'px';
  div.style.left = evt.pageX + 'px';

  document.querySelector('body').appendChild(div);
  divArray.push(div);

  if (divArray.length > 20) {
    const removeThis = divArray.shift();
    document.querySelector('body').removeChild(removeThis);
  }
});
