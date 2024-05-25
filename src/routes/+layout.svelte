<script>
  // @ts-nocheck
	import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import { onNavigate } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import "../app.css";
	import { page } from "$app/stores";

  const meta_description = `Our consultancy is more than just a service provider; we're your trusted partner in navigating the complexities of global business.`
  onNavigate((navigation) => {
      if (!document.startViewTransition) return;

      return new Promise((resolve) => {
        document.startViewTransition(async () => {
          resolve();
          await navigation.complete;
        });
      });
    });


  const country = ['en', 'rw', 'bi', 'za', 'ke', 'sa'];
	$: isPage = country.includes($page.url.pathname.split('/')[1]);
  console.log()

  </script>

<svelte:head>
    <title>DNR</title>
    <meta name="DNR" content={meta_description} />
    <meta name="og:description" content={meta_description} />
</svelte:head>
  {#if ($page.url.pathname.split('/')[0] === "" && (isPage || $page.url.pathname.split('/')[1] === "") && ($page.url.pathname.split('/').length < 3) || $page.url.pathname.includes("services")) }
  <Header />
  {:else}
  <Header isColored/>
  {/if}
  <main transition:fade>
    <slot />
  </main>

  <Footer/>