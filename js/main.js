$(document).ready(() => {
  // console.log('jQuery operational')
  const $gameBoard = $('.game-screen');
  const $newGameBtn = $('.new-game-btn');
  let $bird;
  let $pipe;
  let score;


  const initBird = () => {
    console.log('initBird Fired!');
    $gameBoard.append('<div class="bird">bird</div>');
    $bird = $('.bird')
    birdGravity();
  }

  const birdGravity = () => {
    let $birdBCR;
    setInterval(() => {
      $birdBCR = $('.bird')[0].getBoundingClientRect();
      console.log($birdBCR);
      $bird.css({
        'top': $birdBCR.top + 20
      });
    }, 250);
  }

  const initPipes = () => {
    console.log('initPipes Fired!');
    makePipe();
    movePipes();
    // setInterval(() => {
    //   makePipe();
    // }, 1000);
  }

  const makePipe = () => {
    $gameBoard.append('<div class="pipe">pipe</div>');
  }

  const movePipes = () => {
    $pipe = $('.pipe');
    let $pipeBCR;
    // const pipeMotion = $pipeBCR.right - 10;
    console.log($pipeBCR);
    setInterval(() => {
      // console.log('setInterval fired');
      $pipeBCR = $('.pipe')[0].getBoundingClientRect();
      $pipe.css({
        'left': $pipeBCR.left - 50
      });
    }, 1000);
  }

  const initTimer = () => {
    score = 0;
    console.log('initTimer Fired!');
    console.log(score);
    $gameBoard.append(`<div class="score">SCORE: <span id="score-counter">${score}</span></div>`);
    initScore();
  }

  const initScore = () => {
    const $scoreCounter = $('#score-counter');
    $scoreCounter.html(score);
    setInterval(() => {
      score += 10;
      $scoreCounter.html(`<span id="score-counter">${score}</span>`);
    }, 1000);
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
