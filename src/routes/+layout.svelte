<script>
	import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";
    import "../app.css";

  const meta_description = `Our consultancy is more than just a service provider; we're your trusted partner in navigating the complexities of global business.`

  </script>

<svelte:head>
    <title>DNR</title>
    <meta name="DNR" content={meta_description} />
    <meta name="og:description" content={meta_description} />
</svelte:head>

  <Header/>
  
  <slot />

  <Footer/>