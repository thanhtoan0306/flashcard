<script lang="ts">
	import { currentCard, loading, error } from '../stores/flashcardStore';
	import { speakChinese } from '../stores/speechStore';
	import RelatedWords from './RelatedWords.svelte';
</script>

<div class="card-display bg-white p-6 md:p-8 rounded-xl shadow-xl w-full max-w-lg mb-8 transition-all duration-300">
	{#if $loading}
		<div class="text-center text-slate-600 p-8">
			<p>Đang tải dữ liệu...</p>
		</div>
	{:else if $error}
		<div class="text-center text-red-600 p-8">
			<h2 class="text-xl font-bold mb-4">Lỗi tải dữ liệu</h2>
			<p>{$error}</p>
		</div>
	{:else if $currentCard}
		<!-- Phần Hán tự và Pinyin -->
		<div class="text-center mb-6 border-b pb-4 border-slate-200">
			<div class="flex justify-center items-center">
				<p class="chinese-font text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
					{$currentCard.hanzi}
				</p>
				<button
					on:click={() => speakChinese($currentCard.hanzi)}
					class="speak-btn ml-2 text-blue-600 hover:text-blue-800 transition duration-150 p-2 rounded-full hover:bg-blue-50"
					aria-label="Phát âm từ này"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-volume-2"
					>
						<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
						<path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
						<path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
					</svg>
				</button>
			</div>
			<p class="text-2xl text-blue-600 mt-1 font-medium">
				[{$currentCard.pinyin}]
			</p>
		</div>

		<!-- Phần Nghĩa và Hán Việt -->
		<div class="space-y-3 text-lg md:text-xl text-left text-slate-800 mb-6">
			<p>
				<strong>Âm Hán Việt:</strong>{' '}
				<span class="font-semibold text-slate-700">{$currentCard.hanviet}</span>
			</p>
			<p>
				<strong>Nghĩa Việt:</strong>{' '}
				<span class="font-extrabold text-red-600">{$currentCard.vietnamese}</span>
			</p>
		</div>

		<!-- Phần Phân tích Từ ghép -->
		<div class="mt-6 pt-4 border-t border-slate-200">
			<p class="text-base font-bold text-slate-700 mb-3 border-b pb-2">
				Phân tích từ gốc:
			</p>

			<RelatedWords charData={$currentCard.char1} charIndex={1} />
			<RelatedWords charData={$currentCard.char2} charIndex={2} />
		</div>
	{/if}
</div>
