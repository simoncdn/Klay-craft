<script setup lang="ts"></script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<div :class="cn('relative', 'h-screen w-full', 'flexCol')">
			<div
				:class="cn('paddingX gap-16', 'h-full w-full', 'flexCol items-center justify-end')"
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
		<div
			:class="
				cn(
					'section',
					'gap-16 py-0 lg:gap-0 lg:py-16',
					'lg:flexBetween flex flex-col-reverse lg:flex-row'
				)
			"
		>
			<div :class="cn('h-full w-full lg:w-4/12')">
				<NuxtImg
					src="/images/sasha_reed.jpg"
					alt="Sasha Reed"
					:class="
						cn(
							'h-full w-full',
							'object-cover grayscale',
							'transition-all duration-300 hover:grayscale-0'
						)
					"
				/>
			</div>
			<div :class="cn('h-full w-full lg:w-7/12', 'gap-8 lg:gap-32', 'flexCol items-center')">
				<div :class="cn('gap-4', 'flexCol items-center')">
					<h3>SASHA REED</h3>
					<span class="txt-base text-mistyGreen">BASED IN AUSTRALIA</span>
				</div>

				<div
					:class="
						cn('gap-8 lg:gap-0', 'lg:flexBetween flex flex-col lg:flex-row', 'txt-sm')
					"
				>
					<p class="w-full lg:w-5/12">
						Sasha fell in love with pottery during a trip to Asia, where she discovered
						the ancestral techniques of master potters. This experience not only
						awakened in her a deep respect for this ancient art but also ignited a
						passion that has not left her since. Back in Australia, she decided to
						pursue this path, combining traditional methods with her own modern touch.
					</p>
					<p class="w-full lg:w-5/12">
						What fascinates Sasha about pottery is the transformation of clay into
						objects that are both beautiful and useful. For her, each piece is a journey
						- from the earth to the hand, then to the heart. Her artistic approach is
						based on a deep connection with nature and an unceasing quest for
						sustainability in her work.
					</p>
				</div>

				<h5 class="text-center">
					Pottery is more than an art to me; it's a meditation, a return to the basics,
					where every gesture and form tells a story.
				</h5>
			</div>
		</div>
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
					:class="
						cn('gap-4 lg:gap-0', 'lg:flexBetween flex flex-col lg:flex-row', 'txt-sm')
					"
				>
					<p class="w-full lg:w-5/12">
						Skylar has always been fascinated by the creative process, exploring various
						forms of art before settling on pottery. It's the tactile, down-to-earth
						aspect of pottery that captivated her, offering a unique means of
						expression. Her approach to pottery skillfully blends contemporary
						aesthetics and functionality, making each creation a usable work of art in
						everyday life.
					</p>
					<p class="w-full lg:w-5/12">
						For Skylar, pottery is not just a profession; it's a form of dialogue with
						the world around her. She draws inspiration from natural patterns and the
						richness of Australian landscapes, seeking to capture the essence of her
						homeland in every piece she creates. Her commitment to the environment is
						reflected in the use of sustainable materials and in promoting environmental
						awareness through her art.
					</p>
				</div>

				<h5 class="text-center">
					Each piece of pottery I create is a tribute to the earth: a reminder of its
					beauty, fragility, and our responsibility to preserve it.
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
	</div>
</template>
