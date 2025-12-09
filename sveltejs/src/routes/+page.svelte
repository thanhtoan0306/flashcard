<script lang="ts">
	import { onMount } from 'svelte';
	import Controls from '../lib/components/Controls.svelte';
	import Flashcard from '../lib/components/Flashcard.svelte';
	import { initializeFlashcards } from '../lib/stores/flashcardStore';

	onMount(() => {
		initializeFlashcards();
	});
</script>

<main class="bg-slate-100 flex flex-col items-center justify-center min-h-screen p-4">
	<Controls />
	<Flashcard />
</main>
