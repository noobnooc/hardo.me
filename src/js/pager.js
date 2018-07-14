export default {
  active(selector) {
    this.selector = selector;
    this.currentPage = 1;
    this.totalPages = 0;
    this.shaking = false;
    this.pager = document.querySelector(selector);
    this.totalPages = document.querySelectorAll(selector + ' .page').length;
    this._addListener();
  },
  _addListener() {
    this._addMouseWheelListener();
    this._addBadgeClickListener();
  },

  _addMouseWheelListener() {
    
    // Chrome/IE/Safari/Edge
    document.addEventListener('mousewheel', (evt) => {
      if (evt.wheelDelta < 0) {
        this.pageDown();
      } else {
        this.pageUp();
      }
    }, false);

    // Firefox
    window.addEventListener('DOMMouseScroll', (evt) => {
      if (evt.detail > 0) {
        this.pageDown();
      } else {
        this.pageUp();
      }
    }, false)
  },

  _addBadgeClickListener() {
    const badges = document.querySelectorAll(this.selector + ' .badge');
    badges.forEach((badge, index) => {
      badge.addEventListener('click', () => {
        this.switchPage(index + 1);
      }, false);
    });
  },

  pageDown() {
    this.switchPage(this.currentPage + 1);
  },

  pageUp() {
    this.switchPage(this.currentPage - 1);
  },
  switchPage(page) {
    if (this.shaking) return;
    this.shaking = true;
    setTimeout(() => this.shaking = false, 1000);
    if (page < 1 || page > this.totalPages) return;
    this.pager.classList.remove(`active-page-${this.currentPage}`);
    this.currentPage = page;
    this.pager.classList.add(`active-page-${this.currentPage}`);
  }
  
}