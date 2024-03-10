<script setup lang="ts">
import { products } from '#imports'
import { useScroll } from '@vueuse/core'

const productsList = ref<HTMLElement | null>()
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
		<h2 class="h-fit text-center">
			New in <br />
			Selection
		</h2>

		<div :class="cn('h-full w-full', 'gap-8', 'flex flex-col items-start lg:flex-row')">
			<div :class="cn('h-full w-fit', 'flexCenter')">
				<h3 :class="cn('lg:-rotate-90', 'text-center')">
					<router-link
						to="/products"
						:class="cn('transition-all duration-300 hover:opacity-70')"
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
						'h-full w-full',
						'gap-8 lg:gap-0',
						'flex flex-col items-start lg:block'
					)
				"
			>
				<ul
					ref="productsList"
					:class="cn('scrollbar-none overflow-x-auto', 'w-full min-w-0', 'gap-4', 'flex')"
				>
					<li
						v-for="product in products"
						:key="product.id"
						class="h-96 w-64 flex-shrink-0"
					>
						<router-link
							:to="`/products/${product.id}`"
							:class="cn('group h-full', 'gap-4', 'flexCol')"
						>
							<div class="relative h-full w-full">
								<img
									:src="product.image"
									:alt="product.name"
									:class="
										cn(
											'h-full w-full',
											'object-cover',
											'transition-all duration-150 group-hover:brightness-75'
										)
									"
								/>
								<Icon
									name="lucide:eye"
									:class="
										cn(
											'absolute bottom-0 left-0 right-0 top-0 opacity-0',
											'm-auto',
											'text-3xl text-beige',
											'transition-all duration-150 group-hover:opacity-100'
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
							'-bottom-0 left-0 block lg:absolute',
							'w-4/12 bg-lightGray',
							'lg:m-auto',
							'flex'
						)
					"
				>
					<span
						:class="cn('h-[2px] w-4/12', 'bg-carbon')"
						:style="{ transform: `translateX(${translateX}px)` }"
					></span>
				</div>
			</div>
		</div>
	</div>
</template>
