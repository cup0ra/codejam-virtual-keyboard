/* eslint-disable no-restricted-globals */
/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-sequences */
/* eslint-disable no-undef */

const CODE = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const EN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const EN_CAPS = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const RUS = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];
const RUS_CAPS = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&uarr;', 'Shift',
  'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '&larr;', '&darr;', '&rarr;', 'Ctrl',
];

const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
document.body.append(wrapper);
const textarea = document.createElement('textarea');
textarea.readOnly = 'readonly';
textarea.maxlength = '500';
textarea.id = 'display';
wrapper.append(textarea);
const display = document.querySelector('#display');
const keyboards = document.createElement('div');
keyboards.className = 'keyboard';
keyboards.id = 'keyboard';
wrapper.append(keyboards);
const text = document.createElement('p');
text.innerText = 'Ctrl + Alt  смена языка   Del - очистить поле';
wrapper.append(text);


for (let i = 0, j = 0, n = 0, l = 0;
  i < 63, j < CODE.length, n < RUS.length, l < RUS_CAPS.length;
  i += 1, j += 1, n += 1, l += 1) {
  const keys = document.createElement('div');
  keys.classList.add('key');
  keys.id = 'key';
  keys.setAttribute('data-code', CODE[j]);
  keys.setAttribute('data-ru', RUS[n]);
  keys.setAttribute('data-ru-caps', RUS_CAPS[l]);
  keys.innerHTML = `<span class="print en" > ${RUS[n]} </span><span class="enCap hidden print">${RUS_CAPS[l]}</span>`;
  keyboards.append(keys);
}
keyboards.children[13].classList.add('backspace');
keyboards.children[14].classList.add('tab');
keyboards.children[28].classList.add('del');
keyboards.children[29].classList.add('CapsLock');
keyboards.children[41].classList.add('Enter');
keyboards.children[42].classList.add('ShiftLeft');
keyboards.children[53].classList.add('ArrowUp');
keyboards.children[54].classList.add('ShiftRight');
keyboards.children[55].classList.add('ControlLeft');
keyboards.children[56].classList.add('Meta');
keyboards.children[57].classList.add('AltLeft');
keyboards.children[58].classList.add('Space');
keyboards.children[59].classList.add('AltRight');
keyboards.children[63].classList.add('ControlRight');
keyboards.children[60].classList.add('ArrowLeft');
keyboards.children[61].classList.add('ArrowDown');
keyboards.children[62].classList.add('ArrowRight');

window.onload = function () {
  const s = localStorage.getItem('isEng');
  console.log(s);
  if (localStorage.length === 0) {
    return eng();
  } if (s === 1) {
    return rus();
  }
  return rus();
};
function eng() {
  const span = document.querySelectorAll('.print');
  span.innerText = '';
  const en = document.querySelectorAll('.en');
  const enCap = document.querySelectorAll('.enCap');
  for (let i = 0, j = 0, n = 0, l = 0;
    i < enCap.length, j < en.length, n < EN.length, l < EN_CAPS.length;
    i += 1, j += 1, n += 1, l += 1) {
    en[i].innerHTML = EN[i];
    enCap[i].innerHTML = EN_CAPS[i];
  }
  const body = document.querySelector('body');
  body.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.altKey && (event.ctrlKey || event.metaKey)) {
      rus();
      localStorage.clear();
      localStorage.setItem('isEng', '1');
    }
  });
}
function rus() {
  const span = document.querySelectorAll('.print');
  span.innerText = '';
  const en = document.querySelectorAll('.en');
  const enCap = document.querySelectorAll('.enCap');
  for (let i = 0, j = 0, n = 0, l = 0;
    i < enCap.length, j < en.length, n < RUS.length, l < RUS_CAPS.length;
    i += 1, j += 1, n += 1, l += 1) {
    en[i].innerHTML = RUS[i];
    enCap[i].innerHTML = RUS_CAPS[i];
  }
  const body = document.querySelector('body');
  body.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.altKey && (event.ctrlKey || event.metaKey)) {
      eng();
      localStorage.clear();
    }
  });
}
function caps() {
  const en = document.querySelectorAll('.en');
  for (let i = 0; i < en.length; i += 1) {
    if (!((i > 52) || (i === 42) || (i === 41) || (i === 29)
     || (i === 28) || (i === 13) || (i === 14))) {
      en[i].classList.toggle('key-style-upper');
    }
  }
}
function shift() {
  const en = document.querySelectorAll('.en');
  const enCap = document.querySelectorAll('.enCap');
  for (let i = 0, j = 0; i < en.length, j < enCap.length; i += 1, j += 1) {
    en[i].classList.toggle('hidden');
    enCap[i].classList.toggle('hidden');
  }
}
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
  playAudio();
  event.preventDefault();
  document.querySelector(`.key[data-code="${event.code}"]`).classList.add('active');
  printText();
  if (event.code === 'CapsLock') {
    document.querySelector(`.key[data-code="${event.code}"]`).classList.toggle('press');
    caps();
  }
  if (event.code === 'ShiftLeft') {
    if (event.repeat) return;
    shift();
  }
});

body.addEventListener('keyup', (event) => {
  document.querySelector(`.key[data-code="${event.code}"]`).classList.remove('active');

  if (event.code === 'ShiftLeft') {
    shift();
  }
});

document.querySelectorAll(' .key ').forEach((element) => {
  element.onmousedown = function (event) {
    playAudio();
    event.preventDefault();
    this.classList.toggle('press');
    const code = this.innerText;
    if (code === 'Shift') {
      shift();
    }
  };
});
document.querySelectorAll('.key ').forEach((element) => {
  element.onmouseup = function (event) {
    event.preventDefault();
    this.classList.toggle('press');
    const code = this.innerText;
    if (code === 'Shift') {
      shift();
    }
  };
});
document.querySelectorAll('.key ').forEach((element) => {
  element.onmouseout = function (event) {
    const code = this.innerText;
    if (!(code === 'CapsLock')) {
      event.target.classList.remove('press');
    }
  };
});
document.querySelectorAll('.key ').forEach((element) => {
  element.onclick = function (event) {
    const code = this.innerText;
    if (code === 'CapsLock') {
      if (event.repeat) return;
      caps();
      this.classList.toggle('press');
    } else if (code === 'Backspace') {
      const expression = document.getElementById('display').value;
      display.textContent = expression.substring(0, expression.length - 1);
    } else if (code === 'CapsLock' || code === 'Shift' || code === 'Alt' || code === 'Ctrl' || code === 'Win') {
      return false;
    } else if (code === 'Space') {
      display.textContent += ' ';
    } else if (code === 'Enter') {
      display.textContent += '\n';
    } else if (code === 'Del') {
      display.textContent = '';
    } else if (code === 'Tab') {
      event.preventDefault();
      display.textContent += '\t';
    } else {
      display.textContent += code;
    }
  };
});


function printText() {
  const m = document.querySelector(`.key[data-code="${event.code}"]`);
  if (event.code === 'Backspace') {
    const expression = document.getElementById('display').value;
    display.textContent = expression.substring(0, expression.length - 1);
  } else if (event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'ShiftRight' || event.code === 'MetaLeft') {
    return false;
  } else if (event.code === 'Space') {
    display.textContent += ' ';
  } else if (event.code === 'Enter') {
    display.textContent += '\n';
  } else if (event.code === 'Delete') {
    display.textContent = '';
  } else if (event.code === 'Tab') {
    event.preventDefault();
    display.textContent += '\t';
  } else {
    display.textContent += m.innerText;
  }
}
function playAudio() {
  const myAudio = new Audio();
  myAudio.src = 'assets/sound.mp3';
  myAudio.play();
}
