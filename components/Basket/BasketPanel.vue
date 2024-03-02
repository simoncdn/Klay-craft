<script setup lang="ts">
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui/sheet'
import { products } from '~/utils/products'
import { buttonVariants } from '../ui/button'
import BasketPanelProduct from './BasketPanelProduct.vue'
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

			<ul :class="cn('overflow-auto', 'flex-1 w-full', 'gap-6', 'flexCol')">
				<BasketPanelProduct
					v-for="product in products"
					:key="product.id"
					:product="product"
				/>
			</ul>

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
