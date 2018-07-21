export default {
  active(el, codeList) {
    // 初始化一些数据
    this.codeBoxEle = document.querySelector(el);
    this.codeList = codeList;

    this.start();
  },
  start() {
    this._startType();
  },

  async _startType() {
    for (let line of this.codeList) {
      let lineEle = document.createElement('p');
      lineEle.className = 'code-line';
      this.codeBoxEle.append(lineEle);
      await this._typeLine(lineEle, line);
    }
  },

  async _typeLine(ele, line) {
    if (this.lineIndex >= this.codeList.length) return;
    let typed = '';
    for (let char of line) {
      typed += char;
      await this._type(ele, typed);
    }
  },

  _type(ele, typed) {
    return new Promise((resolve) => {
      const timeout = Math.floor(Math.random() * 50 + 100);
      setTimeout(() => {
        ele.innerText = typed;
        resolve();
      }, timeout);
    })
  }
}