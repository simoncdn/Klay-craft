<script setup lang="ts">
import { useBasketStore } from '~/store/useBasketStore'

const { basket } = useBasketStore()
const shipping = ref(10)

const basketSubtotal = computed(() => {
	return getBasketSubtotal(basket)
})
const total = computed(() => {
	return basketSubtotal.value + shipping.value
})
</script>

<template>
	<div :class="cn('section', 'gap-16', 'flex')">
		<div :class="cn('h-full flex-1', '')">
			<h3>Checkout</h3>

			<div :class="cn('w-fit')">
				Vous n'etes pas connecté connectez-vous pour continuer

				<Button variant="solid" size="full" shape="roundedNone" to="/login"> Login </Button>
			</div>
		</div>

		<div :class="cn('h-fit w-3/12', 'border border-carbon', 'gap-8 p-4', 'flexCol')">
			<h4>Your order</h4>

			<ul :class="cn('gap-8', 'flexCol')">
				<li
					v-for="product in basket"
					:key="product.id"
					:class="cn('w-full', 'gap-4', 'flexBetween')"
				>
					<div class="w-8/12">
						<img
							:src="product.image"
							:alt="product.name"
							:class="cn('h-full w-full', 'object-cover')"
						/>
					</div>

					<div :class="cn('h-full w-full', 'flexBetween')">
						<div :class="cn('gap-2', 'flexCol')">
							<h6>{{ product.name }}</h6>
							<span class="txt-sm font-medium">{{ formatPrice(product.price) }}</span>
							<span>Qty: {{ product.quantity }}</span>
						</div>
					</div>
				</li>
			</ul>

			<span :class="cn('h-[1px] w-full', 'bg-carbon')"></span>

			<div :class="cn('gap-6', 'flexCol')">
				<div :class="cn('gap-1', 'flexCol')">
					<span :class="cn('flexBetween')"
						>SUBTOTAL: <span>{{ formatPrice(basketSubtotal) }}</span></span
					>
					<span :class="cn('flexBetween')"
						>SHIPPING: <span>{{ formatPrice(shipping) }}</span></span
					>
				</div>

				<h5 :class="cn('flexBetween', 'font-body font-medium')">
					Total: <span>{{ formatPrice(total) }}</span>
				</h5>
			</div>
		</div>
	</div>
</template>
