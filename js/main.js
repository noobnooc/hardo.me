document.body.addEventListener('click', function (mouseEvent) {
  generateBubble(mouseEvent.clientX, mouseEvent.clientY);
}, true)

function generateBubble(x, y) {
  var bubbleImg = document.createElement('img');
  bubbleImg.className = 'bubble-img';
  bubbleImg.src = 'images/fav.png';
  bubbleImg.style.width = '20px';
  bubbleImg.style.height = '20px';
  bubbleImg.style.position = 'fixed';
  bubbleImg.style.top = y - 10 + 'px';
  bubbleImg.style.left = x - 10 + 'px';
  bubbleImg.style.opacity = '0.05';
  document.body.appendChild(bubbleImg);
}