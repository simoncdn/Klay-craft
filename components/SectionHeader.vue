<script setup lang="ts">
import { formatPrice } from '~/utils'
import { Button, buttonVariants } from './ui/button'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet'
import { products } from '~/utils/products'

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
		<span class="font-heading text-2xl">KC</span>
		<div :class="cn('gap-16', 'flexCenter items-baseline')">
			<nav>
				<ul :class="cn('flex space-x-8')">
					<li v-for="route in routes" :key="route.path"
						:class="cn('cursor-pointer relative', 'gap-2', 'flexCol items-center', 'uppercase')">
						<nuxt-link :to="route.path">{{ route.name }}</nuxt-link>
						<span v-if="isSelected(route.path)" :class="cn('absolute -bottom-4', 'w-1.5 h-1.5', 'rounded-full bg-white', 'mx-auto')"></span>
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
				<Sheet>
					<SheetTrigger :class="cn(buttonVariants({ variant: 'ghost', shape: 'roundedNone' }))">
						<Icon name="lucide:shopping-basket" />
					</SheetTrigger>
					<SheetContent :class="cn('gap-8', 'flexBetween flexCol')">
						<SheetHeader>
							<SheetTitle :class="cn('')">SHOPPING CART</SheetTitle>
							<SheetDescription>
								Please note that although you can test the payment functionality, no
								actual charge will be made to your account. This step is designed solely
								for demonstration purposes to provide you with a comprehensive overview
								of the experience.
							</SheetDescription>
						</SheetHeader>

						<ul :class="cn('overflow-auto', 'flex-1 w-full', 'gap-6', 'flexCol')">
							<li v-for="product in products" :key="product.id" :class="cn('gap-4', 'flex items-center')">
								<div class="w-8/12">
									<NuxtImg :src="product.image" :alt="product.name"
										:class="cn('w-full h-full', 'object-cover')" />
								</div>

								<div :class="cn('h-full w-full', 'flexBetween flexCol')">
									<div :class="cn('gap-2', 'flexCol')">
										<h4 class="font-heading text-sm">{{ product.name }}</h4>
										<span>{{ formatPrice(product.price) }}</span>
									</div>

									<div :class="cn('w-full h-fit', 'gap-6', 'flexBetween items-end')">
										<div :class="cn(
											'w-full h-full',
											'border border-carbon',
											'flexCenter'
										)
											">
											<Button variant="darkGhost" size="full" shape="roundedNone"
												:class="cn('w-3/12')">
												-
											</Button>

											<span :class="cn(
												'flex-1 h-full',
												'border-x border-x-carbon',
												'py-1',
												'flexCenter',
												'text-xs'
											)
												">{{ product.quantity }}</span>

											<Button variant="darkGhost" size="full" shape="roundedNone"
												:class="cn('w-3/12')">
												+
											</Button>
										</div>

										<button variant="ghost" :class="cn('flex-1', 'py-0', 'text-normal', 'hover:underline')
											">
											Delete
										</button>
									</div>
								</div>
							</li>
						</ul>

						<SheetFooter :class="cn('border-t border-carbon')">
							<div :class="cn('w-full', 'py-4', 'flexBetween')">
								SUBTOTAL: <span class="font-semibold">00.00$</span>
							</div>

							<Button shape="roundedNone" variant="solid"
								:class="cn('text-lg font-heading')">Checkout</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</div>
</template>
