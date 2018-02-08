(function(win, doc) {
  'use strict';
  var $div = document.querySelector('[data-js="main"]');
  $div.insertAdjacentHTML('beforebegin', $div.outerHTML);

})(window, document);
