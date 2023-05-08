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
export default letters;
