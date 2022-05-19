<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Anyway • 说</title>
</svelte:head>
<slot />

<footer class="fixed bottom-4 text-xs left-1/2 transform -translate-x-1/2">
	<div class="flex items-center">
		<span class="">友情链接：</span>
		<a href="https://anyway.fm/" class="flex items-center">
			<img
				class="w-8"
				src="https://s.anw.red/anyway.fm/logo.svg"
				alt="Anyway.FM 设计杂谈 • UI 设计师 JJ Ying 和 Leon Gao 主播的设计杂谈播客"
			/>
			安妮薇时报
		</a>
	</div>
	<p class="text-center transform scale-95 text-zinc-400 mt-1">🥚彩蛋明天加</p>
</footer>
