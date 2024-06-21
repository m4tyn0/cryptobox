<script>
	import Roadmap from './../lib/components/Roadmap.svelte';
	import Header from '../lib/components/Header.svelte';
	import Hero from '../lib/components/Hero.svelte';
	import About from '../lib/components/About.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Pump from '../lib/components/Pump.svelte';

	import '../app.css';
</script>
<Pump />

<Header />
<main>
	<Hero />
	<About />
	<Roadmap />
</main>
<Footer />
