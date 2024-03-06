<script setup lang="ts"></script>

<template>
	<div :class="cn('h-full w-full', 'paddingX gap-4', 'flexCol')">
		<div :class="cn('w-full h-fit', 'py-2', 'flexBetween')">
			<div :class="cn('gap-2', 'flexCenter', 'txt-sm')">
				<span class="text-mistyGreen">FILTER</span>
				<span class="bg-carbon w-[1px] h-4"></span>
				<span :class="cn('gap-2', 'flexCenter')"
					>ARTIST
					<Icon name="lucide:chevron-down" />
				</span>
			</div>
			<div :class="cn('h-full w-fit', 'gap-8', 'flexBetween items-center')">
				<div :class="cn('h-fit', 'gap-2', 'flexCenter', 'txt-sm')">
					<span class="text-mistyGreen">SORT BY</span>
					<span class="bg-carbon w-[1px] h-4"></span>
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
					'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fit'
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
					:class="cn('relative group', 'w-full h-full')"
				>
					<NuxtImg
						:src="product.image"
						:alt="product.name"
						:class="
							cn(
								'w-full h-full',
								'object-cover',
								'group-hover:brightness-75 transition-all duration-300'
							)
						"
					/>
					<Icon
						name="lucide:eye"
						:class="
							cn(
								'absolute top-0 right-0 left-0 bottom-0 opacity-0',
								'm-auto',
								'text-2xl text-beige',
								'group-hover:opacity-100 transition-all duration-300'
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
</template>
