(function () {
  'use strcit';

  const valueMax = 140;
  const twitt = 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker';
  const numberOfTwittes = Math.ceil(twitt.length / valueMax);
  const quantityNumbersOfTwitt = numberOfTwittes.toString().length;
  const quantitySpaceIndex = (quantityNumbersOfTwitt * 2) + 1;
  const valueMaxWithIndex = valueMax - quantitySpaceIndex;

  // First Solution
  for (let i = 0, initialValueMaxIndex = 0, lastValueMaxIndex = valueMaxWithIndex; i < numberOfTwittes; i++) {
    const generateTwittStorm = twitt.slice(initialValueMaxIndex, lastValueMaxIndex);
    initialValueMaxIndex += valueMaxWithIndex;
    lastValueMaxIndex += valueMaxWithIndex

    const twittStorm = (i + 1) + '/' + numberOfTwittes + ' ' + generateTwittStorm;
    console.log(twittStorm);
  }

})();
