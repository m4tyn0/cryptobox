  import { onMount } from 'svelte';
  import Player from './player.js';
  import GameArea from './game-area.js';

  let canvas;
  let ctx;
  let myGameArea;
  let player1;
  let player2;
  let winner = '';

  onMount(() => {
    ctx = canvas.getContext('2d');
    myGameArea = new GameArea('rgba(0, 0, 0, 0)');
    player1 = new Player(50, 270, 25, myGameArea.ctx, imagesPlayer1, -20, 75);
    player2 = new Player(470, 270, 25, myGameArea.ctx, imagesPlayer2, 0, -75);

    updateGameArea();
  });

  function updateGameArea() {
    requestAnimationFrame(updateGameArea);
    //UP
    if (player1.keys[87]) player1.moveUp();
    if (player2.keys[38]) player2.moveUp();
    //DOWN
    if (player1.keys[83]) player1.moveDown();
    if (player2.keys[40]) player2.moveDown();
    //RIGHT
    if (player1.keys[68]) player1.moveRight();
    if (player2.keys[39]) player2.moveRight();
    //LEFT
    if (player1.keys[65]) player1.moveLeft();
    if (player2.keys[37]) player2.moveLeft();


    //Players Collisions
    if (!(player1.x + player1.faceWidth < player2.x ||
          player1.x > player2.x + player2.faceWidth  ||
          player1.y + player1.faceHeight < player2.y ||
          player1.y > player2.y + player2.faceHeight )) {
      player1.x -= 40;
      player1.Vx = 5;
      player2.x += 40;
      player2.Vx = 5;
    };

    ctx.clearRect(0, 0, 690, 690);
    myGameArea.draw();
    player1.updatePosition();
    player2.updatePosition();
    player1.draw();
    player2.draw();  }

  function checkPunches() {
  //LEFT PUNCH
  if (player1.keys[84]) {
    if(player1.lpunch.hit(1, player1.faceWidth, player2)) player1.score++;
    console.log(player1.score);
  }
  if (player2.keys[79]) {
    if (player2.lpunch.hit(2, player1.faceWidth, player1)) player2.score++;
    console.log(player2.score);
  }
  //RIGHT PUNCH
  if (player1.keys[82]) {
    if(player1.rpunch.hit(1, player1.faceWidth, player2)) player1.score++;
    console.log(player1.score);
  }
  if (player2.keys[80]){
    if (player2.rpunch.hit(2, player1.faceWidth, player1)) player2.score++;
  }  }

  function handleKeydown(e) {
    player1.keys[e.keyCode] = true;
    player2.keys[e.keyCode] = true;

    checkPunches();
  }

  function handleKeyup(e) {
    player1.keys[e.keyCode] = false;
    player2.keys[e.keyCode] = false;
  }

<canvas id="ring" bind:this={canvas} on:keydown={handleKeydown} on:keyup={handleKeyup} width="600" height="600"></canvas>