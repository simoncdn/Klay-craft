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
	<div :class="cn('section', 'gap-16', 'flexCol')">
		<h2 class="text-center h-fit">
			New in <br />
			Selection
		</h2>

		<div :class="cn('h-full w-full', 'gap-8', 'flex flex-col lg:flex-row items-start')">
			<div :class="cn('h-full w-fit', 'flexCenter')">
				<h3 :class="cn('lg:-rotate-90', 'text-center')">
					<router-link
						to="/products"
						:class="cn('hover:opacity-70 transition-all duration-300')"
					>
						<span class="flex gap-4 lg:hidden"
							>Shop all ceramics
							<NuxtImg src="/images/arrow.svg" alt="arrow right" />
						</span>

						<span class="hidden lg:block">
							Shop all<br />
							ceramics
						</span>
					</router-link>
				</h3>
			</div>
			<div
				:class="
					cn(
						'relative overflow-x-hidden',
						'w-full h-full',
						'gap-8 lg:gap-0',
						'flex flex-col items-start lg:block'
					)
				"
			>
				<ul
					ref="productsList"
					:class="cn('overflow-x-auto scrollbar-none', 'min-w-0 w-full', 'gap-4', 'flex')"
				>
					<li
						v-for="product in products"
						:key="product.id"
						class="w-64 h-96 flex-shrink-0"
					>
						<router-link
							:to="`/products/${product.id}`"
							:class="cn('h-full group', 'gap-4', 'flexCol')"
						>
							<div class="relative h-full w-full">
								<img
									:src="product.image"
									:alt="product.name"
									:class="
										cn(
											'w-full h-full',
											'object-cover',
											'group-hover:brightness-75 transition-all duration-150'
										)
									"
								/>
								<Icon
									name="lucide:eye"
									:class="
										cn(
											'absolute top-0 right-0 left-0 bottom-0 opacity-0',
											'm-auto',
											'text-3xl text-beige',
											'group-hover:opacity-100 transition-all duration-150'
										)
									"
								/>
							</div>

							<div :class="cn('flexCol')">
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

				<div
					:class="
						cn(
							'block lg:absolute left-0 -bottom-0',
							'w-4/12 bg-lightGray',
							'lg:m-auto',
							'flex'
						)
					"
				>
					<span
						:class="cn('w-4/12 h-[2px]', 'bg-carbon')"
						:style="{ transform: `translateX(${translateX}px)` }"
					></span>
				</div>
			</div>
		</div>
	</div>
</template>
