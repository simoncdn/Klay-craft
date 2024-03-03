<script setup lang="ts"></script>

<template>
	<div :class="cn('section', 'flexBetween py-16', 'bg-red-200')">
		<div :class="cn('w-4/12 h-full', 'bg-orange-200')">
			<NuxtImg
				src="/images/sasha_reed.jpg"
				alt="Sasha Reed"
				:class="
					cn(
						'w-full h-full',
						'object-cover grayscale',
						'hover:grayscale-0 transition-all duration-300'
					)
				"
			/>
		</div>
		<div :class="cn('w-7/12 h-full', 'gap-32', 'flexCol items-center')">
			<div :class="cn('gap-4', 'flexCol items-center')">
				<h3>SASHA REED</h3>
				<span class="txt-base text-mistyGreen">BASED IN AUSTRALIA</span>
			</div>

			<div :class="cn('flexBetween', 'txt-sm')">
				<p class="w-5/12">
					Sasha fell in love with pottery during a trip to Asia, where she discovered the
					ancestral techniques of master potters. This experience not only awakened in her
					a deep respect for this ancient art but also ignited a passion that has not left
					her since. Back in Australia, she decided to pursue this path, combining
					traditional methods with her own modern touch.
				</p>
				<p class="w-5/12">
					What fascinates Sasha about pottery is the transformation of clay into objects
					that are both beautiful and useful. For her, each piece is a journey - from the
					earth to the hand, then to the heart. Her artistic approach is based on a deep
					connection with nature and an unceasing quest for sustainability in her work.
				</p>
			</div>

			<h5 class="text-center">
				Pottery is more than an art to me; it's a meditation, a return to the basics, where
				every gesture and form tells a story.
			</h5>
		</div>
	</div>
</template>
