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

footer.element.innerHTML = '<p class="footer__text"> Клавіатура створена в операційній системі Windows. Для перемикання мови комбінація: ліві ctrl + alt</p>';
footer.appendTo(wrapper.element);

wrapper.appendTo(page);
