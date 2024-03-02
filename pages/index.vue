<script setup>
import AboutSection from '~/components/Home/AboutSection.vue'
import HeroSection from '~/components/Home/HeroSection.vue'
import ProductOverviewSection from '~/components/Home/ProductOverviewSection.vue'
import WorkshopSection from '~/components/Home/WorkshopSection.vue'
</script>

<template>
	<div :class="cn('h-full w-full', 'flexCol')">
		<HeroSection />
		<AboutSection />
		<WorkshopSection />
		<ProductOverviewSection />
	</div>
</template>
