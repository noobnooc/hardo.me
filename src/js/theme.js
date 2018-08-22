export default {
  current: 0,
  themes: ['normal', 'invert', 'sepia', 'hue-rotate', 'blur'],
  active(selector) {
    document.querySelector(selector).addEventListener("click", () => {
      document.body.classList.remove(this.getCurrentTheme());
      document.body.classList.add(this.getNextTheme());
    });
  },
  getCurrentTheme() {
    return this.themes[this.current];
  },
  getNextTheme() {
    this.current++;
    if (this.current > this.themes.length - 1) {
      this.current = 0;
    }
    return this.themes[this.current];
  }
};
