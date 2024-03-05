<script setup lang="ts"></script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<AboutHeroSection />
		<AboutSashaSection />
		<AboutSkylarSection />

		<!-- <div :class="cn('overflow-hidden', 'w-full g:w-screen h-full lg:h-screen', 'paddingX lg:px-0 gap-16', 'flex flex-col lg:flex-row lg:flexCenter')"> -->
		<!-- 	<NuxtImg -->
		<!-- 		src="/images/skylar_benett_2.jpg" -->
		<!-- 		alt="About" -->
		<!-- 		:class=" -->
		<!-- 			cn( -->
		<!-- 				'w-full lg:w-6/12 h-full lg:h-5/6', -->
		<!-- 				'object-cover', -->
		<!-- 				'grayscale', -->
		<!-- 				'hover:grayscale-0 transition-all duration-300' -->
		<!-- 			) -->
		<!-- 		" -->
		<!-- 	/> -->
		<!-- 	<NuxtImg -->
		<!-- 		src="/images/sasha_reed_2.jpg" -->
		<!-- 		alt="About" -->
		<!-- 		:class=" -->
		<!-- 			cn( -->
		<!-- 				'w-full lg:w-6/12 h-full lg:h-5/6', -->
		<!-- 				'object-cover', -->
		<!-- 				'grayscale', -->
		<!-- 				'hover:grayscale-0 transition-all duration-300' -->
		<!-- 			) -->
		<!-- 		" -->
		<!-- 	/> -->
		<!-- </div> -->
		<LayoutFooter />
	</div>
</template>
