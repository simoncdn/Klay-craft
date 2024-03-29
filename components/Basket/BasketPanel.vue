<script setup lang="ts">
import { buttonVariants } from '../ui/button'
import { useStorage } from '@vueuse/core'
import { useBasketStore } from '~/store/useBasketStore'

const isOpenSheet = ref(false)
const { basket } = useBasketStore()

const closeSheet = () => {
	isOpenSheet.value = false
}
const basketSubtotal = computed(() => {
	return getBasketSubtotal(basket)
})
</script>

<template>
	<Sheet v-model:open="isOpenSheet">
		<SheetTrigger :class="cn(buttonVariants({ variant: 'ghost', shape: 'roundedNone' }))">
			<Icon name="lucide:shopping-basket" class="text-xl" />
		</SheetTrigger>
		<SheetContent :class="cn('gap-8', 'flexBetween flexCol')">
			<SheetHeader>
				<SheetTitle>SHOPPING CART</SheetTitle>
				<SheetDescription>
					Please note that although you can test the payment functionality, no actual
					charge will be made to your account. This step is designed solely for
					demonstration purposes to provide you with a comprehensive overview of the
					experience.
				</SheetDescription>
			</SheetHeader>

			<ul
				v-if="basket.length > 0"
				:class="cn('overflow-auto', 'w-full flex-1', 'gap-6', 'flexCol')"
			>
				<BasketPanelProduct
					v-for="product in basket"
					:key="product.id"
					:product="product"
				/>
			</ul>

			<div v-else :class="cn('gap-8', 'flexCol flexCenter', 'font-heading text-lg')">
				<Icon
					name="lucide:shopping-basket"
					:class="
						cn('h-20 w-20', 'p-4', 'rounded-full bg-mistyGreen/20', 'text-carbon/60')
					"
				/>
				<span>Your bag is empty !</span>
			</div>

			<SheetFooter :class="cn('border-t border-carbon')">
				<div :class="cn('w-full', 'py-4', 'flexBetween', 'txt-sm')">
					SUBTOTAL: <span class="font-semibold">{{ formatPrice(basketSubtotal) }}</span>
				</div>

				<NuxtLink
					to="/checkout"
					:class="
						cn(buttonVariants({ shape: 'roudedNone', variant: 'solid' }), 'heading-6')
					"
					@click="closeSheet"
					>Checkout
				</NuxtLink>
			</SheetFooter>
		</SheetContent>
	</Sheet>
</template>
