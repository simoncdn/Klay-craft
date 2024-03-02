<script setup lang="ts">
import { type Product } from '~/utils/products'

defineProps<{ product: Product }>()
</script>

<template>
	<li :class="cn('gap-4', 'flex items-center')">
		<div class="w-8/12">
			<img
				:src="product.image"
				:alt="product.name"
				:class="cn('w-full h-full', 'object-cover')"
			/>
		</div>

		<div :class="cn('h-full w-full', 'flexBetween flexCol')">
			<div :class="cn('gap-2', 'flexCol')">
				<h4 class="font-heading text-sm">{{ product.name }}</h4>
				<span>{{ formatPrice(product.price) }}</span>
			</div>

			<div :class="cn('w-full h-fit', 'gap-6', 'flexBetween items-end')">
				<div :class="cn('w-full h-full', 'border border-carbon', 'flexCenter')">
					<Button
						variant="darkGhost"
						size="full"
						shape="roundedNone"
						:class="cn('w-3/12')"
					>
						-
					</Button>

					<span
						:class="
							cn(
								'flex-1 h-full',
								'border-x border-x-carbon',
								'py-1',
								'flexCenter',
								'text-xs'
							)
						"
						>{{ product.quantity }}</span
					>

					<Button
						variant="darkGhost"
						size="full"
						shape="roundedNone"
						:class="cn('w-3/12')"
					>
						+
					</Button>
				</div>

				<button
					variant="ghost"
					:class="cn('flex-1', 'py-0', 'text-normal', 'hover:underline')"
				>
					Delete
				</button>
			</div>
		</div>
	</li>
</template>
