<script setup lang="ts">
import { type Product } from '~/utils/products'
import { useBasketStore } from '~/store/useBasketStore'

defineProps<{ product: Product }>()

const { deleteToBasket, incrementQuantity, decrementQuantity } = useBasketStore()
const handleDelete = (productId: string) => {
	deleteToBasket(productId)
}
</script>

<template>
	<li :class="cn('gap-4', 'flex items-center')">
		<div class="w-8/12">
			<img
				:src="product.image"
				:alt="product.name"
				:class="cn('h-full w-full', 'object-cover')"
			/>
		</div>

		<div :class="cn('h-full w-full', 'flexBetween flexCol')">
			<div :class="cn('gap-2', 'flexCol')">
				<h6>{{ product.name }}</h6>
				<span class="txt-xs font-medium">{{ formatPrice(product.price) }}</span>
			</div>

			<div :class="cn('h-fit w-full', 'gap-6', 'flexBetween items-end')">
				<div :class="cn('h-full w-full', 'border border-carbon', 'flexCenter')">
					<Button
						variant="darkGhost"
						size="full"
						shape="roundedNone"
						:class="cn('w-3/12')"
						@click="decrementQuantity(product.id)"
					>
						-
					</Button>

					<span
						:class="
							cn(
								'h-full flex-1',
								'border-x border-x-carbon',
								'py-1',
								'flexCenter',
								'txt-xs'
							)
						"
						>{{ product.quantity }}</span
					>

					<Button
						variant="darkGhost"
						size="full"
						shape="roundedNone"
						:class="cn('w-3/12')"
						@click="incrementQuantity(product.id)"
					>
						+
					</Button>
				</div>

				<button
					variant="ghost"
					:class="cn('flex-1', 'py-0', 'txt-xs', 'hover:underline')"
					@click="handleDelete(product.id)"
				>
					DELETE
				</button>
			</div>
		</div>
	</li>
</template>
