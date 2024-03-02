<script setup lang="ts">
import BasketPanel from './Basket/BasketPanel.vue'
import { Button } from './ui/button'

const routes = [
	{
		name: 'home',
		path: '/'
	},
	{
		name: 'our world',
		path: '/about'
	},
	{
		name: 'ceramics',
		path: '/products'
	}
] as const
type Routes = (typeof routes)[number]['path']

const router = useRouter()

const isSelected = (path: Routes) => router.currentRoute.value.path === path
</script>

<template>
	<div :class="cn('z-20', 'top-0', 'paddingX py-2', 'flexBetween items-center', 'text-beige')">
		<h6>KC</h6>
		<div :class="cn('gap-16', 'flexCenter items-center')">
			<nav>
				<ul :class="cn('flex space-x-8')">
					<li
						v-for="route in routes"
						:key="route.path"
						:class="
							cn(
								'cursor-pointer relative',
								'gap-2',
								'flexCol items-center',
								'txt-sm uppercase'
							)
						"
					>
						<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
						<span
							v-if="isSelected(route.path)"
							:class="
								cn(
									'absolute -bottom-4',
									'w-1.5 h-1.5',
									'rounded-full bg-white',
									'mx-auto'
								)
							"
						></span>
					</li>
				</ul>
			</nav>

			<div :class="cn('flex items-center')">
				<Button shape="roundedNone" variant="ghost">
					<Icon name="lucide:heart" />
				</Button>
				<Button shape="roundedNone" variant="ghost">
					<Icon name="lucide:user-2" />
				</Button>
				<BasketPanel />
			</div>
		</div>
	</div>
</template>
