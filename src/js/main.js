import pager from './pager';
import bubble from './bubble';

// 导入CSS文件
import '../css/main.css';
import '../css/pages.css';


window.onload = function() {
  pager.active('.pager');
  bubble.active();
}
