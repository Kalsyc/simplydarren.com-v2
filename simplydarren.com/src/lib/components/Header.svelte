<script lang="ts">
	import { routes } from '$lib/constants/routes';
</script>

{#each routes as route}
	<a href={route.routePath}>{route.routeName}</a>
{/each}

<style>
</style>
