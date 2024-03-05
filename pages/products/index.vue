<script setup lang="ts">
import LayoutFooter from '~/components/Layout/LayoutFooter.vue'
import ProductsBody from '~/components/Products/ProductsBody.vue'
import ProductsHeroSection from '~/components/Products/ProductsHeroSection.vue'
</script>

<template>
	<div :class="cn('h-full w-full', 'gap-16 lg:gap-32', 'flexCol')">
		<ProductsHeroSection />
		<ProductsBody />
		<LayoutFooter />
	</div>
</template>
