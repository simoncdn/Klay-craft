<script setup lang="ts"></script>

<template>
	<div :class="cn('relative', 'h-screen w-full', 'flexCol')">
		<LayoutHeader text-color="text-carbon" background-color="bg-carbon" />

		<div
			:class="
				cn('paddingX mt-24 gap-16', 'h-full w-full', 'flexCol items-center justify-end')
			"
		>
			<h1 class="sticky -bottom-5">OUR WORLD</h1>

			<div :class="cn('relative', 'h-4/6 w-full')">
				<video
					autoplay
					loop
					muted
					:class="
						cn(
							'absolute',
							'h-full w-full',
							'object-cover brightness-90 grayscale transition-all duration-300 hover:grayscale-0'
						)
					"
				>
					<source src="/videos/skylar_benett_video.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	</div>
</template>
