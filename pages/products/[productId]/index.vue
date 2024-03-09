<script setup lang="ts">
import { useToast } from '~/components/ui/toast'

const router = useRoute()
const client = useSupabaseClient()
const { toast } = useToast()
const product = ref()
const productId = router.params.productId

const getProduct = async () => {
	const { data, error } = await client.from('products').select().eq('id', productId).single()
	if (error) {
		console.error(error)
	} else {
		product.value = data
	}
}
const incrementQuantity = () => {
	product.value.quantity++
}
const decrementQuantity = () => {
	if (product.value.quantity > 0) {
		product.value.quantity--
	}
}
const resetQuantity = () => {
	product.value.quantity = 0
}
const handleAddToCart = () => {
	if (product.value.quantity === 0) return
	const productStringified = JSON.stringify([product.value])
	localStorage.setItem('basket', productStringified)
	resetQuantity()
	toast({
		title: 'Added to cart',
		description: `${product.value.name} has been added to your cart`
	})
}

onMounted(() => {
	getProduct()
})
</script>

<template>
	<div :class="cn('h-full w-full', 'flexCol')">
		<div :class="cn('h-full w-full', ' gap-8 pb-16', 'flexCol')">
			<div :class="cn('h-full w-full', 'paddingX gap-8', 'flexCol')">
				<NuxtLink
					to="/products"
					:class="cn('flex items-center', 'gap-2', 'txt-sm', 'hover:underline')"
				>
					<img
						src="/images/arrow.svg"
						alt="arrow"
						class="rotate-180 transition-all duration-300 hover:-translate-x-2"
					/>
				</NuxtLink>
				<div
					:class="
						cn(
							'h-full w-full',
							'gap-8 lg:gap-0',
							'lg:flexBetween flex flex-col-reverse lg:flex-row'
						)
					"
				>
					<div :class="cn('h-full w-full lg:w-6/12', 'gap-8 lg:gap-24', 'flexCol')">
						<div :class="cn('gap-2', 'flexCol')">
							<h3>{{ product?.name }}</h3>
							<span class="txt-base text-mistyGreen">By Sasha Reed</span>
						</div>

						<div :class="cn('w-full lg:w-8/12', 'gap-8', 'flexCol')">
							<div :class="cn('gap-4', 'flexCol')">
								<h6 :class="cn('gap-2', 'flex items-center', 'font-body')">
									DETAILS <span :class="cn('h-0.5 w-6', 'bg-carbon')"></span>
								</h6>
								<p class="txt-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Doloribus libero numquam incidunt sit, vitae accusantium sequi,
									nobis eius molestiae adipisci atque maxime praesentium.
								</p>
							</div>
							<div :class="cn('gap-4', 'flexCol')">
								<h6 :class="cn('gap-2', 'flex items-center', 'font-body')">
									MEASUREMENTS<span :class="cn('h-0.5 w-6', 'bg-carbon')"></span>
								</h6>
								<p class="txt-sm">Ø 14.5 x H 2.1cm</p>
							</div>
							<div :class="cn('gap-4', 'flexCol')">
								<h6 :class="cn('gap-2', 'flex items-center', 'font-body')">
									SHIPPING & CLICK AND COLLECT<span
										:class="cn('h-0.5 w-6', 'bg-carbon')"
									></span>
								</h6>
								<p class="txt-sm">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Doloribus libero numquam incidunt sit, vitae accusantium sequi,
									nobis eius molestiae adipisci atque maxime praesentium. Rem
									nulla exercitationem voluptatem beatae cupiditate perferendis!
								</p>
							</div>
						</div>

						<div
							:class="
								cn('h-10 w-full sm:w-8/12', 'border border-carbon', 'flexCenter')
							"
						>
							<Button
								variant="darkGhost"
								size="full"
								shape="roundedNone"
								:class="cn('w-2/12')"
								@click="decrementQuantity"
							>
								-
							</Button>

							<span
								:class="
									cn(
										'h-full w-3/12',
										'border-x border-x-carbon',
										'py-1',
										'flexCenter',
										'txt-xs'
									)
								"
								>{{ product?.quantity }}</span
							>

							<Button
								variant="darkGhost"
								size="full"
								shape="roundedNone"
								:class="cn('w-2/12')"
								@click="incrementQuantity"
							>
								+
							</Button>

							<Button
								variant="darkGhost"
								shape="roundedNone"
								:class="cn('flex-1', 'border-l border-l-carbon')"
								@click="handleAddToCart(product)"
							>
								Add to cart
							</Button>
						</div>
					</div>

					<div :class="cn('h-full flex-1')">
						<NuxtImg
							v-if="product?.image"
							:src="product?.image"
							:alt="product?.name"
							:class="cn('h-full w-full', 'object-cover')"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
