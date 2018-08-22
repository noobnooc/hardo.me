import pager from './pager';
import bubble from './bubble';
import typer from './typer';

// 导入CSS文件
import '../css/main.css';
import '../css/pager.css';
import '../css/pages.css';
import theme from './theme';


window.onload = function() {
  typer.active('.code-box', [
    '> echo hello',
    'hello',
    '> cat about',
    'This is Hardo',
    'A web developer',
    'If you wanna contact me',
    'Plz send email to i@hardo.me',
    '> ls skills/',
    'JavaScript Java Android',
    '> cat links',
    '[Blog](https://blog.hardo.me/)',
    '[Github](https://github.com/hardo)',
    '> echo Thanks!',
    'Thanks!',
    '> '
  ]);
  pager.active('.pager', (page) => {
    if (page === 2) {
      setTimeout(() => {
        typer.start();
      }, 1000);
    }
  });
  bubble.active('.pager');
  theme.active('.page-1 .favicon');
}
