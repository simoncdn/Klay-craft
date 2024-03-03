<script setup lang="ts"></script>

<template>
	<div :class="cn('section', 'py-16', 'flexBetween items-center')">
		<div :class="cn('w-4/12 h-full', 'gap-16', 'flexCol justify-center')">
			<h4>Pottery is the quiet expression of the eternal time</h4>

			<div :class="cn('gap-6', 'flexCol', 'txt-sm')">
				<p>
					Our philosophy rests on harmony with nature, a celebration of imperfect beauty,
					and a commitment to sustainability. We draw our inspiration from natural
					elements, organic patterns, and earthy colors, making each piece unique. The
					quotes integrated into this section reflect our admiration for clay and fire,
					ancient partners in the art of pottery, and underscore the deep connection
					between the artist, their material, and the natural world.
				</p>
				<p>
					Together, these elements serve not only to showcase our products but to weave a
					story around our brand, inviting visitors to immerse themselves in the world of
					pottery and appreciate each piece not just for its beauty but also for the story
					it tells.
				</p>
			</div>
		</div>
		<div :class="cn('relative', 'w-7/12 h-5/6', 'flexCenter')">
			<NuxtImg
				src="/images/ceramic_art_2.jpg"
				alt="pottery art"
				:class="cn('w-full h-full', 'object-cover')"
			/>
			<span :class="cn('absolute right-0 -bottom-2', 'w-5/12 h-[1px]', 'bg-carbon')"></span>
		</div>
	</div>
</template>
