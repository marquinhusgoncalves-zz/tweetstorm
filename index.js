(() => {
  'use strict';
    // Number max characters
    const valueMax = 140;

    // Input tweet or use string default
    const twittValue = process.argv[2] || 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker';

    // Number of the tweet generate
    const numberOfTwittes = () => Math.ceil(twittValue.length / valueMax);

    // Quantity numbers in the index
    const quantityNumbersOfTwitt = () => numberOfTwittes().toString().length;

    // Quantity total of the characters of the index
    const quantitySpaceIndex = () => (quantityNumbersOfTwitt() * 2) + 1;

    // Number max of the characters with index
    const valueMaxWithIndex = valueMax - quantitySpaceIndex();

    // Generator of twittstorm
    const generateTwittStorm = (initialValueMaxIndex, lastValueMaxIndex) => twittValue.slice(initialValueMaxIndex, lastValueMaxIndex);

    for (let i = 0, initialValueMaxIndex = 0, lastValueMaxIndex = valueMaxWithIndex; i < numberOfTwittes(); i++ , lastValueMaxIndex += valueMaxWithIndex, initialValueMaxIndex += valueMaxWithIndex) {
      const twittStorm = `${(i + 1)}/${numberOfTwittes()} ${generateTwittStorm(initialValueMaxIndex, lastValueMaxIndex)}`;
      console.log(twittStorm);
    }

})();
