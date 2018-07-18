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
    this._addTouchListener();
  },

  // 添加鼠标滚动监听器
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

  // 添加徽章图标点击事件监听器
  _addBadgeClickListener() {
    const badges = document.querySelectorAll(this.selector + ' .badge');
    badges.forEach((badge, index) => {
      badge.addEventListener('click', () => {
        this.switchPage(index + 1);
      }, true);
    });
  },

  // 添加触屏滑动事件监听器
  _addTouchListener() {
    document.addEventListener('touchstart', (evt) => {
      this.scrolled = false;
      this.clientY = evt.touches[0].clientY;
    }, false);
    document.addEventListener('touchmove', (evt) => {
      this.scrolled = true;
      this.newClientY = evt.touches[0].clientY;
    }, false);
    document.addEventListener('touchend', (evt) => {
      if (!this.scrolled) return;
      if (this.clientY > this.newClientY) {
        this.pageDown();
      } else if (this.clientY < this.newClientY) {
        this.pageUp();
      }
    }, false);
  },

  // 向下翻页
  pageDown() {
    this.switchPage(this.currentPage + 1);
  },

  // 向上翻页
  pageUp() {
    this.switchPage(this.currentPage - 1);
  },

  // 切换到指定页
  switchPage(page) {
    if (this.shaking) return;
    this.shaking = true;
    setTimeout(() => this.shaking = false, 1000);
    if (page < 1 || page > this.totalPages) return;
    this.pager.classList.remove(`active-page-${this.currentPage}`);
    this.currentPage = page;
    this.pager.classList.add(`active-page-${this.currentPage}`);
    if (this.currentPage === 1) {
      document.body.style.overscrollBehaviorY = 'auto';
    } else {
      document.body.style.overscrollBehaviorY = 'contain';
    }
  }
  
}