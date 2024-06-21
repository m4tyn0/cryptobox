<script>
    let menuOpen = false;
</script>

<nav class="flex items-center justify-between p-4 bg-white bg-opacity-10 backdrop-blur-lg sticky top-0 z-50 text-black font-desporm">
    <img
        src="/images/PUNCH_LOGO.png"
        alt=""
        class="w-12 sm:w-12 md:w-12 lg:w-12 xl:w-12"
    />

    <ul class={`${menuOpen ? 'block' : 'hidden'} md:flex gap-1 md:gap-4 pl-4 lg:gap-8`}>
        <li><a href="#home" class="text-black no-underline">Home</a></li>
        <li><a href="#about" class="text-black no-underline">About</a></li>
        <li><a href="#roadmap" class="text-black no-underline">Roadmap</a></li>
        <li><a href="#gameplay" class="text-black no-underline">Buy</a></li>
    </ul>
    <button class="md:hidden" on:click={() => (menuOpen = !menuOpen)}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            ></path>
        </svg>
    </button>
</nav>

<style>

</style>