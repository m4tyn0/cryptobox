<script>
  import { onMount, afterUpdate } from 'svelte';
  import Punch from '../game/scripts/punch';

  export let x;
  export let y;
  export let speed;
  export let ctx;
  export let images;
  export let facePositionX;
  export let direction;

  let radius = 50; //depending of head size to control limits
  let Vx = 0;
  let Vy = 0;
  let friction = 0.9;
  let keys = {};
  let faceImgSrc; // directly assign the image source
  let score = 0;
  let facePosition = facePositionX;
  let faceWidth = 75;
  let faceHeight = 75;
  let rpunch = new Punch(images[1], x, y, direction);
  let lpunch = new Punch(images[2], x, y, direction);
  let winner = "";

  onMount(() => {
    draw();
  });

  afterUpdate(() => {
    draw();
  });

  function draw() {
    // drawing logic here
  }
</script>

<div>
  <img src={faceImgSrc} alt="Player face" />
</div>