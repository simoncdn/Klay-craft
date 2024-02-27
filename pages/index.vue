<script setup>
</script>

<template>
	<div :class="cn('w-full h-full', 'flexCol')">

		<video :autoplay="true" loop muted
			:class="cn('z-[-1] absolute top-0', 'w-screen h-screen', 'brightness-50 contrast-125 object-cover')">
			<source src="/videos/ceramics-test.mp4" type="video/mp4">
		</video>


		<div :class="cn('h-full w-full', 'paddingX')">
			<h1 :class="cn('z-20', 'flexCol', 'text-4xl font-heading text-white', 'text-[clamp(3rem,18vmin,18rem)] leading-none')">
				<span>KLAY</span>
				<span>CRAFT</span>
			</h1>
			
		</div>

		<!---->
		<!---->
		<!---->
		<!-- <div :class="cn('bg-blue-200 h-full w-full')"> -->
		<!-- 	hello je vais bien -->
		<!-- </div> -->
	</div>
</template>
