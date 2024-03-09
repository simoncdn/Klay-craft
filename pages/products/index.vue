<script setup lang="ts">
const products = ref([])
const client = useSupabaseClient()

const getProducts = async () => {
	const { data, error } = await client.from('products').select('*')
	if (error) {
		console.error(error)
	} else {
		products.value = data
	}
}

onMounted(() => {
	getProducts()
})
</script>

<template>
	<div :class="cn('h-full w-full', 'gap-16 lg:gap-32', 'flexCol')">
		<div :class="cn('h-screen w-full', 'flexCol')">
			<div
				:class="
					cn(
						'h-full w-full',
						'paddingX mt-16 gap-4 lg:gap-0',
						'lg:flexBetween flex flex-col lg:flex-row'
					)
				"
			>
				<div
					:class="
						cn(
							'relative',
							'h-fit w-full lg:w-4/12',
							'gap-8 lg:gap-16',
							'flexCol justify-center'
						)
					"
				>
					<h1 class="z-10 hidden lg:block lg:whitespace-nowrap">CERAMICS</h1>
					<p :class="cn('uppercase', 'txt-sm')">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas ex eu
						massa pulvinar, ac aliquet dui mollis.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Duis egestas ex eu massa pulvinar, ac aliquet
						dui mollis.
					</p>
				</div>

				<div :class="cn('h-full w-full lg:w-7/12')">
					<NuxtImg
						src="/images/ceramics_products.jpg"
						alt="Ceramics"
						class="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
		<div :class="cn('h-full w-full', 'paddingX gap-4', 'flexCol')">
			<div :class="cn('h-fit w-full', 'py-2', 'flexBetween')">
				<div :class="cn('gap-2', 'flexCenter', 'txt-sm')">
					<span class="text-mistyGreen">FILTER</span>
					<span class="h-4 w-[1px] bg-carbon"></span>
					<span :class="cn('gap-2', 'flexCenter')"
						>ARTIST
						<Icon name="lucide:chevron-down" />
					</span>
				</div>
				<div :class="cn('h-full w-fit', 'gap-8', 'flexBetween items-center')">
					<div :class="cn('h-fit', 'gap-2', 'flexCenter', 'txt-sm')">
						<span class="text-mistyGreen">SORT BY</span>
						<span class="h-4 w-[1px] bg-carbon"></span>
						<span :class="cn('gap-2', 'flexCenter')"
							>DEFAULT
							<Icon name="lucide:chevron-down" />
						</span>
					</div>
				</div>
			</div>

			<ul
				:class="
					cn(
						'h-fit',
						'gap-x-4 gap-y-8',
						'auto-rows-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
					)
				"
			>
				<li
					v-for="product in products"
					:key="product.id"
					:class="cn('h-full w-full', 'gap-2', 'flexCol')"
				>
					<NuxtLink
						:to="`/products/${product.id}`"
						:class="cn('group relative', 'h-full w-full')"
					>
						<NuxtImg
							v-if="product.image"
							:src="product.image"
							:alt="product.name"
							:class="
								cn(
									'h-full w-full',
									'object-cover',
									'transition-all duration-300 group-hover:brightness-75'
								)
							"
						/>
						<Icon
							name="lucide:eye"
							:class="
								cn(
									'absolute bottom-0 left-0 right-0 top-0 opacity-0',
									'm-auto',
									'text-2xl text-beige',
									'transition-all duration-300 group-hover:opacity-100'
								)
							"
						/>
					</NuxtLink>

					<div :class="cn('h-full', 'flexCol')">
						<div :class="cn('flexBetween items-center', 'txt-sm')">
							<h6>{{ product.name }}</h6>
							<span class="font-medium">{{ formatPrice(product.price) }}</span>
						</div>
						<p class="txt-xs text-mistyGreen">{{ product.description }}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
