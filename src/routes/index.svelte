<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { toBlob, toPng } from 'html-to-image';
	import { saveAs } from 'file-saver';
	import { avatar, nick, content, el } from '../store';

	let dataUrl = '';

	onMount(() => {
		if ($el) toBlob($el).then();
	});

	const checkMobieDevice = () => {
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			return 'tablet';
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			return 'mobile';
		}
		return 'desktop';
	};

	const onExport = () => {
		if (!$el) return;

		const device = checkMobieDevice();
		if (device === 'desktop') {
			toBlob($el).then((blob) => {
				if (blob) {
					saveAs(blob, 'speak.png');
				}
			});
		} else {
			toPng($el).then((url) => {
				dataUrl = url;
			});
		}
	};
</script>

<div class="max-w-xl p-10 mx-auto bg-white">
	<div class="grid grid-cols-1 gap-2">
		<label class="flex items-center">
			昵称：<input
				type="text"
				bind:value={$nick}
				class="flex-1 border h-8 px-2 focus-within:outline-none focus:border-[#272727]"
				maxlength="16"
			/>
		</label>
		<label class="flex items-center">
			内容：<input
				type="text"
				bind:value={$content}
				class="flex-1 border h-8 px-2 focus-within:outline-none focus:border-[#272727]"
			/>
		</label>
	</div>

	<div class="h-4" />

	<div bind:this={$el} class="bg-[#ededed] p-4">
		<div class="flex">
			<div class="w-10 h-10 rounded overflow-hidden mt-[6px] flex-shrink-0">
				<img src={$avatar} decoding="sync" loading="eager" alt="avatar" />
			</div>

			<div class="ml-3">
				<div class="text-[#868686] text-xs">{$nick}</div>
				<div class="text-sm inline-block bg-white py-2 px-3 rounded relative mt-[3px] break-all">
					{$content}
					<svg
						class="absolute -left-[5px] top-[6px]"
						width="8"
						height="22"
						viewBox="0 0 8 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M4.82843 15.8284C5.57857 16.5786 6 17.596 6 18.6569V22H8V0H6V3.34315C6 4.40401 5.57857 5.42143 4.82843 6.17157L1.41421 9.58579C0.633166 10.3668 0.633165 11.6332 1.41421 12.4142L4.82843 15.8284Z"
							fill="white"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="flex flex-col items-center mt-10 text-sm">
	<button
		class="btn bg-[#f60c3e] text-white px-3 py-1 font-bold outline-0 transform scale-[1.008] transition-all duration-[0.17s] ease-any-hey hover:scale-[1.04] origin-hey"
		on:click={onExport}>导 出</button
	>
</div>

{#if dataUrl}
	<div class="max-w-xl p-10 mx-auto mb-10" transition:fade={{ delay: 50, duration: 200 }}>
		<img src={dataUrl} alt="" />
		<p class="text-xs text-center mt-1 text-[#f60c3e]">↑ 长按保存图片</p>
	</div>
{/if}

<style>
	.btn:active {
		filter: brightness(0.7) contrast(1.3);
		transform: scale(0.98);
		transition: all 0.3s cubic-bezier(0.08, 0.82, 0.2, 1);
	}
</style>
