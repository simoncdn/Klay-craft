<script setup lang="ts"></script>

<template>
	<div :class="cn('section', 'py-16', 'flexBetween')">
		<div :class="cn('relative w-5/12 h-full', 'gap-16', 'flexCol justify-center')">
			<h2 class="z-10 whitespace-nowrap">OUR WORLD</h2>

			<div :class="cn('gap-16', 'flexCol justify-center')">
				<div :class="cn('w-full', 'gap-8', 'flexCol', 'txt-sm')">
					<p>
						In the heart of Australia's art scene, Sasha Reed and Skylar Bennett have
						turned their passion for pottery into a true haven of creativity. Their
						studio, a crossroads of tradition and innovation, reflects their commitment
						to the craft. Each piece tells a story of resilience, beauty, and the
						unbreakable bond between the artists and their material. Their journey is an
						ode to dream realization, building a community that values sustainability,
						art, and the shared joy of creation. Their work, a harmonious blend of
						earthy textures and vibrant glazes, invites us to see pottery not just as
						objects, but as carriers of history and culture.
					</p>
					<p>
						The journey of Sasha Reed and Skylar Bennett through the world of pottery is
						a captivating story of friendship, art, and ecological commitment. Together,
						they've established a studio where each piece celebrates the earth's raw
						beauty, shaped by skilled hands and fiery determination. Their story is an
						invitation to uncover the soul behind the clay, the passion behind their
						eco-friendly creations, and the heritage they aim to preserve with every
						unique piece.
					</p>
				</div>

				<NuxtLink
					to="/about"
					:class="cn('w-fit', 'flexCol', 'hover:opacity-70 transition-all duration-300')"
					>READ OUR STORY

					<span :class="cn('w-full h-[1px]', 'bg-carbon')"></span>
				</NuxtLink>
			</div>
		</div>

		<div :class="cn('relative', 'w-6/12')">
			<span :class="cn('absolute bottom-0 -left-2', 'h-2/6 w-[1px]', 'bg-carbon')"></span>
			<NuxtImg
				src="/images/Sasha_Skylar.jpg"
				alt="Sasha Reed and Skylar Benett"
				:class="cn('w-full h-full', 'object-cover')"
			/>
			<span :class="cn('absolute -bottom-2 right-0', 'h-[1px] w-6/12', 'bg-carbon')"></span>
		</div>
	</div>
</template>
