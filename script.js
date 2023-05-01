const keysOne = [
  {
    eventGen: '`', eventShiftKeyEng: '~', eventShiftKeyUa: '₴', eventCode: 'Backquote', size: '0.8',
  },
  {
    eventGen: '1', eventShiftKeyEng: '!', eventShiftKeyUa: '!', eventCode: 'Digit1', size: '1',
  },
  {
    eventGen: '2', eventShiftKeyEng: '@', eventShiftKeyUa: '"', eventCode: 'Digit2', size: '1',
  },
  {
    eventGen: '3', eventShiftKeyEng: '#', eventShiftKeyUa: '№', eventCode: 'Digit3', size: '1',
  },
  {
    eventGen: '4', eventShiftKeyEng: '$', eventShiftKeyUa: ';', eventCode: 'Digit4', size: '1',
  },
  {
    eventGen: '5', eventShiftKeyEng: '%', eventShiftKeyUa: '%', eventCode: 'Digit5', size: '1',
  },
  {
    eventGen: '6', eventShiftKeyEng: '^', eventShiftKeyUa: ':', eventCode: 'Digit6', size: '1',
  },
  {
    eventGen: '7', eventShiftKeyEng: '&', eventShiftKeyUa: '?', eventCode: 'Digit7', size: '1',
  },
  {
    eventGen: '8', eventShiftKeyEng: '*', eventShiftKeyUa: '*', eventCode: 'Digit8', size: '1',
  },
  {
    eventGen: '9', eventShiftKeyEng: '(', eventShiftKeyUa: '(', eventCode: 'Digit9', size: '1',
  },
  {
    eventGen: '0', eventShiftKeyEng: ')', eventShiftKeyUa: ')', eventCode: 'Digit0', size: '1',
  },
  {
    eventGen: '-', eventShiftKeyEng: '_', eventShiftKeyUa: '_', eventCode: 'Minus', size: '1',
  },
  {
    eventGen: '=', eventShiftKeyEng: '+', eventShiftKeyUa: '+', eventCode: 'Equal', size: '1',
  },
  {
    eventGen: 'Backspace', eventCode: 'Backspace', size: '2', class: 'btn__fun',
  },
];
const keysTwo = [
  {
    eventGen: 'Tab', eventCode: 'Tab', size: '0.8', class: 'btn__fun',
  },
  {
    eventKeyEng: 'q', eventKeyUa: 'й', eventShiftKeyEng: 'Q', eventShiftKeyUa: 'Й', eventCode: 'KeyQ', size: '1',
  },
  {
    eventKeyEng: 'w', eventKeyUa: 'ц', eventShiftKeyEng: 'W', eventShiftKeyUa: 'Ц', eventCode: 'KeyW', size: '1',
  },
  {
    eventKeyEng: 'e', eventKeyUa: 'у', eventShiftKeyEng: 'E', eventShiftKeyUa: 'У', eventCode: 'KeyE', size: '1',
  },
  {
    eventKeyEng: 'r', eventKeyUa: 'к', eventShiftKeyEng: 'R', eventShiftKeyUa: 'К', eventCode: 'KeyR', size: '1',
  },
  {
    eventKeyEng: 't', eventKeyUa: 'е', eventShiftKeyEng: 'T', eventShiftKeyUa: 'Е', eventCode: 'KeyT', size: '1',
  },
  {
    eventKeyEng: 'y', eventKeyUa: 'н', eventShiftKeyEng: 'Y', eventShiftKeyUa: 'Н', eventCode: 'KeyY', size: '1',
  },
  {
    eventKeyEng: 'u', eventKeyUa: 'г', eventShiftKeyEng: 'U', eventShiftKeyUa: 'Г', eventCode: 'KeyU', size: '1',
  },
  {
    eventKeyEng: 'i', eventKeyUa: 'ш', eventShiftKeyEng: 'I', eventShiftKeyUa: 'Ш', eventCode: 'KeyI', size: '1',
  },
  {
    eventKeyEng: 'o', eventKeyUa: 'щ', eventShiftKeyEng: 'O', eventShiftKeyUa: 'Щ', eventCode: 'KeyO', size: '1',
  },
  {
    eventKeyEng: 'p', eventKeyUa: 'з', eventShiftKeyEng: 'P', eventShiftKeyUa: 'З', eventCode: 'KeyP', size: '1',
  },
  {
    eventGenEng: '[', eventKeyUa: 'х', eventShiftKeyEng: '{', eventShiftKeyUa: 'Х', eventCode: 'BracketLeft', size: '1',
  },
  {
    eventGenEng: ']', eventKeyUa: 'ї', eventShiftKeyEng: '}', eventShiftKeyUa: 'Ї', eventCode: 'BracketRight', size: '1',
  },
  {
    eventGen: '\\', eventGenEng: '|', eventGenUa: '/', eventShiftEng1: '|', eventShiftUa1: '/', eventCode: 'Backslash', size: '1',
  },
  {
    eventGen: 'Del', eventCode: 'Delete', size: '0.95', class: 'btn__fun',
  },
];
const keysThree = [
  {
    eventGen: 'Caps Lock', eventCode: 'CapsLock', size: '1.85', class: 'btn__fun',
  },
  {
    eventKeyEng: 'a', eventKeyUa: 'ф', eventShiftKeyEng: 'A', eventShiftKeyUa: 'Ф', eventCode: 'KeyA', size: '1',
  },
  {
    eventKeyEng: 's', eventKeyUa: 'і', eventShiftKeyEng: 'S', eventShiftKeyUa: 'І', eventCode: 'KeyS', size: '1',
  },
  {
    eventKeyEng: 'd', eventKeyUa: 'в', eventShiftKeyEng: 'D', eventShiftKeyUa: 'В', eventCode: 'KeyD', size: '1',
  },
  {
    eventKeyEng: 'f', eventKeyUa: 'а', eventShiftKeyEng: 'F', eventShiftKeyUa: 'А', eventCode: 'KeyF', size: '1',
  },
  {
    eventKeyEng: 'g', eventKeyUa: 'п', eventShiftKeyEng: 'G', eventShiftKeyUa: 'П', eventCode: 'KeyG', size: '1',
  },
  {
    eventKeyEng: 'h', eventKeyUa: 'р', eventShiftKeyEng: 'H', eventShiftKeyUa: 'Р', eventCode: 'KeyH', size: '1',
  },
  {
    eventKeyEng: 'j', eventKeyUa: 'о', eventShiftKeyEng: 'J', eventShiftKeyUa: 'О', eventCode: 'KeyJ', size: '1',
  },
  {
    eventKeyEng: 'k', eventKeyUa: 'л', eventShiftKeyEng: 'K', eventShiftKeyUa: 'Л', eventCode: 'KeyK', size: '1',
  },
  {
    eventKeyEng: 'l', eventKeyUa: 'д', eventShiftKeyEng: 'L', eventShiftKeyUa: 'Д', eventCode: 'KeyL', size: '1',
  },
  {
    eventGenEng: ';', eventKeyUa: 'ж', eventShiftKeyEng: ':', eventShiftKeyUa: 'Ж', eventCode: 'Semicolon', size: '1',
  },
  {
    eventGenEng: "'", eventKeyUa: 'є', eventShiftKeyEng: '"', eventShiftKeyUa: 'Є', eventCode: 'Quote', size: '1',
  },
  {
    eventGen: 'Enter', eventCode: 'Enter', size: '2', class: 'btn__fun',
  },
];
const keysFour = [
  {
    eventGen: 'Shift', eventCode: 'ShiftLeft', size: '1.85', class: 'btn__fun',
  },
  {
    eventKeyEng: 'z', eventKeyUa: 'я', eventShiftKeyEng: 'Z', eventShiftKeyUa: 'Я', eventCode: 'KeyZ', size: '1',
  },
  {
    eventKeyEng: 'x', eventKeyUa: 'ч', eventShiftKeyEng: 'X', eventShiftKeyUa: 'Ч', eventCode: 'KeyX', size: '1',
  },
  {
    eventKeyEng: 'c', eventKeyUa: 'с', eventShiftKeyEng: 'C', eventShiftKeyUa: 'С', eventCode: 'KeyC', size: '1',
  },
  {
    eventKeyEng: 'v', eventKeyUa: 'м', eventShiftKeyEng: 'V', eventShiftKeyUa: 'М', eventCode: 'KeyV', size: '1',
  },
  {
    eventKeyEng: 'b', eventKeyUa: 'и', eventShiftKeyEng: 'B', eventShiftKeyUa: 'И', eventCode: 'KeyB', size: '1',
  },
  {
    eventKeyEng: 'n', eventKeyUa: 'т', eventShiftKeyEng: 'N', eventShiftKeyUa: 'Т', eventCode: 'KeyN', size: '1',
  },
  {
    eventKeyEng: 'm', eventKeyUa: 'ь', eventShiftKeyEng: 'M', eventShiftKeyUa: 'Ь', eventCode: 'KeyM', size: '1',
  },
  {
    eventGenEng: ',', eventKeyUa: 'б', eventShiftKeyEng: '<', eventShiftKeyUa: 'Б', eventCode: 'Comma', size: '1',
  },
  {
    eventGenEng: '.', eventKeyUa: 'ю', eventShiftKeyEng: '>', eventShiftKeyUa: 'Ю', eventCode: 'Period', size: '1',
  },
  {
    eventGenEng: '/', eventKeyUa: '.', eventCapsUa: '.', eventShiftUa: ',', eventShiftKeyEng: '?', eventShiftKeyUa: ',', eventCode: 'Slash', size: '1',
  },
  {
    eventGen: '▲', eventCode: 'ArrowUp', size: '1', class: 'btn__fun',
  },
  {
    eventGen: 'Shift', eventCode: 'ShiftRight', size: '2.05', class: 'btn__fun',
  },
];
const keysFive = [
  {
    eventGen: 'Ctrl', eventCode: 'ControlLeft', size: '1', class: 'btn__fun',
  },
  {
    eventGen: 'Win', eventCode: 'MetaLeft', size: '1', class: 'btn__fun',
  },
  {
    eventGen: 'Alt', eventCode: 'AltLeft', size: '1', class: 'btn__fun',
  },
  {
    eventGenEng: 'ENG', eventGenUa: 'UA', eventCode: 'Space', size: '7.15',
  },
  {
    eventGen: 'Alt', eventCode: 'AltRight', size: '1', class: 'btn__fun',
  },
  {
    eventGen: '◄', eventCode: 'ArrowLeft', size: '1', class: 'btn__fun',
  },
  {
    eventGen: '▼', eventCode: 'ArrowDown', size: '1', class: 'btn__fun',
  },
  {
    eventGen: '►', eventCode: 'ArrowRight', size: '1', class: 'btn__fun',
  },
  {
    eventGen: 'Ctrl', eventCode: 'ControlRight', size: '1', class: 'btn__fun',
  },
];
const letters = [...keysOne, ...keysTwo, ...keysThree, ...keysFour, ...keysFive];
const page = document.body;

let [
  isCapsLockPressed, isCapsLockKeyDown, isAltKeyPressed, isShiftKeyPressed, langChangeClick,
  isShiftDown, isShiftClick, shiftAltOne, shiftAltTwo, capsLock,
] = [false];
let langPage = 'ua';
const [wrapper, header, main, sectionOutput, textarea, sectionKey, footer] = ['div', 'header', 'main', 'section', 'textarea', 'section', 'footer',
].map((tag) => document.createElement(tag));

page.classList.add('body');
wrapper.classList.add('wrapper');
header.classList.add('header');
main.classList.add('main');
sectionOutput.classList.add('section-output');
textarea.classList.add('textarea');
sectionKey.classList.add('section-key');
footer.classList.add('footer');

header.innerHTML = '<h1 class="header__title">RSS Virtual Keyboard</h1>';

textarea.setAttribute('autofocus', true);
textarea.setAttribute('placeholder', 'Enter your text...');
textarea.addEventListener('blur', () => {
  textarea.focus();
});
sectionOutput.append(textarea);

main.append(sectionOutput, sectionKey);
footer.innerHTML = '<p class="footer__text">The keyboard was created in the Windows operating system. To switch the language, use the combination: shift + alt</p>';
wrapper.append(header, main, footer);
page.append(wrapper);
const showButton = (btn, lang) => {
  sectionKey.innerHTML = ' ';
  let buttonLabel;
  const size = '50';
  localStorage.setItem('myLang', lang);

  switch (lang) {
    case 'ua': buttonLabel = 'eventKeyUa'; break;
    case 'ShiftUA': buttonLabel = 'eventShiftKeyUa'; break;
    case 'eng': buttonLabel = 'eventKeyEng'; break;
    case 'ShiftENG': buttonLabel = 'eventShiftKeyEng'; break;
    case 'CapsENG': buttonLabel = 'eventShiftKeyEng'; break;
    case 'CapsUA': buttonLabel = 'eventShiftKeyUa'; break;
    default: buttonLabel = 'eventKeyUa';
  }
  const gen = 'eventGen';
  const shiftUA = 'eventShiftUa';
  let capsGen = false;
  langPage = (lang === 'eng' || lang === 'ShiftENG' || lang === 'CapsENG') ? 'eng' : 'ua';
  capsGen = (langPage === 'ua') ? 'eventCapsUa' : false;
  const genLang = (langPage === 'ua') ? 'eventGenUa' : 'eventGenEng';
  const genShift = (langPage === 'ua') ? 'eventShiftKeyUa' : 'eventShiftKeyEng';
  const shift1 = (langPage === 'ua') ? 'eventShiftUa1' : 'eventShiftEng1';
  btn.forEach((e) => {
    const btnK = document.createElement('button');
    let x = (e[buttonLabel] || e[gen] || e[genLang]);
    if (isCapsLockPressed) {
      x = (e[gen] || e[capsGen] || e[genLang] || e[buttonLabel]);
    }
    if (isShiftKeyPressed) {
      if (!capsLock) {
        x = (e[shift1] || e[buttonLabel] || e[genLang]);
      } else {
        x = (e[shift1] || e[buttonLabel] || e[genLang] || e[gen]);
      }
    }
    if (isCapsLockPressed && isShiftKeyPressed) {
      x = (e[shiftUA] || e[buttonLabel] || e[genShift] || e[genLang] || e[gen] || e[capsGen]);
    }
    btnK.textContent = x;
    btnK.classList.add('btn__number');
    btnK.classList.add('btn');
    btnK.dataset.code = e.eventCode;
    if (e.class) {
      btnK.classList.add(e.class);
    }
    btnK.style.width = `${size * e.size}px`;
    sectionKey.append(btnK);
  });
};

class StartEvents {
  constructor(element) {
    this.btn = Array.from(element.children);
    this.cursorPosition = textarea.selectionStart;
  }

  buttonActive(btnCode, arg) {
    this.btn = Array.from(sectionKey.children);
    this.btn.forEach((i) => {
      if (i.dataset.code === btnCode) {
        if (arg) {
          i.classList.add('btn__active');
        } else {
          i.classList.remove('btn__active');
        }
      }
    });
  }

  showBtnOfPage(btnCode) {
    this.cursorPosition = textarea.selectionStart;
    this.btn.forEach((i) => {
      if (i.dataset.code === btnCode) {
        const text = textarea.value;
        const before = text.substring(0, this.cursorPosition);
        const after = text.substring(this.cursorPosition);
        textarea.value = `${before}${i.textContent}${after}`;
        textarea.selectionStart = this.cursorPosition + 1;
        textarea.selectionEnd = this.cursorPosition + 1;
      }
    });
  }

  eventSpace(arg) {
    this.cursorPosition = textarea.selectionStart;
    const stepSpace = arg ? '   ' : ' ';
    const stepPositionCursor = arg ? 3 : 1;
    const leftPart = textarea.value.substring(0, this.cursorPosition);
    const rightPart = textarea.value.substring(this.cursorPosition);
    textarea.value = `${leftPart}${stepSpace}${rightPart}`;
    textarea.selectionStart = this.cursorPosition + stepPositionCursor;
    textarea.selectionEnd = this.cursorPosition + stepPositionCursor;
  }

  eventCapsLock() {
    isCapsLockKeyDown = true;
    isCapsLockPressed = !isCapsLockPressed;
    sectionKey.innerHTML = ' ';
    let arg;
    if (capsLock) {
      arg = (langPage === 'ua') ? 'ua' : 'eng';
    } else {
      arg = (langPage === 'ua') ? 'CapsUA' : 'CapsENG';
    }
    showButton(letters, arg);

    if (!capsLock) {
      this.buttonActive('CapsLock', true);
    } else {
      this.buttonActive('CapsLock', false);
    }
    capsLock = !capsLock;
    this.startMouse();
  }

  eventShiftAlt() {
    sectionKey.innerHTML = ' ';
    let langChange = langPage === 'ua' ? 'eng' : 'ua';
    if (capsLock) {
      langChange = langChange === 'ua' ? 'CapsUA' : 'CapsENG';
    }
    if (!langChangeClick) {
      showButton(letters, langChange);
      if (isCapsLockPressed) this.buttonActive('CapsLock', true);
    }
    langChangeClick = true;
    this.buttonActive(shiftAltOne, true);
    this.buttonActive(shiftAltTwo, true);
  }

  eventShift() {
    if (isShiftClick) return;
    sectionKey.innerHTML = ' ';
    isShiftClick = true;
    isShiftDown = true;
    let langChange = langPage === 'ua' ? 'ua' : 'eng';
    if (!capsLock) {
      langChange = langChange === 'ua' ? 'CapsUA' : 'CapsENG';
    }
    capsLock = !capsLock;
    showButton(letters, langChange);
    if (isCapsLockPressed) this.buttonActive('CapsLock', true);
    this.startMouse();
  }

  eventDelete() {
    this.cursorPosition = textarea.selectionStart;
    const leftPart = textarea.value.substring(0, this.cursorPosition);
    const rightPart = textarea.value.substring(this.cursorPosition + 1);
    textarea.value = leftPart + rightPart;
    textarea.selectionStart = this.cursorPosition;
    textarea.selectionEnd = this.cursorPosition;
  }

  eventBackspace() {
    this.cursorPosition = textarea.selectionStart;
    if (this.cursorPosition === 0) return;

    const leftPart = textarea.value.substring(0, this.cursorPosition - 1);
    const rightPart = textarea.value.substring(this.cursorPosition);
    textarea.value = leftPart + rightPart;
    textarea.selectionStart = this.cursorPosition - 1;
    textarea.selectionEnd = this.cursorPosition - 1;
  }

  eventEnter() {
    this.cursorPosition = textarea.selectionStart;

    textarea.value = `${textarea.value.substring(0, this.cursorPosition)}\n${textarea.value.substring(this.cursorPosition)}`;

    textarea.selectionStart = this.cursorPosition + 1;
    textarea.selectionEnd = this.cursorPosition + 1;
  }

  startMouse() {
    this.btn = Array.from(sectionKey.children);
    this.btn.forEach((e) => {
      e.addEventListener('mousedown', (event) => {
        this.eventKeyDown(event.target.dataset);
      });
      e.addEventListener('mouseup', (event) => {
        this.eventKeyUp(event.target.dataset);
      });
    });
  }

  eventKeyDown(event) {
    if (event.isTrusted) event.preventDefault();
    if (event.code === 'CapsLock') {
      if (event.code === 'CapsLock' && !isCapsLockKeyDown) {
        this.eventCapsLock();
        return;
      }
    } else if (event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        isAltKeyPressed = true;
        shiftAltOne = event.code === 'AltLeft' ? 'AltLeft' : 'AltRight';
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftKeyPressed = true;
        shiftAltTwo = event.code === 'ShiftLeft' ? 'ShiftLeft' : 'ShiftRight';
      }
      if (isAltKeyPressed && isShiftKeyPressed) {
        if (langChangeClick) return;
        this.eventShift(event);
        this.eventShiftAlt();
        return;
      }
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.eventShift(event);
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'Backspace') {
      this.eventBackspace();
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'Delete') {
      this.eventDelete();
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'Enter') {
      this.eventEnter();
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltLeft' || event.code === 'AltRight') {
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'Space' || event.code === 'Tab') {
      if (event.code === 'Tab') {
        this.eventSpace(true);
      } else {
        this.eventSpace();
      }
      this.buttonActive(event.code, true);
      return;
    }
    if (event.code === 'MetaLeft') {
      event.preventDefault();
      this.buttonActive(event.code, true);
      return;
    }
    this.buttonActive(event.code, true);
    if (event.code === 'CapsLock') return;
    this.showBtnOfPage(event.code);
  }

  eventKeyUp(event) {
    if (event.isTrusted) event.preventDefault();
    if (event.code === 'CapsLock') {
      isCapsLockKeyDown = false;
      return;
    }
    isAltKeyPressed = false;
    isShiftKeyPressed = false;
    langChangeClick = false;

    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && isShiftDown) {
      isShiftClick = false;
      this.eventShift();
      isShiftDown = false;
      isShiftClick = false;
    }
    this.buttonActive(event.code, false);
  }
}
const startEvent = new StartEvents(sectionKey);
const localLang = localStorage.getItem('myLang');
if (localLang) {
  showButton(letters, localLang);
  if (localLang === 'CapsENG' || localLang === 'CapsUA') {
    const btn = Array.from(sectionKey.children);
    btn.forEach((e) => {
      if (e.dataset.code === 'CapsLock') startEvent.eventKeyDown(e.dataset);
    });
    isCapsLockKeyDown = false;
  }
} else {
  showButton(letters, langPage);
}
startEvent.startMouse();

document.addEventListener('keydown', (event) => {
  startEvent.eventKeyDown(event);
});
document.addEventListener('keyup', (event) => {
  startEvent.eventKeyUp(event);
});
