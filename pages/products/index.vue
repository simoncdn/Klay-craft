<script setup lang="ts">
import LayoutFooter from '~/components/Layout/LayoutFooter.vue'
import ProductsHeroSection from '~/components/Products/ProductsHeroSection.vue'
</script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<ProductsHeroSection />
		<!-- <LayoutFooter /> -->
	</div>
</template>
