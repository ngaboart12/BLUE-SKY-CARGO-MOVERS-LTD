<script>
	import { onMount, onDestroy } from 'svelte';

	let chartdiv;

	onMount(() => {
		if (typeof window !== 'undefined') {
			// Load the amCharts scripts from CDN
			const scriptUrls = [
				'https://cdn.amcharts.com/lib/5/index.js',
				'https://cdn.amcharts.com/lib/5/map.js',
				'https://cdn.amcharts.com/lib/5/geodata/worldLow.js',
				'https://cdn.amcharts.com/lib/5/themes/Animated.js'
			];

			const loadScript = (src) => {
				return new Promise((resolve, reject) => {
					const script = document.createElement('script');
					script.src = src;
					script.onload = resolve;
					script.onerror = reject;
					document.body.appendChild(script);
				});
			};

			// Load all scripts
			Promise.all(scriptUrls.map(loadScript))
				.then(() => {
					// Initialize the chart after scripts are loaded
					am5.ready(function () {
						let am5 = window.am5;
						let am5map = window.am5map;
						let am5geodata_worldLow = window.am5geodata_worldLow;
						let am5themes_Animated = window.am5themes_Animated;

						// Create root element
						var root = am5.Root.new(chartdiv);

						// Set themes
						root.setThemes([am5themes_Animated.new(root)]);

						// Create the map chart
						var chart = root.container.children.push(
							am5map.MapChart.new(root, {
								panX: 'rotateX',
								panY: 'translateY',
								projection: am5map.geoNaturalEarth1()
							})
						);

						// Create main polygon series for countries
						var polygonSeries = chart.series.push(
							am5map.MapPolygonSeries.new(root, {
								geoJSON: am5geodata_worldLow,
								exclude: ['AQ']
							})
						);
						chart.set("homeZoomLevel", 1.5); // Adjust zoom level as needed
						chart.set("homeGeoPoint", { latitude: 0, longitude: 20 });
						polygonSeries.events.on("datavalidated", function() {
							chart.goHome(); // This will apply the homeZoomLevel and homeGeoPoint settings
						});

						polygonSeries.mapPolygons.template.setAll({
							tooltipText: '{name}',
							toggleKey: 'active',
							interactive: false
						});

						polygonSeries.mapPolygons.template.states.create('hover', {
							fill: root.interfaceColors.get('primaryButtonHover')
						});

						polygonSeries.mapPolygons.template.states.create('active', {
							fill: "#d71b30"
						})
						chart.appear(100, 100);

						polygonSeries.events.on('datavalidated', function () {
                            const defaultActiveCountries = ['RW', 'KE', 'BI', 'UG', 'ZM', 'ZA', 'GB', 'TZ','CM'];
                            defaultActiveCountries.forEach((countryId) => {
                                let countryDataItem = polygonSeries.getDataItemById(countryId);
                                if(countryDataItem){
                                    countryDataItem.get('mapPolygon').set('active', true);
                                }
                            });
						});
					});
				})
				.catch((err) => console.error('Error loading scripts', err));
		}
	});
</script>

<div class="w-[700px] h-[500px]" bind:this={chartdiv}></div>