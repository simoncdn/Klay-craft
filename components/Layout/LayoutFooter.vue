<script setup lang="ts"></script>

<template>
	<div
		:class="
			cn(
				'w-full',
				'paddingX py-8 gap-16',
				'border-t border-t-carbon bg-beige',
				'flexBetween items-center'
			)
		"
	>
		<h3 class="font-bold w-3/12">Klay Craft</h3>

		<div :class="cn('flex-1', 'gap-8', 'flexBetween', 'txt-sm')">
			<div :class="cn('h-full', 'gap-4', 'flexCol')">
				<NuxtLink to="/" class="hover:underline">Home</NuxtLink>
				<NuxtLink to="/about" class="hover:underline">Our world</NuxtLink>
				<NuxtLink to="/products" class="hover:underline">Ceramics</NuxtLink>
			</div>

			<div :class="cn('h-full', 'gap-4', 'flexCol')">
				<NuxtLink to="#" class="hover:underline">Facebook</NuxtLink>
				<NuxtLink to="#" class="hover:underline">Instagram</NuxtLink>
			</div>

			<div :class="cn('h-full', 'gap-4', 'flexCol')">
				<p>Design & Made by love <br />by Simon Cardona</p>

				<NuxtLink to="https://simoncardona.netlify.app/" class="hover:underline"
					>Portfolio</NuxtLink
				>
			</div>

			<div :class="cn('h-full w-fit', 'gap-4', 'flexCol')">
				<h6>
					Hope you enjoy, <br />
					feel free to contact me
				</h6>
				<NuxtLink to="mailto:cdna.simon@gmail.com" class="hover:underline"
					>cdna.simon@gmail.com</NuxtLink
				>
			</div>
		</div>
	</div>
</template>
