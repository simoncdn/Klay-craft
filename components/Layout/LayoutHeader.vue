<script setup lang="ts">
import BasketPanel from '../Basket/BasketPanel.vue'
import { Button } from '../ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui/sheet'

defineProps({
	textColor: {
		type: String,
		default: 'text-beige'
	},
	backgroundColor: {
		type: String,
		default: 'bg-beige'
	}
})
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
	<div :class="cn('z-20', 'top-0', 'paddingX py-2', 'flexBetween items-center', textColor)">
		<div>
			<NuxtLink to="/" :class="cn('hidden lg:flex')">
				<h6>KC</h6>
			</NuxtLink>

			<Sheet>
				<SheetTrigger :class="cn('block lg:hidden')">
					<Icon name="lucide:align-left" :class="cn('text-2xl')" />
				</SheetTrigger>
				<SheetContent side="left">
					<div :class="cn('gap-4', 'flexCol')">
						<nav>
							<ul :class="cn('gap-8', 'flexCol items-center')">
								<li
									v-for="route in routes"
									:key="route.path"
									:class="cn('text-2xl uppercase')"
								>
									<NuxtLink
										:to="route.path"
										:class="cn('transition-all duration-300 hover:opacity-70')"
									>
										{{ route.name }}
									</NuxtLink>
								</li>
							</ul>
						</nav>
					</div>
				</SheetContent>
			</Sheet>
		</div>

		<div :class="cn('gap-16', 'flexCenter items-center')">
			<nav :class="cn('hidden lg:flex')">
				<ul :class="cn('flex space-x-8')">
					<li
						v-for="route in routes"
						:key="route.path"
						:class="
							cn(
								'relative cursor-pointer',
								'gap-2',
								'flexCol items-center',
								'txt-sm uppercase'
							)
						"
					>
						<NuxtLink
							:to="route.path"
							class="transition-all duration-300 hover:opacity-70"
							>{{ route.name }}
						</NuxtLink>
						<span
							v-if="isSelected(route.path)"
							:class="
								cn(
									'absolute -bottom-4',
									'h-1.5 w-1.5',
									'rounded-full',
									backgroundColor,
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
