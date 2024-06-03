<script>
  import { onMount } from 'svelte';
  import InfoBoard from './InfoBoard.svelte';
  import GameArena from './GameArena.svelte';

  let player1Score = 0;
  let player2Score = 0;
  let time = 0;
  let player1Name = 'trump';
  let player2Name = 'boden';

  onMount(() => {
    initializeGame() 
  });
</script>

<InfoBoard {player1Score} {player2Score} {time} {player1Name} {player2Name} />
<GameArena />
