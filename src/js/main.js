import pager from './pager';
import bubble from './bubble';
import typer from './typer';
import theme from './theme';

// 导入CSS文件
import '../css/main.css';
import '../css/pager.css';
import '../css/pages.css';


window.onload = function() {
  typer.active('.code-box', [
    '> echo hello',
    'hello',
    '> cat about',
    'This is Hardo (renamed to Nooc: https://nooc.ink)',
    'A web developer',
    'If you wanna contact me',
    'Plz send email to nooc@nooc.ink',
    '> ls skills/',
    'JavaScript iOS',
    '> cat links',
    '[Homepage](https://nooc.ink)',
    '[Github](https://github.com/noobnooc)',
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
