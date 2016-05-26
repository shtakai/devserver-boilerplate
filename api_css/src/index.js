import { hello } from './es6sample';
import { appendDiv, appendSpan } from './cssmodulesample';


var $div = document.createElement('div');
$div.innerHTML = hello();

document.body.appendChild($div);

var $div2 = appendDiv({ text: 'a' });
var $div3 = appendSpan({ text: 'b' });

if (module.hot) {
  module.hot.accept(function(err) {
    if (err) {
      console.error(err);
    }
  });

  module.hot.dispose(function() {
    $div.parentNode.removeChild($div);
    $div2.parentNode.removeChild($div2);
    $div3.parentNode.removeChild($div3);
  });
}
