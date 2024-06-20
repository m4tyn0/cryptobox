<script>
	let menuOpen = false;
</script>

<nav class="sticky-header">
	<img
		src="/images/PUNCH_LOGO.png"
		alt=""
		class="logo w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56"
	/>

	<ul class={`${menuOpen ? 'block' : 'hidden'} md:flex gap-1 lg:gap-4`}>
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#gameplay">Roadmap</a></li>
		<li><a href="#gameplay">How to Buy</a></li>
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
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1em;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		position: sticky;
		top: 0;
		z-index: 1000;
		color: #000;
		font-family: 'DESPORM', sans-serif;
	}
	ul {
		list-style: none;
		gap: 1em;
	}
	li {
		margin: 0;
	}
	a {
		color: #000;
		text-decoration: none;
	}
</style>
