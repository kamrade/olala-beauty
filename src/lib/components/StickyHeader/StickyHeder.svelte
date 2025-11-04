<svelte:window bind:innerWidth bind:innerHeight bind:scrollY />

<script lang="ts">

	import { onMount } from 'svelte';

	let height = $state(0);
	let stickyHeaderContent = $state<HTMLElement | null>(null);
	let innerWidth = $state(0);
	let innerHeight = $state(0);
	let scrollY = $state(0);

	// visibility state
	let isVisible = $state(true);
	let lastY = $state(0);
	let downAccum = $state(0);
	let upAccum = $state(0);

	// настройки чувствительности
	const SHOW_THRESHOLD = 12;  // сколько пикселей нужно прокрутить вверх, чтобы показать
	const HIDE_THRESHOLD = 24;  // сколько пикселей нужно прокрутить вниз, чтобы спрятать
	const AT_TOP_SHADOW_CUTOFF = 1; // когда ~в самом верху — без тени

	let { children } = $props();

	const updateWrapperSize = () => {
		height = stickyHeaderContent?.getBoundingClientRect?.().height || 0;
	}

	$effect(() => {
		if (innerWidth && innerHeight) { updateWrapperSize() }
	});

	onMount(() => {
		updateWrapperSize();
	});

	$effect(() => {
		const delta = scrollY - lastY;

		// всегда показываем у самого верха
		if (scrollY <= 0) {
			isVisible = true;
			downAccum = upAccum = 0;
			lastY = scrollY;
			return;
		}

		// avoid twitch
		if (Math.abs(delta) < 2) {
			lastY = scrollY;
			return;
		}

		if (delta > 0) {
			// scroll down
			downAccum += delta;
			upAccum = 0;
			if (downAccum >= HIDE_THRESHOLD) isVisible = false;
		} else {
			// scroll up
			upAccum += -delta;
			downAccum = 0;
			if (upAccum >= SHOW_THRESHOLD) isVisible = true;
		}

		lastY = scrollY;
	});

</script>



<div class="StickyHeader">

	<div
		class="StickyHeaderPosition"
		class:isVisible={isVisible}
		class:StickyHeaderShadow={scrollY > 0}
		id="StickyHeaderPosition"
	>
		<div class="StickyHeaderContent" bind:this={stickyHeaderContent}>
			{@render children()}
		</div>
	</div>

	<div class="StickyHeaderStub" style={`height: ${height}px`}></div>
</div>

<style lang="scss">
  .StickyHeader {
    .StickyHeaderPosition {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: var(--zindex-sticky);
      background: rgba(255, 255, 255, 0.6);
      /* по умолчанию спрятан вверх */
      transform: translateY(-100%);
      transition: transform 0.22s ease, box-shadow 0.22s ease, background 0.22s ease;
      will-change: transform;

      &.isVisible {
        transform: translateY(0);
      }

      &.StickyHeaderShadow {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
      }
    }

    //.StickyHeaderStub {
    /* высота задаётся инлайном из скрипта */
    //}
  }

</style>
