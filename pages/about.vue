<script setup lang="ts"></script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<AboutHeroSection />
		<AboutSashaSection />
		<AboutSkylarSection />

		<div :class="cn('w-full h-screen', 'flexCenter')">
			<NuxtImg
				src="/images/skylar_benett_2.jpg"
				alt="About"
				:class="
					cn(
						'w-full h-5/6',
						'object-cover',
						'grayscale',
						'hover:grayscale-0 transition-all duration-300'
					)
				"
			/>
			<NuxtImg
				src="/images/sasha_reed_2.jpg"
				alt="About"
				:class="
					cn(
						'w-full h-5/6',
						'object-cover',
						'grayscale',
						'hover:grayscale-0 transition-all duration-300'
					)
				"
			/>
		</div>
		<LayoutFooter />
	</div>
</template>
