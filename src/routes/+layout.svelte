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

  </script>

<svelte:head>
    <title>DNR</title>
    <meta name="DNR" content={meta_description} />
    <meta name="og:description" content={meta_description} />
    <script type='text/javascript'>
      (function(I, L, T, i, c, k, s) {if(I.iticks) return;I.iticks = {host:c, settings:s, clientId:k, cdn:L, queue:[]};var h = T.head || T.documentElement;var e = T.createElement(i);var l = I.location;e.async = true;e.src = (L||c)+'/client/inject-v2.min.js';h.insertBefore(e, h.firstChild);I.iticks.call = function(a, b) {I.iticks.queue.push([a, b]);};})(window, 'https://cdn-v1.intelliticks.com/prod/common', document, 'script', 'https://app.intelliticks.com', 'GkWJhLjAt63LNmxx8_c', {});
    </script>
    <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
    <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
    <script type="text/javascript">window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/tt516483/30min', text: 'Schedule time with me', color: '#D71B30', textColor: '#ffffff', branding: undefined }); }</script>
</svelte:head>
  {#if ($page.url.pathname.split('/')[0] === "" && (isPage || $page.url.pathname.split('/')[1] === "") && ($page.url.pathname.split('/').length < 3) || $page.url.pathname.includes("services")) }
  <Header />
  {:else}
  <Header isColored/>
  {/if}
  <main>
    <slot />
  </main>

  <Footer/>