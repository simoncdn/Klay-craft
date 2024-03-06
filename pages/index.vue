<script setup></script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<div :class="cn('h-screen w-full')">
			<video
				autoplay
				loop
				muted
				:class="
					cn(
						'absolute top-0 z-[-1]',
						'h-full w-full',
						'object-cover brightness-50 contrast-125'
					)
				"
			>
				<source src="/videos/ceramics-test.mp4" type="video/mp4" />
			</video>

			<div :class="cn('paddingX mt-24 gap-24', 'flexCol')">
				<h1 :class="cn('z-20', 'flexCol', 'text-beige')">
					<span>KLAY</span>
					<span>CRAFT</span>
				</h1>

				<div :class="cn('w-2/12', 'gap-2', 'flexCol')">
					<NuxtLink
						to="/products"
						:class="cn('group', 'flexBetween items-center', 'txt-sm text-beige')"
					>
						<span class="transition-all duration-300 group-hover:opacity-70"
							>Shop now</span
						>
						<Icon
							name="lucide:move-right"
							class="transition-all duration-300 group-hover:translate-x-2"
						/>
					</NuxtLink>

					<span :class="cn('h-[1px] w-full', 'bg-beige')"></span>
				</div>

				<div
					:class="
						cn(
							'absolute bottom-0 left-0 right-0',
							'h-fit w-full',
							'mx-auto mb-8 gap-4',
							'flexCol items-center'
						)
					"
				>
					<span :class="cn('txt-sm text-beige')">SCROLL</span>

					<span :class="cn('h-16 w-[1px] bg-beige')"></span>
				</div>
			</div>
		</div>
		<div
			:class="cn('section', 'gap-16 lg:gap-0 lg:py-16', 'flexCol lg:flexBetween lg:flex-row')"
		>
			<div
				:class="cn('relative h-full w-full lg:w-5/12', 'gap-16', 'flexCol justify-center')"
			>
				<h2 class="z-10 text-center lg:whitespace-nowrap lg:text-left">OUR WORLD</h2>

				<div :class="cn('gap-16', 'flexCol justify-center')">
					<div :class="cn('w-full', 'gap-8', 'flexCol', 'txt-sm')">
						<p>
							In the heart of Australia's art scene, Sasha Reed and Skylar Bennett
							have turned their passion for pottery into a true haven of creativity.
							Their studio, a crossroads of tradition and innovation, reflects their
							commitment to the craft. Each piece tells a story of resilience, beauty,
							and the unbreakable bond between the artists and their material. Their
							journey is an ode to dream realization, building a community that values
							sustainability, art, and the shared joy of creation. Their work, a
							harmonious blend of earthy textures and vibrant glazes, invites us to
							see pottery not just as objects, but as carriers of history and culture.
						</p>
						<p>
							The journey of Sasha Reed and Skylar Bennett through the world of
							pottery is a captivating story of friendship, art, and ecological
							commitment. Together, they've established a studio where each piece
							celebrates the earth's raw beauty, shaped by skilled hands and fiery
							determination. Their story is an invitation to uncover the soul behind
							the clay, the passion behind their eco-friendly creations, and the
							heritage they aim to preserve with every unique piece.
						</p>
					</div>

					<NuxtLink
						to="/about"
						:class="
							cn('w-fit', 'flexCol', 'transition-all duration-300 hover:opacity-70')
						"
					>
						READ OUR STORY

						<span :class="cn('h-[1px] w-full', 'bg-carbon')"></span>
					</NuxtLink>
				</div>
			</div>

			<div :class="cn('relative', 'w-full lg:w-6/12')">
				<span :class="cn('absolute -left-2 bottom-0', 'h-2/6 w-[1px]', 'bg-carbon')"></span>
				<NuxtImg
					src="/images/Sasha_Skylar.jpg"
					alt="Sasha Reed and Skylar Benett"
					:class="cn('h-full w-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute -bottom-2 right-0', 'h-[1px] w-6/12', 'bg-carbon')"
				></span>
			</div>
		</div>
		<HomeWorkshopSection />
		<ProductOverviewSection />

		<div :class="cn('section', 'gap-16 lg:gap-0', 'lg:flexBetween flex flex-col lg:flex-row')">
			<div :class="cn('relative', 'h-full w-full lg:w-5/12')">
				<NuxtImg
					src="/images/ceramic_art_1.jpg"
					alt="pottery art"
					:class="cn('h-full w-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute -bottom-2 left-0', 'h-[1px] w-5/12', 'bg-carbon')"
				></span>
			</div>
			<div
				:class="cn('h-full w-full lg:w-6/12', 'gap-8 lg:gap-16', 'flexCol justify-center')"
			>
				<h4>
					Every piece of pottery carries within it the soul of its creator.It is a dance
					between clay and artist, where every touch brings to life a form that didn't
					exist before.
				</h4>

				<div :class="cn('w-10/12', 'gap-6', 'flexCol', 'txt-sm')">
					<p>
						In our studio, each piece of pottery begins as a simple lump of clay, but it
						becomes much more: a story, a tradition, an artwork. We believe that pottery
						is not just a functional or decorative object but an extension of the
						artist's soul. Our creations are inspired by traditional techniques passed
						down through generations, while embracing modern touches that speak to
						contemporary aesthetics.
					</p>
					<p>
						The process of creating our pottery is a testament to patience, dedication,
						and love. Each piece is handcrafted, going through the stages of shaping,
						drying, first firing, glazing, and then final firing. This journey
						transforms raw clay into a beautiful and durable object, reflecting the
						hidden beauty in the simplest materials. Our process videos offer a glimpse
						into this magic, unveiling the art and craftsmanship behind each creation.
					</p>
				</div>
			</div>
		</div>
		<div
			:class="
				cn(
					'section',
					'gap-16 lg:gap-0',
					'lg:flexBetween flex flex-col-reverse lg:flex-row lg:items-center'
				)
			"
		>
			<div
				:class="cn('h-full w-full lg:w-4/12', 'gap-8 lg:gap-16', 'flexCol justify-center')"
			>
				<h4>Pottery is the quiet expression of the eternal time</h4>

				<div :class="cn('gap-6', 'flexCol', 'txt-sm')">
					<p>
						Our philosophy rests on harmony with nature, a celebration of imperfect
						beauty, and a commitment to sustainability. We draw our inspiration from
						natural elements, organic patterns, and earthy colors, making each piece
						unique. The quotes integrated into this section reflect our admiration for
						clay and fire, ancient partners in the art of pottery, and underscore the
						deep connection between the artist, their material, and the natural world.
					</p>
					<p>
						Together, these elements serve not only to showcase our products but to
						weave a story around our brand, inviting visitors to immerse themselves in
						the world of pottery and appreciate each piece not just for its beauty but
						also for the story it tells.
					</p>
				</div>
			</div>
			<div :class="cn('relative', 'h-full w-full lg:h-5/6 lg:w-7/12', 'flexCenter')">
				<NuxtImg
					src="/images/ceramic_art_2.jpg"
					alt="pottery art"
					:class="cn('h-full w-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute -bottom-2 right-0', 'h-[1px] w-5/12', 'bg-carbon')"
				></span>
			</div>
		</div>
	</div>
</template>
