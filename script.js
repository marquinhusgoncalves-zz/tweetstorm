(() => {
  'use strict';

  const send = document.querySelector('.send');
  const del = document.querySelector('.delete');
  const twitterStormElement = document.querySelector('.twitterstorm');

  const clearTweetStorm = (e) => {
    e.preventDefault();
    twitterStormElement.innerHTML = '';
  };

  const tweetStorm = (e) => {
    clearTweetStorm(e);

    const inputElement = document.querySelector('#twitt');
    const twittValue = inputElement.value;
    const valueMax = 140;

    const numberOfTwittes = () => Math.ceil(twittValue.length / valueMax);

    const quantityNumbersOfTwitt = () => numberOfTwittes().toString().length;

    const quantitySpaceIndex = () => (quantityNumbersOfTwitt() * 2) + 1;

    const valueMaxWithIndex = valueMax - quantitySpaceIndex();

    const generateTwittStorm = (initialValueMaxIndex, lastValueMaxIndex) => twittValue.slice(initialValueMaxIndex, lastValueMaxIndex);

    for (let i = 0, initialValueMaxIndex = 0, lastValueMaxIndex = valueMaxWithIndex; i < numberOfTwittes(); i++ , initialValueMaxIndex += valueMaxWithIndex, lastValueMaxIndex += valueMaxWithIndex) {
      twitterStormElement.insertAdjacentHTML('beforeend', `<li class="collection-item">${(i + 1)}/${numberOfTwittes()} ${generateTwittStorm(initialValueMaxIndex, lastValueMaxIndex)}</li>`);
    }

    inputElement.value = '';
  }

  del.addEventListener('click', clearTweetStorm);

  send.addEventListener('click', tweetStorm)

})();
