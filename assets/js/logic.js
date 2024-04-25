const darkModeBtn = document.querySelector('.light-dark');
const page = document.querySelector('.page');

let mode = 'light';
function changeDisplay() {
    if (mode === 'dark') {
        mode = 'light';
        page.setAttribute('id', 'light');
      } else {
        mode = 'dark';
        page.setAttribute('id', 'dark');
      }
}

darkModeBtn.addEventListener('click', changeDisplay);