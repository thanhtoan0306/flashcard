<script lang="ts">
	import {
		topics,
		currentTopicIndex,
		currentIndex,
		totalCards,
		switchTopic,
		navigate,
		goToCard
	} from '../stores/flashcardStore';
	import { stopSpeaking } from '../stores/speechStore';

	function handleSliderChange(e: Event) {
		const target = e.target as HTMLInputElement;
		const newIndex = parseInt(target.value) - 1;
		stopSpeaking();
		goToCard(newIndex);
	}

	function handleTopicChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		const selectedIndex = parseInt(target.value);
		stopSpeaking();
		switchTopic(selectedIndex);
	}

	function handlePrev() {
		stopSpeaking();
		navigate('prev');
	}

	function handleNext() {
		stopSpeaking();
		navigate('next');
	}
</script>

<div class="w-full max-w-lg mx-auto mb-6 flex flex-col items-center">
	<!-- Bộ đếm và Slider -->
	<div class="w-full mb-4">
		{#if $topics.length > 0}
			<div class="text-center text-green-600 mb-2 font-bold text-lg">
				📚 {$topics[$currentTopicIndex]?.name}
			</div>
		{/if}
		<div class="text-center text-slate-600 mb-3 font-medium text-lg">
			Thẻ số: {$currentIndex + 1} / {$totalCards}
		</div>
		<input
			type="range"
			id="card-slider"
			min="1"
			max={$totalCards || 1}
			value={$currentIndex + 1}
			on:input={handleSliderChange}
			class="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
		/>
	</div>

	<!-- Nút điều khiển -->
	<div class="flex items-center space-x-4 w-full justify-center">
		<button
			on:click={handlePrev}
			class="bg-gray-400 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-500 transition-transform transform hover:scale-105 text-base md:text-lg"
		>
			&larr; Trước
		</button>
		<button
			on:click={handleNext}
			class="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 text-base md:text-lg"
		>
			Tiếp theo &rarr;
		</button>
	</div>

	<!-- Dropdown chọn chủ đề -->
	<div class="mt-4">
		<label for="topic-select" class="block text-sm font-medium text-gray-700 mb-2">
			Chọn chủ đề:
		</label>
		<select
			id="topic-select"
			value={$currentTopicIndex}
			on:change={handleTopicChange}
			class="bg-white border border-gray-300 rounded-lg px-4 py-2 text-base font-medium text-gray-700 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-48"
		>
			{#each $topics as topic, index}
				<option value={index}>{topic.name}</option>
			{/each}
		</select>
	</div>
</div>
