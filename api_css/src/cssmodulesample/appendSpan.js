import styles from './appendSpan.scss';
import template from './template.html';
import _ from 'lodash';
const compiled = _.template(template);

export default function(attributes) {
  var $div = document.createElement('span');
  $div.className = styles.test;
  $div.innerHTML = compiled({ 
    name: 'test',
    className: 'test',
    text: 'test',
    ...attributes
  });
  document.body.appendChild($div);
  return $div;
}
