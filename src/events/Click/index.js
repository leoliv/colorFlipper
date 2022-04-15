import { colorChange } from '../Typecolor/index.js';
export function click() {
  let clicker = document.querySelector('.button');
  let nameBack = document.querySelector('.name-background');
  nameBack.innerHTML = '#F1f5f8';
  clicker.addEventListener('click', function () {
    let root = document.getElementById('root');
    let nameBack = document.querySelector('.name-background');
    let color = colorChange();
    if (color[0] !== '#') {
      root.style.backgroundColor = '';
      root.classList.remove(root.classList[0]);
      root.classList.add(color);
      nameBack.innerHTML = color;
    } else {
      root.classList.remove(root.classList[0]);
      root.style.backgroundColor = color;
      nameBack.innerHTML = color;
    }
  });
}
