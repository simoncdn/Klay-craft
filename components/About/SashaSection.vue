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
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe non
					dolores corrupti incidunt dignissimos vitae culpa dolore odio. Possimus nostrum
					quaerat veritatis deleniti impedit et recusandae similique excepturi totam quae?
					Obcaecati, voluptatibus numquam? Minus est accusantium architecto eius animi
					exercitationem soluta? Ratione sapiente nihil saepe at aspernatur, velit
					asperiores!
				</p>
				<p class="w-5/12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat saepe non
					dolores corrupti incidunt dignissimos vitae culpa dolore odio. Possimus nostrum
					quaerat veritatis deleniti impedit et recusandae similique excepturi totam quae?
					Obcaecati, voluptatibus numquam? Minus est accusantium architecto eius animi
					exercitationem soluta? Ratione sapiente nihil saepe at aspernatur, velit
					asperiores!
				</p>
			</div>

			<h5 class="text-center">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa laudantium
				illo dolore explicabo rem delectus maxime ad sed ab?
			</h5>
		</div>
	</div>
</template>
