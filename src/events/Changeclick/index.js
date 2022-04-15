export function Simple() {
  let simple = document.querySelector('.simple');
  let hex = document.querySelector('.hex');
  simple.addEventListener('click', function () {
    hex.style.color = '#1c1818';
    simple.style.color = '#41b7da';
    option = true;
  });
}

export function Hex() {
  let hex = document.querySelector('.hex');
  let simple = document.querySelector('.simple');
  hex.addEventListener('click', function () {
    simple.style.color = '#1c1818';
    hex.style.color = '#41b7da';
    option = false;
  });
}
export let option = true;
