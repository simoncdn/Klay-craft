<script setup lang="ts">
import LayoutHeader from '../Layout/LayoutHeader.vue'
</script>

<template>
	<div :class="cn('w-full h-screen', 'flexCol')">
		<LayoutHeader text-color="text-carbon" background-color="bg-carbon" />

		<div :class="cn('w-full h-full', 'paddingX mt-16', 'flexBetween')">
			<div :class="cn('relative', 'w-4/12 h-full', 'gap-16', 'flexCol justify-center')">
				<h1 class="z-10 whitespace-nowrap">CERAMICS</h1>
				<p :class="cn('uppercase', 'txt-sm')">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas ex eu
					massa pulvinar, ac aliquet dui mollis.Lorem ipsum dolor sit amet, consectetur
					adipiscing elit. Duis egestas ex eu massa pulvinar, ac aliquet dui mollis.
				</p>
			</div>

			<div :class="cn('w-7/12 h-full')">
				<NuxtImg
					src="/images/ceramics_products.jpg"
					alt="Ceramics"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>
	</div>
</template>
