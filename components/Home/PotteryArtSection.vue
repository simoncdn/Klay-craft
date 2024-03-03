<script setup lang="ts"></script>

<template>
	<div :class="cn('section', 'py-16', 'flexBetween')">
		<div :class="cn('relative', 'w-5/12 h-full')">
			<NuxtImg
				src="/images/ceramic_art_1.jpg"
				alt="pottery art"
				:class="cn('w-full h-full', 'object-cover')"
			/>
			<span :class="cn('absolute left-0 -bottom-2', 'w-5/12 h-[1px]', 'bg-carbon')"></span>
		</div>
		<div :class="cn('w-6/12 h-full', 'gap-16', 'flexCol justify-center')">
			<h4>
				Every piece of pottery carries within it the soul of its creator.It is a dance
				between clay and artist, where every touch brings to life a form that didn't exist
				before.
			</h4>

			<div :class="cn('w-10/12', 'gap-6', 'flexCol', 'txt-sm')">
				<p>
					In our studio, each piece of pottery begins as a simple lump of clay, but it
					becomes much more: a story, a tradition, an artwork. We believe that pottery is
					not just a functional or decorative object but an extension of the artist's
					soul. Our creations are inspired by traditional techniques passed down through
					generations, while embracing modern touches that speak to contemporary
					aesthetics.
				</p>
				<p>
					The process of creating our pottery is a testament to patience, dedication, and
					love. Each piece is handcrafted, going through the stages of shaping, drying,
					first firing, glazing, and then final firing. This journey transforms raw clay
					into a beautiful and durable object, reflecting the hidden beauty in the
					simplest materials. Our process videos offer a glimpse into this magic,
					unveiling the art and craftsmanship behind each creation.
				</p>
			</div>
		</div>
	</div>
</template>
