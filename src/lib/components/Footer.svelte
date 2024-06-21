<script>
  let showModal = false;
  function toggleModal() {
    showModal = !showModal;
  }
</script>

<footer class="fixed inset-x-0 bottom-0 p-6 bg-black text-white">
  <div class="flex flex-wrap justify-between text-sm">
    <div class="order-1 text-gray-500 hover:text-white">
      Contact us: <a href="mailto:contact@box.com" class="text-gray-500 hover:text-white no-underline">kryptofabrik@protonmail.com</a>
    </div>
    <div class="flex order-2">
      <div class="px-2"><a href="/punch_whitepaper.pdf" target="_blank" class="text-gray-500 hover:text-white no-underline">Whitepaper</a></div>
      <div class="px-2">
        <button on:click={toggleModal} class="text-gray-500 hover:text-white no-underline" type="button" role="button">Disclaimer</button>
      </div>
    </div>
  </div>

  {#if showModal}
    <div class="fixed inset-0 z-50 flex items-center justify-center" on:click={toggleModal}>
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="bg-black text-white p-8 rounded mx-20 relative z-10">
        <p class="text-white">This token is a crypto asset, which is subject to high volatility and risk. The creators of this token are not responsible for any financial losses that may occur from participating in the game or investing in the token. Please ensure you fully understand the risks involved and consult with a financial advisor before making any investment decisions. Participation in this game is at your own risk.</p>
      </div>
    </div>
  {/if}
</footer>