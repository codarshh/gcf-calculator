const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value) {
      display.value += value;
    }
  });
});

document.getElementById('equals').addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
});

document.getElementById('clear').addEventListener('click', () => {
  display.value = '';
});
