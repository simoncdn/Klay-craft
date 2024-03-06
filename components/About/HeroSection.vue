<script setup lang="ts"></script>

<template>
	<div :class="cn('relative', 'h-screen w-full', 'flexCol')">
		<LayoutHeader text-color="text-carbon" background-color="bg-carbon" />

		<div
			:class="
				cn('paddingX gap-16 mt-24', 'w-full h-full', 'flexCol justify-end items-center')
			"
		>
			<h1 class="sticky -bottom-5">OUR WORLD</h1>

			<div :class="cn('relative', 'w-full h-4/6')">
				<video
					autoplay
					loop
					muted
					:class="
						cn(
							'absolute',
							'w-full h-full',
							'grayscale brightness-90 object-cover hover:grayscale-0 transition-all duration-300'
						)
					"
				>
					<source src="/videos/skylar_benett_video.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
</template>
