import pager from './pager';
import '../css/main.css';


window.onload = function() {
  pager.active('.pager');
  document.body.addEventListener('click', function (mouseEvent) {
    document.body.style.position = 'relative';
    generateBubble(mouseEvent.clientX, mouseEvent.clientY);
  }, true)
}

const textList = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善']

function generateBubble(x, y) {
  let bubble = document.createElement('span');
  let text = textList[Math.floor(Math.random() * textList.length)];
  bubble.innerText = text;
  bubble.className = 'bubble';
  bubble.style.position = 'absolute';

  document.body.appendChild(bubble);
  
  bubble.style.top = y - (bubble.offsetHeight / 2) + 'px';
  bubble.style.left = x - (bubble.offsetWidth / 2) + 'px';
  setTimeout(() => document.body.removeChild(bubble), 900);

}