<script setup lang="ts"></script>

<template>
	<div :class="cn('section ', 'py-16', 'flex')">
		<div :class="cn('relative', 'w-6/12', 'gap-32', 'flexCenter')">
			<h2 class="z-10 absolute top-16 left-0 whitespace-nowrap">OUR WORLD</h2>

			<div :class="cn('gap-16', 'flexCol')">
				<div :class="cn('w-8/12', 'gap-8', 'flexCol', 'txt-sm')">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas ex eu
						massa pulvinar, ac aliquet dui mollis. Mauris consequat scelerisque elit, id
						rutrum urna sagittis vel. Fusce tincidunt magna in laoreet dapibus. Vivamus
						nec ex non turpis pretium mollis ac vel libero. Praesent et velit justo.
						Curabitur sit amet massa fringilla, bibendum elit sollicitudin, aliquam
						felis. Duis et velit.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas ex eu
						massa pulvinar, ac aliquet dui mollis. Mauris consequat scelerisque elit, id
						rutrum urna sagittis.
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
		<div :class="cn('relative flex-1')">
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
