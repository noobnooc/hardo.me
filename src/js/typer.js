export default {
  active(el, codeList) {
    // 初始化一些数据
    this.codeBoxEle = document.querySelector(el);
    this.codeList = codeList;
    this.lineEle = null;
    this.typedLine = "";
    this.cursor = false;

    this.started = false;
  },
  start() {
    if (this.started) return;
    this.started = true;
    this._startType();
  },

  async _startType() {
    this._blinkCursor();
    for (let line of this.codeList) {
      let input = line.split(' ')[0] === '>';
      if (input) {
        line = line.split(' ').slice(1).join(' ');
        await this._typeInput(line);
      } else {
        this._printOutput(line);
      }
      
    }
  },

  async _typeLine(line) {
    for (let char of line) {
      await this._type(char);
    }
  },

  _blinkCursor() {
    setInterval(() => {
      this.cursor = !this.cursor;
      this._print();
    }, 500);
  },

  _type(char) {
    return new Promise(resolve => {
      const timeout = Math.floor(Math.random() * 50 + 50);
      setTimeout(() => {
        this.typedLine += char;
        this._print();
        resolve();
      }, timeout);
    });
  },

  _print() {
    if (!this.lineEle) return;
    this.lineEle.innerText = this.typedLine + (this.cursor ? "_" : "");
  },

  _printOutput(line) {
    let ele = document.createElement("p");
    ele.className = "code-line";
    ele.innerText = line;
    this.codeBoxEle.append(ele);
  },

  async _typeInput(line) {
    let lineEle = document.createElement("p");
    lineEle.className = 'code-line input-line';
    this.codeBoxEle.append(lineEle);
    this.cursor = false;
    this._print();
    this.lineEle = lineEle;
    this.typedLine = '';
    await this._typeLine(line);
  }
};
