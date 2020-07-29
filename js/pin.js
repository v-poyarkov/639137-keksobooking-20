'use strict';

(function () {
  var MAX_PIN_AMOUNT = 5;
  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;
  var MAIN_PIN_WIDTH = 65;
  var MAIN_PIN_HEIGHT = 85;

  var pinTemplate = document.querySelector('#pin').content;
  var pinList = document.querySelector('.map__pins');
  var pinMain = document.querySelector('.map__pin--main');
  var pinMainHalf = Math.floor(MAIN_PIN_WIDTH / 2);

  var renderPinItem = function (data) {
    var pinItem = pinTemplate.cloneNode(true).querySelector('button');
    var pinImg = pinItem.querySelector('img');

    pinItem.style.left = data.location.x - PIN_WIDTH / 2 + 'px';
    pinItem.style.top = data.location.y - PIN_HEIGHT + 'px';
    pinImg.src = data.author.avatar;
    pinImg.alt = data.offer.title;

    return pinItem;
  };

  var renderPinList = function (data) {
    var fragment = document.createDocumentFragment();
    var pinsAmount = data.length > MAX_PIN_AMOUNT ? MAX_PIN_AMOUNT : data.length;

    for (var i = 0; i < pinsAmount; i++) {
      fragment.appendChild(renderPinItem(data[i]));
    }

    pinList.appendChild(fragment);
  };

  window.pin = {
    main: pinMain,
    mainHalfWidth: pinMainHalf,
    mainHeight: MAIN_PIN_HEIGHT,
    render: renderPinList
  };
})();
