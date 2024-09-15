<script lang="ts">
	import { fly } from 'svelte/transition';
	import { routes } from '$lib/constants/routes';
	import SimplyDarrenIcon from '$lib/assets/svg/SimplyDarrenIcon.svelte';
	import darkModeIcon from '$lib/assets/img/dark-mode-icon.png';
	import lightModeIcon from '$lib/assets/img/light-mode-icon.png';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';

	let isDarkMode = $state(false);
	$effect(() => {
		isDarkMode = browser ? window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches : false;
	});

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		document.documentElement.setAttribute('data-theme', isDarkMode ? 'Dark' : 'Light');
	}
</script>

<div class="header">
	<div class="header__left">
		<a class="header__logo" href="/">
			<SimplyDarrenIcon />
			<span class="logo__title">Simply Darren</span>
		</a>
		<div class="header__nav">
			{#each routes as route}
				<a
					href={`/${route.routePath}`}
					class={`${route.routePath === $page.url.pathname.split('/')[1] ? 'routes__anchor--active' : ''}`}
				>
					{route.routeName}
				</a>
			{/each}
		</div>
	</div>
	<div class="header__right">
		<button class="right__dark-mode--button" onclick={toggleDarkMode}>
			{#if isDarkMode}
				<img
					class="dark-mode--button__img"
					in:fly={{ y: 100, duration: 750 }}
					alt="dark mode icon"
					src={darkModeIcon}
				/>
			{:else}
				<img
					class="dark-mode--button__img"
					in:fly={{ y: 100, duration: 750 }}
					alt="light mode icon"
					src={lightModeIcon}
				/>
			{/if}
		</button>
	</div>
</div>

<style>
	.header {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.header__left {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		font-weight: 600;
		font-size: 1.25rem;
	}

	.header__logo {
		display: none;
	}

	.logo__title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	.header__nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
	}

	.routes__anchor--active {
		border-bottom: 0.2rem solid;
		border-bottom-color: var(--secondary-color);
	}

	.right__dark-mode--button {
		background-color: transparent;
		border: 0.1rem var(--secondary-color) solid;
		height: 48px;
		width: 48px;
		padding: 0.25rem;
		border-radius: 0.25rem;
	}

	.dark-mode--button__img {
		height: 100%;
		width: 100%;
		aspect-ratio: 1;
	}

	.dark-mode--button__img:hover {
		cursor: pointer;
		opacity: 0.5;
	}

	@media screen and (min-width: 768px) {
		.header__logo {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		.header__nav {
			padding: 0;
		}
	}
</style>
