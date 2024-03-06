<script setup lang="ts"></script>

<template>
	<div
		:class="
			cn(
				'section',
				'gap-16 py-0 lg:gap-0 lg:py-16',
				'lg:flexBetween flex flex-col lg:flex-row'
			)
		"
	>
		<div :class="cn('h-full w-full lg:w-7/12', 'gap-8 lg:gap-32', 'flexCol items-center')">
			<div :class="cn('gap-4', 'flexCol items-center')">
				<h3>SKYLAR BENETT</h3>
				<span class="txt-base text-mistyGreen">BASED IN AUSTRALIA</span>
			</div>

			<div
				:class="cn('gap-4 lg:gap-0', 'lg:flexBetween flex flex-col lg:flex-row', 'txt-sm')"
			>
				<p class="w-full lg:w-5/12">
					Skylar has always been fascinated by the creative process, exploring various
					forms of art before settling on pottery. It's the tactile, down-to-earth aspect
					of pottery that captivated her, offering a unique means of expression. Her
					approach to pottery skillfully blends contemporary aesthetics and functionality,
					making each creation a usable work of art in everyday life.
				</p>
				<p class="w-full lg:w-5/12">
					For Skylar, pottery is not just a profession; it's a form of dialogue with the
					world around her. She draws inspiration from natural patterns and the richness
					of Australian landscapes, seeking to capture the essence of her homeland in
					every piece she creates. Her commitment to the environment is reflected in the
					use of sustainable materials and in promoting environmental awareness through
					her art.
				</p>
			</div>

			<h5 class="text-center">
				Each piece of pottery I create is a tribute to the earth: a reminder of its beauty,
				fragility, and our responsibility to preserve it.
			</h5>
		</div>
		<div :class="cn('h-full w-full lg:w-4/12')">
			<NuxtImg
				src="/images/skylar_benett.jpg"
				alt="Skylar Benett"
				:class="
					cn(
						'h-full w-full',
						'object-cover grayscale',
						'transition-all duration-300 hover:grayscale-0'
					)
				"
			/>
		</div>
	</div>
</template>
