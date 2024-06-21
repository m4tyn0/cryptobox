<script>
	import Socials from './Socials.svelte';
</script>
<section id="about">
<div
	class="flex flex-col md:flex-row justify-center items-center h-screen p-8 text-center space-y-8 md:space-y-0 md:space-x-8"
>
	<div class="mb-8">
		<h2 class="mb-4">Join our Community!</h2>
		<Socials />
	</div>
	<div>
		<section id="buy" class="flex flex-col justify-center items-center">
			<h2 class="mb-4">Buy and chart $PUNCH</h2>
			<ul class="flex space-x-4 justify-center mb-8">
				<li>
					<a href="https://pump.fun" target="_blank" rel="noopener noreferrer"
						><img src="/images/pump.png" alt="Pump Fun" class="h-6 w-6" /></a
					>
				</li>
				<li>
					<a
						href="https://dexscreener.doc"
						target="_blank"
						rel="noopener noreferrer"
						><img
							src="/images/dexscreener.svg"
							alt="Dex Screener"
							class="h-6 w-6 invert"
						/></a
					>
				</li>
				<li>
					<a href="https://brdeye.com" target="_blank" rel="noopener noreferrer"
						><img src="/images/birdeye.png" alt="BRD Eye" class="h-6 w-6" /></a
					>
				</li>
			</ul>
		</section>
	</div>
  </section>
