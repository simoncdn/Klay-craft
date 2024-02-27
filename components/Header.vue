<script setup lang="ts">
const routes = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'our world',
		path: '/about',
	},
	{
		name: 'ceramics',
		path: '/products',
	}
] as const;
type Routes = (typeof routes)[number]["path"];

const router = useRouter()
const isSelected = (path: Routes) => router.currentRoute.value.path === path
</script>

<template>
	<div :class="cn('z-20', 'top-0', 'flexBetween paddingX py-2', 'text-white')">
		<span>KC</span>

		<nav>
			<ul :class="cn('flex space-x-8')">
				<li v-for="route in routes" :class="cn(
					'cursor-pointer',
					'gap-2',
					'flexCol items-center',
					'uppercase',
					)">

					<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
					<span v-if="isSelected(route.path)" :class="cn('w-1.5 h-1.5', 'rounded-full', 'bg-white')"></span>
				</li>
			</ul>
		</nav>
	</div>
</template>
