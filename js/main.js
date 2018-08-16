$(document).ready(() => {
  // console.log('jQuery operational')
  const $gameBoard = $('.game-screen');
  const $newGameBtn = $('.new-game-btn');
  const $pipe = $('.pipe');


  const initBird = () => {
    console.log('initBird Fired!');
    $gameBoard.append('<div class="bird">bird</div>');
  }

  const initPipes = () => {
    console.log('initPipes Fired!');
    $gameBoard.append('<div class="pipe">pipe</div>');
    movePipes();
  }

  const movePipes = () => {
    const $pipeBCR = $('.pipe')[0].getBoundingClientRect();
    // const pipeMotion = $pipeBCR.right - 10;
    console.log($pipeBCR);
    setInterval(() => {
      // console.log('setInterval fired');
      $pipe.css({
        'right': $pipeBCR.right - 10
      });
    }, 1000)
  }

  const initTimer = () => {
    console.log('initTimer Fired!');
  }

  const initGame = () => {
    console.log('initGame Fired!')
    $newGameBtn.remove();
    initBird();
    initPipes();
    initTimer();
  }

  $newGameBtn.on('click', () => {
    // console.log('btn clicked');
    initGame();
  });

// Closes jQuery Ready f(x)
});
