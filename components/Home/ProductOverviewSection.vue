<script setup lang="ts">
import { products } from '#imports'
import { useScroll } from '@vueuse/core'

const productsList = ref<HTMLElement | null>(null)
const { x } = useScroll(productsList)

const translateX = computed(() => {
	const containerWidth = productsList.value?.clientWidth || 0
	const contentWidth = productsList.value?.scrollWidth || 0
	const maxScroll = contentWidth - containerWidth
	const scrollbarContainerWidth = containerWidth / 3
	const scrollbarWidth = scrollbarContainerWidth / 1.5

	return (x.value / maxScroll) * scrollbarWidth
})
</script>

<template>
	<div :class="cn('section', 'py-16 gap-16 bg-red-200', 'flexCol')">
		<h3 class="text-center">
			New in <br />
			Selection
		</h3>

		<div :class="cn('h-fit w-full', 'gap-8', 'flex items-center bg-red-300')">
			<div :class="cn('h-full w-fit bg-blue-300', 'flexCenter')">
				<h3 :class="cn('-rotate-90', 'text-center')">
					<router-link to="/products" class="hover:underline">
						Shop all <br />
						ceramics
					</router-link>
				</h3>
			</div>
			<div ref="productsList" :class="cn(
				'relative scrollbar-none w-full overflow-x-auto',
				'flexCol justify-end items-start'
			)
				">
				<ul :class="cn('gap-4', 'flex flex-row')">
					<li v-for="product in products" :key="product.id" class="w-64 h-96">
						<router-link :to="`/product/${product.id}`" :class="cn('h-full', 'gap-4', 'flexCol')">
							<img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />

							<div :class="cn('gap-1', 'flexCol')">
								<div :class="cn('flexBetween items-center', 'txt-sm')">
									<span>{{ product.name }}</span>
									<span class="font-medium">{{
										formatPrice(product.price)
									}}</span>
								</div>
								<span class="txt-xs text-mistyGreen">{{
									product.description
								}}</span>
							</div>
						</router-link>
					</li>
				</ul>

				<div :class="cn('absolute left-0 bottom-0', 'w-4/12 bg-lightGray', 'mt-16', 'flex')">
					<span :class="cn('w-4/12 h-[2px]', 'bg-carbon')"
						:style="{ transform: `translateX(${translateX}px)` }"></span>
				</div>
			</div>
		</div>
	</div>
</template>
