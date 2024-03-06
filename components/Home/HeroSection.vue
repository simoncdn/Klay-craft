<script setup lang="ts">
import LayoutHeader from '../Layout/LayoutHeader.vue'
</script>

<template>
	<div :class="cn('h-screen w-full')">
		<LayoutHeader />

		<video
			autoplay
			loop
			muted
			:class="
				cn(
					'absolute top-0 z-[-1]',
					'h-full w-full',
					'object-cover brightness-50 contrast-125'
				)
			"
		>
			<source src="/videos/ceramics-test.mp4" type="video/mp4" />
		</video>

		<div :class="cn('paddingX mt-24 gap-24', 'flexCol')">
			<h1 :class="cn('z-20', 'flexCol', 'text-beige')">
				<span>KLAY</span>
				<span>CRAFT</span>
			</h1>

			<div :class="cn('w-2/12', 'gap-2', 'flexCol')">
				<NuxtLink
					to="/products"
					:class="cn('group', 'flexBetween items-center', 'txt-sm text-beige')"
				>
					<span class="transition-all duration-300 group-hover:opacity-70">Shop now</span>
					<Icon
						name="lucide:move-right"
						class="transition-all duration-300 group-hover:translate-x-2"
					/>
				</NuxtLink>

				<span :class="cn('h-[1px] w-full', 'bg-beige')"></span>
			</div>

			<div
				:class="
					cn(
						'absolute bottom-0 left-0 right-0',
						'h-fit w-full',
						'mx-auto mb-8 gap-4',
						'flexCol items-center'
					)
				"
			>
				<span :class="cn('txt-sm text-beige')">SCROLL</span>

				<span :class="cn('h-16 w-[1px] bg-beige')"></span>
			</div>
		</div>
	</div>
</template>
