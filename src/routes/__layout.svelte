<script>
	import '../app.css';
	import { nick, avatar, content } from '../store';

	const JJ = {
		nick: 'JJ',
		avatar: '/JJ.jpg',
		content: '我做得真好呀'
	};

	const LEON = {
		nick: 'leongao',
		avatar: '/leongao.jpg',
		content: '原来我15年前就发明了 nomi  :⁍'
	};

	const onEgg = () => {
		if ($nick === 'JJ') {
			nick.set(LEON.nick);
			avatar.set(LEON.avatar);
			content.set(LEON.content);
		} else {
			nick.set(JJ.nick);
			avatar.set(JJ.avatar);
			content.set(JJ.content);
		}
	};
</script>

<svelte:head>
	<title>Anyway • 说</title>
</svelte:head>

<main style="min-height: calc(100vh - 80px); min-height: calc(100svh - 80px);">
	<slot />
</main>

<footer class="mx-auto flex flex-col items-center">
	<div class="flex items-center justify-center text-xs">
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
	<p class="text-zinc-400 mt-2 text-xs inline-block mx-auto" on:click={onEgg}>🥚</p>
</footer>
