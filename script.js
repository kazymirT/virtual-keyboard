class ElementCreator {
  constructor(tag, classes) {
    this.element = document.createElement(tag);
    this.addClasses(classes);
  }

  addClasses(classes) {
    if (!classes) return;
    classes.split(' ').forEach((className) => {
      this.element.classList.add(className);
    });
  }

  addAttributes(attributes) {
    if (!attributes) return;
    attributes.forEach(({ name, value }) => {
      this.element.setAttribute(name, value);
    });
  }

  appendTo(parent) {
    parent.append(this.element);
  }

  sizeButton(sizeButton) {
    this.element.style.width = `${50 * sizeButton}px`;
  }
}
const page = document.body;
page.classList.add('body');

const [wrapper, header, main, sectionOutput, textarea, sectionKey, footer] = [
  new ElementCreator('div', 'wrapper'),
  new ElementCreator('header', 'header'),
  new ElementCreator('main', 'main'),
  new ElementCreator('section', 'section-output'),
  new ElementCreator('textarea', 'textarea'),
  new ElementCreator('section', 'section-key'),
  new ElementCreator('footer', 'footer'),
];

header.element.innerHTML = '<h1 class="header__title">RSS Віртуальна клавіатура</h1>';

textarea.element.setAttribute('autofocus', true);
textarea.element.setAttribute('placeholder', 'Уведіть ваш текст...');
textarea.element.addEventListener('blur', () => {
  textarea.element.focus();
});
textarea.appendTo(sectionOutput.element);
sectionOutput.appendTo(main.element);
sectionKey.appendTo(main.element);
header.appendTo(wrapper.element);
main.appendTo(wrapper.element);

footer.element.innerHTML = '<p class="footer__text"> Клавіатура створена в операційній системі Windows. Для перемикання мови комбінація: ліві shift + alt</p>';
footer.appendTo(wrapper.element);

wrapper.appendTo(page);

const keysOne = [
  {
    eventKeyEng: '`', eventKeyEngCaps: '`', eventKeyUaCaps: "'", eventKeyUa: "'", eventShiftKeyEng: '~', eventShiftKeyUa: '₴', eventCode: 'Backquote', size: '0.8',
  },
  {
    eventKeyEng: '1', eventKeyEngCaps: '1', eventKeyUaCaps: '1', eventKeyUa: '1', eventShiftKeyEng: '!', eventShiftKeyUa: '!', eventCode: 'Digit1', size: '1',
  },
  {
    eventKeyEng: '2', eventKeyEngCaps: '2', eventKeyUaCaps: '2', eventKeyUa: '2', eventShiftKeyEng: '@', eventShiftKeyUa: '"', eventCode: 'Digit2', size: '1',
  },
  {
    eventKeyEng: '3', eventKeyEngCaps: '3', eventKeyUaCaps: '3', eventKeyUa: '3', eventShiftKeyEng: '#', eventShiftKeyUa: '№', eventCode: 'Digit3', size: '1',
  },
  {
    eventKeyEng: '4', eventKeyEngCaps: '4', eventKeyUaCaps: '4', eventKeyUa: '4', eventShiftKeyEng: '$', eventShiftKeyUa: ';', eventCode: 'Digit4', size: '1',
  },
  {
    eventKeyEng: '5', eventKeyEngCaps: '5', eventKeyUaCaps: '5', eventKeyUa: '5', eventShiftKeyEng: '%', eventShiftKeyUa: '%', eventCode: 'Digit5', size: '1',
  },
  {
    eventKeyEng: '6', eventKeyEngCaps: '6', eventKeyUaCaps: '6', eventKeyUa: '6', eventShiftKeyEng: '^', eventShiftKeyUa: ':', eventCode: 'Digit6', size: '1',
  },
  {
    eventKeyEng: '7', eventKeyEngCaps: '7', eventKeyUaCaps: '7', eventKeyUa: '7', eventShiftKeyEng: '&', eventShiftKeyUa: '?', eventCode: 'Digit7', size: '1',
  },
  {
    eventKeyEng: '8', eventKeyEngCaps: '8', eventKeyUaCaps: '8', eventKeyUa: '8', eventShiftKeyEng: '*', eventShiftKeyUa: '*', eventCode: 'Digit8', size: '1',
  },
  {
    eventKeyEng: '9', eventKeyEngCaps: '9', eventKeyUaCaps: '9', eventKeyUa: '9', eventShiftKeyEng: '(', eventShiftKeyUa: '(', eventCode: 'Digit9', size: '1',
  },
  {
    eventKeyEng: '0', eventKeyEngCaps: '0', eventKeyUaCaps: '0', eventKeyUa: '0', eventShiftKeyEng: ')', eventShiftKeyUa: ')', eventCode: 'Digit0', size: '1',
  },
  {
    eventKeyEng: '-', eventKeyEngCaps: '-', eventKeyUaCaps: '-', eventKeyUa: '-', eventShiftKeyEng: '_', eventShiftKeyUa: '_', eventCode: 'Minus', size: '1',
  },
  {
    eventKeyEng: '=', eventKeyEngCaps: '=', eventKeyUaCaps: '=', eventKeyUa: '=', eventShiftKeyEng: '+', eventShiftKeyUa: '+', eventCode: 'Equal', size: '1',
  },
  {
    eventKeyEng: 'Backspace', eventKeyEngCaps: 'Backspace', eventKeyUaCaps: 'Backspace', eventKeyUa: 'Backspace', eventShiftKeyEng: 'Backspace', eventShiftKeyUa: 'Backspace', eventCode: 'Backspace', size: '2', class: 'btn__fun',
  },
];
const keysTwo = [
  {
    eventKeyEng: 'Tab', eventKeyEngCaps: 'Tab', eventKeyUaCaps: 'Tab', eventKeyUa: 'Tab', eventShiftKeyEng: 'Tab', eventShiftKeyUa: 'Tab', eventCode: 'Tab', size: '1.4', class: 'btn__fun',
  },
  {
    eventKeyEng: 'q', eventKeyEngCaps: 'Q', eventKeyUaCaps: 'Й', eventKeyUa: 'й', eventShiftKeyEng: 'Q', eventShiftKeyUa: 'Й', eventCode: 'KeyQ', size: '1',
  },
  {
    eventKeyEng: 'w', eventKeyEngCaps: 'W', eventKeyUaCaps: 'Ц', eventKeyUa: 'ц', eventShiftKeyEng: 'W', eventShiftKeyUa: 'Ц', eventCode: 'KeyW', size: '1',
  },
  {
    eventKeyEng: 'e', eventKeyEngCaps: 'E', eventKeyUaCaps: 'У', eventKeyUa: 'у', eventShiftKeyEng: 'E', eventShiftKeyUa: 'У', eventCode: 'KeyE', size: '1',
  },
  {
    eventKeyEng: 'r', eventKeyEngCaps: 'R', eventKeyUaCaps: 'К', eventKeyUa: 'к', eventShiftKeyEng: 'R', eventShiftKeyUa: 'К', eventCode: 'KeyR', size: '1',
  },
  {
    eventKeyEng: 't', eventKeyEngCaps: 'T', eventKeyUaCaps: 'Е', eventKeyUa: 'е', eventShiftKeyEng: 'T', eventShiftKeyUa: 'Е', eventCode: 'KeyT', size: '1',
  },
  {
    eventKeyEng: 'y', eventKeyEngCaps: 'Y', eventKeyUaCaps: 'Н', eventKeyUa: 'н', eventShiftKeyEng: 'Y', eventShiftKeyUa: 'Н', eventCode: 'KeyY', size: '1',
  },
  {
    eventKeyEng: 'u', eventKeyEngCaps: 'U', eventKeyUaCaps: 'Г', eventKeyUa: 'г', eventShiftKeyEng: 'U', eventShiftKeyUa: 'Г', eventCode: 'KeyU', size: '1',
  },
  {
    eventKeyEng: 'i', eventKeyEngCaps: 'I', eventKeyUaCaps: 'Ш', eventKeyUa: 'ш', eventShiftKeyEng: 'I', eventShiftKeyUa: 'Ш', eventCode: 'KeyI', size: '1',
  },
  {
    eventKeyEng: 'o', eventKeyEngCaps: 'O', eventKeyUaCaps: 'Щ', eventKeyUa: 'щ', eventShiftKeyEng: 'O', eventShiftKeyUa: 'Щ', eventCode: 'KeyO', size: '1',
  },
  {
    eventKeyEng: 'p', eventKeyEngCaps: 'P', eventKeyUaCaps: 'З', eventKeyUa: 'з', eventShiftKeyEng: 'P', eventShiftKeyUa: 'З', eventCode: 'KeyP', size: '1',
  },
  {
    eventKeyEng: '[', eventKeyEngCaps: '[', eventKeyUaCaps: 'Х', eventKeyUa: 'х', eventShiftKeyEng: '{', eventShiftKeyUa: 'Х', eventCode: 'BracketLeft', size: '1',
  },
  {
    eventKeyEng: ']', eventKeyEngCaps: ']', eventKeyUaCaps: 'Ї', eventKeyUa: 'ї', eventShiftKeyEng: '}', eventShiftKeyUa: 'Х', eventCode: 'BracketRight', size: '1',
  },
  {
    eventKeyEng: '\\', eventKeyEngCaps: '\\', eventKeyUaCaps: '\\', eventKeyUa: '\\', eventShiftKeyEng: '|', eventShiftKeyUa: '/', eventCode: 'Backslash', size: '1.4', class: 'btn__fun',
  },
];
const keysThree = [
  {
    eventKeyEng: 'Caps Lock', eventKeyUa: 'Caps Lock', eventShiftKeyEng: 'Caps Lock', eventShiftKeyUa: 'Caps Lock', eventKeyUaCaps: 'Caps Lock', eventKeyEngCaps: 'Caps Lock', eventCode: 'CapsLock', size: '1.85', class: 'btn__fun',
  },
  {
    eventKeyEng: 'a', eventKeyUa: 'ф', eventShiftKeyEng: 'A', eventShiftKeyUa: 'Ф', eventKeyEngCaps: 'A', eventKeyUaCaps: 'Ф', eventCode: 'KeyA', size: '1',
  },
  {
    eventKeyEng: 's', eventKeyUa: 'і', eventShiftKeyEng: 'S', eventShiftKeyUa: 'І', eventKeyEngCaps: 'S', eventKeyUaCaps: 'І', eventCode: 'KeyS', size: '1',
  },
  {
    eventKeyEng: 'd', eventKeyUa: 'в', eventShiftKeyEng: 'D', eventShiftKeyUa: 'В', eventKeyEngCaps: 'D', eventKeyUaCaps: 'В', eventCode: 'KeyD', size: '1',
  },
  {
    eventKeyEng: 'f', eventKeyUa: 'а', eventShiftKeyEng: 'F', eventShiftKeyUa: 'А', eventKeyEngCaps: 'F', eventKeyUaCaps: 'А', eventCode: 'KeyF', size: '1',
  },
  {
    eventKeyEng: 'g', eventKeyUa: 'п', eventShiftKeyEng: 'G', eventShiftKeyUa: 'П', eventKeyEngCaps: 'G', eventKeyUaCaps: 'П', eventCode: 'KeyG', size: '1',
  },
  {
    eventKeyEng: 'h', eventKeyUa: 'р', eventShiftKeyEng: 'H', eventShiftKeyUa: 'Р', eventKeyEngCaps: 'H', eventKeyUaCaps: 'Р', eventCode: 'KeyH', size: '1',
  },
  {
    eventKeyEng: 'j', eventKeyUa: 'о', eventShiftKeyEng: 'J', eventShiftKeyUa: 'О', eventKeyEngCaps: 'J', eventKeyUaCaps: 'О', eventCode: 'KeyJ', size: '1',
  },
  {
    eventKeyEng: 'k', eventKeyUa: 'л', eventShiftKeyEng: 'K', eventShiftKeyUa: 'Л', eventKeyEngCaps: 'K', eventKeyUaCaps: 'Л', eventCode: 'KeyK', size: '1',
  },
  {
    eventKeyEng: 'l', eventKeyUa: 'д', eventShiftKeyEng: 'L', eventShiftKeyUa: 'Д', eventKeyEngCaps: 'L', eventKeyUaCaps: 'Д', eventCode: 'KeyL', size: '1',
  },
  {
    eventKeyEng: ';', eventKeyUa: 'ж', eventShiftKeyEng: ':', eventShiftKeyUa: 'Ж', eventKeyEngCaps: ';', eventKeyUaCaps: 'Ж', eventCode: 'Semicolon', size: '1',
  },
  {
    eventKeyEng: "'", eventKeyUa: 'є', eventShiftKeyEng: '"', eventShiftKeyUa: 'Є', eventKeyEngCaps: "'", eventKeyUaCaps: 'Є', eventCode: 'Quote', size: '1',
  },
  {
    eventKeyEng: 'Enter', eventKeyUa: 'Enter', eventShiftKeyEng: 'Enter', eventShiftKeyUa: 'Enter', eventKeyEngCaps: 'Enter', eventKeyUaCaps: 'Enter', eventCode: 'Enter', size: '2', class: 'btn__fun',
  },
];
const keysFour = [
  {
    eventKeyEng: 'Shift', eventKeyUa: 'Shift', eventShiftKeyEng: 'Shift', eventShiftKeyUa: 'Shift', eventKeyEngCaps: 'Shift', eventKeyUaCaps: 'Shift', eventCode: 'ShiftLeft', size: '1.85', class: 'btn__fun',
  },
  {
    eventKeyEng: 'z', eventKeyUa: 'я', eventShiftKeyEng: 'Z', eventShiftKeyUa: 'Я', eventKeyEngCaps: 'Z', eventKeyUaCaps: 'Я', eventCode: 'KeyZ', size: '1',
  },
  {
    eventKeyEng: 'x', eventKeyUa: 'ч', eventShiftKeyEng: 'X', eventShiftKeyUa: 'Ч', eventKeyEngCaps: 'X', eventKeyUaCaps: 'Ч', eventCode: 'KeyX', size: '1',
  },
  {
    eventKeyEng: 'c', eventKeyUa: 'с', eventShiftKeyEng: 'C', eventShiftKeyUa: 'С', eventKeyEngCaps: 'C', eventKeyUaCaps: 'С', eventCode: 'KeyC', size: '1',
  },
  {
    eventKeyEng: 'v', eventKeyUa: 'м', eventShiftKeyEng: 'V', eventShiftKeyUa: 'М', eventKeyEngCaps: 'V', eventKeyUaCaps: 'М', eventCode: 'KeyV', size: '1',
  },
  {
    eventKeyEng: 'b', eventKeyUa: 'и', eventShiftKeyEng: 'B', eventShiftKeyUa: 'И', eventKeyEngCaps: 'B', eventKeyUaCaps: 'И', eventCode: 'KeyB', size: '1',
  },
  {
    eventKeyEng: 'n', eventKeyUa: 'т', eventShiftKeyEng: 'N', eventShiftKeyUa: 'Т', eventKeyEngCaps: 'N', eventKeyUaCaps: 'Т', eventCode: 'KeyN', size: '1',
  },
  {
    eventKeyEng: 'm', eventKeyUa: 'ь', eventShiftKeyEng: 'M', eventShiftKeyUa: 'Ь', eventKeyEngCaps: 'M', eventKeyUaCaps: 'Ь', eventCode: 'KeyM', size: '1',
  },
  {
    eventKeyEng: ',', eventKeyUa: 'б', eventShiftKeyEng: '<', eventShiftKeyUa: 'Б', eventKeyEngCaps: ',', eventKeyUaCaps: 'Б', eventCode: 'Comma', size: '1',
  },
  {
    eventKeyEng: '.', eventKeyUa: 'ю', eventShiftKeyEng: '>', eventShiftKeyUa: 'Ю', eventKeyEngCaps: '.', eventKeyUaCaps: 'Ю', eventCode: 'Period', size: '1',
  },
  {
    eventKeyEng: '/', eventKeyUa: '.', eventShiftKeyEng: '?', eventShiftKeyUa: ',', eventKeyEngCaps: '/', eventKeyUaCaps: '.', eventCode: 'Slash', size: '1',
  },
  {
    eventKeyEng: '▲', eventKeyUa: '▲', eventShiftKeyEng: '▲', eventShiftKeyUa: '▲', eventKeyEngCaps: '▲', eventKeyUaCaps: '▲', eventCode: 'ArrowUp', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: 'Shift', eventKeyUa: 'Shift', eventShiftKeyEng: 'Shift', eventShiftKeyUa: 'Shift', eventKeyEngCaps: 'Shift', eventKeyUaCaps: 'Shift', eventCode: 'ShiftRight', size: '2.05', class: 'btn__fun',
  },
];
const keysFive = [
  {
    eventKeyEng: 'Ctrl', eventKeyUa: 'Ctrl', eventShiftKeyEng: 'Ctrl', eventShiftKeyUa: 'Ctrl', eventKeyEngCaps: 'Ctrl', eventKeyUaCaps: 'Ctrl', eventCode: 'ControlLeft', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: 'Win', eventKeyUa: 'Win', eventShiftKeyEng: 'Win', eventShiftKeyUa: 'Win', eventKeyEngCaps: 'Win', eventKeyUaCaps: 'Win', eventCode: 'MetaLeft', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: 'Alt', eventKeyUa: 'Alt', eventShiftKeyEng: 'Alt', eventShiftKeyUa: 'Alt', eventKeyEngCaps: 'Alt', eventKeyUaCaps: 'Alt', eventCode: 'AltLeft', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: '_', eventKeyUa: '_', eventShiftKeyEng: '_', eventShiftKeyUa: '_', eventKeyEngCaps: '_', eventKeyUaCaps: '_', eventCode: 'Space', size: '7.15',
  },
  {
    eventKeyEng: 'Alt', eventKeyUa: 'Alt', eventShiftKeyEng: 'Alt', eventShiftKeyUa: 'Alt', eventKeyEngCaps: 'Alt', eventKeyUaCaps: 'Alt', eventCode: 'AltRight', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: '◄', eventKeyUa: '◄', eventShiftKeyEng: '◄', eventShiftKeyUa: '◄', eventKeyEngCaps: '◄', eventKeyUaCaps: '◄', eventCode: 'ArrowLeft', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: '▼', eventKeyUa: '▼', eventShiftKeyEng: '▼', eventShiftKeyUa: '▼', eventKeyEngCaps: '▼', eventKeyUaCaps: '▼', eventCode: 'ArrowDown', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: '►', eventKeyUa: '►', eventShiftKeyEng: '►', eventShiftKeyUa: '►', eventKeyEngCaps: '►', eventKeyUaCaps: '►', eventCode: 'ArrowRight', size: '1', class: 'btn__fun',
  },
  {
    eventKeyEng: 'Ctrl', eventKeyUa: 'Ctrl', eventShiftKeyEng: 'Ctrl', eventShiftKeyUa: 'Ctrl', eventKeyEngCaps: 'Ctrl', eventKeyUaCaps: 'Ctrl', eventCode: 'ControlRight', size: '1', class: 'btn__fun',
  },
];
const letters = [...keysOne, ...keysTwo, ...keysThree, ...keysFour, ...keysFive];
const sectionKeyT = document.querySelector('.section-key');
let capsLock = false;
let langPage = 'ua';

function createButton(lang) {
  sectionKeyT.innerHTML = ' ';
  letters.forEach((element) => {
    const button = new ElementCreator('button', 'btn');
    if (element.class) { button.addClasses(element.class); }
    button.addAttributes([
      { name: 'data-code', value: element.eventCode },
    ]);
    let buttonLabel;
    switch (lang) {
      case 'ua': buttonLabel = element.eventKeyUa; break;
      case 'ShiftUA': buttonLabel = element.eventShiftKeyUa; break;
      case 'eng': buttonLabel = element.eventKeyEng; break;
      case 'ShiftENG': buttonLabel = element.eventShiftKeyEng; break;
      case 'CapsENG': buttonLabel = element.eventKeyEngCaps; break;
      case 'CapsUA': buttonLabel = element.eventKeyUaCaps; break;
      // eslint-disable-next-line no-unused-expressions
      default: element.eventKeyUa;
    }
    langPage = (lang === 'eng' || lang === 'ShiftENG' || lang === 'CapsENG') ? 'eng' : 'ua';
    button.element.textContent = buttonLabel;
    button.sizeButton(element.size);

    button.appendTo(sectionKey.element);
  });
}
// Виводимо кнопки на клавіатуру
createButton(langPage);

// ДОДАЄ ЧИ ВИДАЛЯЄ КЛАС У BTN .btn__active
function buttonClick(btnCode, color) {
  const btns = Array.from(sectionKeyT.children);
  btns.forEach((i) => {
    if (i.dataset.code === btnCode) {
      if (color) {
        i.classList.add('btn__active');
      } else {
        i.classList.remove('btn__active');
      }
    }
  });
}
// Виводить у caps lock
function buttonCapsClick() {
  sectionKeyT.innerHTML = ' ';

  let arg;
  if (capsLock) {
    arg = (langPage === 'ua') ? 'ua' : 'eng';
  } else {
    arg = (langPage === 'ua') ? 'CapsUA' : 'CapsENG';
  }
  createButton(arg);
  if (!capsLock) {
    buttonClick('CapsLock', true);
  } else {
    buttonClick('CapsLock', false);
  }
  capsLock = !capsLock;
}
let isAltKeyPressed = false;
let isShiftKeyPressed = false;

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  if (e.code === 'CapsLock') {
    buttonCapsClick(e.code);
    return;
  }
  buttonClick(e.code, true);
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'CapsLock') return;
  buttonClick(e.code, false);
  isAltKeyPressed = false;
  isShiftKeyPressed = false;
});
// Відстежує натискання Shift+Alt
document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft' || event.code === 'AltRight') {
    isAltKeyPressed = true;
  }
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShiftKeyPressed = true;
  }

  if (isAltKeyPressed && isShiftKeyPressed) {
    let langChange = langPage === 'ua' ? 'eng' : 'ua';
    if (capsLock) {
      langChange = langChange === 'ua' ? 'CapsUA' : 'CapsENG';
    }
    createButton(langChange);
  }
});
