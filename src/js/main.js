import pager from './pager';
import bubble from './bubble';
import typer from './typer';

// 导入CSS文件
import '../css/main.css';
import '../css/pager.css';
import '../css/pages.css';


window.onload = function() {
  pager.active('.pager');
  bubble.active('.pager');
  typer.active('.code-box', [
    'echo hello world',
    'echo This is Hardo',
    'echo A web developer',
    'echo If you wanna contact me',
    'echo Plz send email to i@hardo.me',
    'echo Thanks!',
    'exit'
  ]);
}
