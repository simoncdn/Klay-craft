<script setup lang="ts">
import LayoutHeader from '../Layout/LayoutHeader.vue'
</script>

<template>
	<div :class="cn('h-screen w-full', 'flexCol')">
		<LayoutHeader text-color="text-carbon" background-color="bg-carbon" />

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
					massa pulvinar, ac aliquet dui mollis.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Duis egestas ex eu massa pulvinar, ac aliquet dui mollis.
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
</template>
