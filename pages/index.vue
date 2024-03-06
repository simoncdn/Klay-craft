<script setup>
import AboutSection from '~/components/Home/AboutSection.vue'
import CraftingPassionSection from '~/components/Home/CraftingPassionSection.vue'
import HeroSection from '~/components/Home/HeroSection.vue'
import PotteryArtSection from '~/components/Home/PotteryArtSection.vue'
import ProductOverviewSection from '~/components/Home/ProductOverviewSection.vue'
import WorkshopSection from '~/components/Home/WorkshopSection.vue'
import FooterSection from '~/components/Layout/LayoutFooter.vue'
</script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<HeroSection />
		<AboutSection />
		<WorkshopSection />
		<ProductOverviewSection />
		<PotteryArtSection />
		<CraftingPassionSection />
		<FooterSection />
	</div>
</template>
