<script setup lang="ts">
import { buttonVariants } from '~/components/ui/button'
import { useToast } from '~/components/ui/toast'
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
const { toast } = useToast()
const activeColor = ref('var(--carbon)')
const isSelected = (path: Routes) => router.currentRoute.value.path === path
const user = useSupabaseUser()
const supabase = useSupabaseClient()

async function signOut() {
	const { error } = await supabase.auth.signOut()
	if (error) {
		toast({
			title: 'Error',
			description: error.message,
			variant: 'destructive'
		})
	} else {
		toast({
			title: 'Success',
			description: 'You have been signed out',
			variant: 'default'
		})
	}
}
watchEffect(() => {
	if (router.currentRoute.value.path === '/') {
		activeColor.value = 'var(--beige)'
	} else {
		activeColor.value = 'var(--carbon)'
	}
})
</script>

<template>
	<header
		:class="cn('z-20', 'top-0', 'paddingX py-2', 'flexBetween items-center')"
		:style="{ color: activeColor }"
	>
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
								cn('absolute -bottom-4', 'h-1.5 w-1.5', 'rounded-full', 'mx-auto')
							"
							:style="{ backgroundColor: activeColor }"
						></span>
					</li>
				</ul>
			</nav>

			<div :class="cn('flex items-center')">
				<!-- <Button shape="roundedNone" variant="ghost"> -->
				<!-- 	<Icon name="lucide:heart" /> -->
				<!-- </Button> -->
				<DropdownMenu>
					<DropdownMenuTrigger
						:class="cn(buttonVariants({ shape: 'roundedNone', variant: 'ghost' }))"
					>
						<Icon name="lucide:user-2" />
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem v-if="user" @click="signOut">Sign Out</DropdownMenuItem>
						<DropdownMenuItem v-else>
							<NuxtLink
								to="/login"
								:class="
									cn(buttonVariants({ shape: 'roundedNone', variant: 'ghost' }))
								"
							>
								Sign In
							</NuxtLink>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<BasketPanel />
			</div>
		</div>
	</header>
</template>
