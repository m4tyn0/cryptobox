<script>
  import { onMount } from 'svelte';
  import Player from './Player.svelte';
  import Punch from '../game/scripts/punch';

  let canvas;
  let ctx;
  let player1;
  let player2;

  onMount(() => {
    ctx = canvas.getContext('2d');

    player1 = {
      x: 100,
      y: 100,
      speed: 5,
      ctx: ctx,
      images: ['src/lib/game/assets/images/FacePlayer1.png', 'src/lib/game/assets/images/FacePlayer1.png'],
      facePositionX: 50,
      direction: 'right',
      Punch: Punch
    };

    player2 = {
      x: 200,
      y: 200,
      speed: 5,
      ctx: ctx,
      images: ['src/lib/game/assets/images/FacePlayer1.png', 'src/lib/game/assets/images/FacePlayer2.png'],
      facePositionX: 50,
      direction: 'left',
      Punch: Punch
    };
  });
</script>

<div id='game-board' class="relative">
  <img class="img absolute top-0 left-0" src="./src/lib/game/assets/images/Boxing-Mate-Ring.jpg" alt="Boxing Ring">
  <canvas bind:this={canvas} id="ring" class="absolute top-0 left-0" width="600" height="600"></canvas>
</div>

<Player {player1} />
<Player {player2} />