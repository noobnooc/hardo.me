export default {
  textList: [
    "富强",
    "民主",
    "文明",
    "和谐",
    "自由",
    "平等",
    "公正",
    "法治",
    "爱国",
    "敬业",
    "诚信",
    "友善"
  ],

  generateBubble(x, y) {
    let bubble = document.createElement("span");
    let text = this.textList[Math.floor(Math.random() * this.textList.length)];
    bubble.innerText = text;
    bubble.className = "bubble";
    bubble.style.position = "absolute";

    this.parentEle.appendChild(bubble);

    bubble.style.top = y - bubble.offsetHeight / 2 + "px";
    bubble.style.left = x - bubble.offsetWidth / 2 + "px";
    setTimeout(() => this.parentEle.removeChild(bubble), 900);
  },

  active(el) {
    this.parentEle = document.querySelector(el);
    this.parentEle.addEventListener(
      "click",
      (mouseEvent) => {
        document.body.style.position = "relative";
        this.generateBubble(mouseEvent.clientX, mouseEvent.clientY);
      },
      true
    );
  }
};
