<script setup lang="ts">
import { products } from '~/utils/products'
import { buttonVariants } from '../ui/button'
</script>

<template>
	<Sheet>
		<SheetTrigger :class="cn(buttonVariants({ variant: 'ghost', shape: 'roundedNone' }))">
			<Icon name="lucide:shopping-basket" />
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
				v-if="products.length > 0"
				:class="cn('overflow-auto', 'w-full flex-1', 'gap-6', 'flexCol')"
			>
				<BasketPanelProduct
					v-for="product in products"
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
					SUBTOTAL: <span class="font-semibold">00.00$</span>
				</div>

				<Button shape="roundedNone" variant="solid" :class="cn('heading-6')"
					>Checkout</Button
				>
			</SheetFooter>
		</SheetContent>
	</Sheet>
</template>
