<script lang="ts">
	import { Header, StickyHeader } from '$lib';
	import type { Snippet } from 'svelte';
	import type { ILanguages, ILayout } from '$lib/i18n/00-layout/layout.type';

	let { children, data } : {
		children: Snippet,
		data: {
			lang: ILanguages,
			layout: ILayout
		}
	} = $props();

	$effect(() => {
		console.log(data);
	});

</script>

<StickyHeader>
	<Header></Header>
</StickyHeader>

{#if children}
	{@render children()}
{/if}