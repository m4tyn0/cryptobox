<!-- InfoBoard.svelte -->
<script>
  import PlayerScore from './PlayerScore.svelte';
  export let player1Score = 0;
  export let player2Score = 0;
  export let time = 0;
  export let player1Name = 'Player 1';
  export let player2Name = 'Player 2';
</script>

<div class="flex justify-around items-center p-5 bg-gray-200">
  <PlayerScore playerName={player1Name} score={player1Score} />
  <h2>Time: {time}</h2>
  <PlayerScore playerName={player2Name} score={player2Score} />
</div>