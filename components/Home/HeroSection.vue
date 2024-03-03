<script setup lang="ts"></script>

<template>
	<div :class="cn('h-screen w-full')">
		<SectionHeader />

		<video
			autoplay
			loop
			muted
			:class="
				cn(
					'z-[-1] absolute top-0',
					'w-full h-full',
					'brightness-50 contrast-125 object-cover'
				)
			"
		>
			<source src="/videos/ceramics-test.mp4" type="video/mp4" />
		</video>

		<div :class="cn('paddingX gap-24 mt-24', 'flexCol')">
			<h1 :class="cn('z-20', 'flexCol', 'text-[clamp(3rem, 20vmin, 20rem)] leading-none font-heading text-beige')">
				<span>KLAY</span>
				<span>CRAFT</span>
			</h1>

			<div :class="cn('w-2/12', 'gap-2', 'flexCol')">
				<div :class="cn('flexBetween items-center', 'text-beige txt-sm')">
					<span>Shop now</span>
					<Icon name="lucide:move-right" />
				</div>

				<span :class="cn('w-full h-[1px]', 'bg-beige')"></span>
			</div>

			<div
				:class="
					cn(
						'absolute left-0 right-0 bottom-0',
						'w-full h-fit',
						'mx-auto mb-8 gap-4',
						'flexCol items-center'
					)
				"
			>
				<span :class="cn('text-beige txt-sm')">SCROLL</span>

				<span :class="cn('w-[1px] h-16 bg-beige')"></span>
			</div>
		</div>
	</div>
</template>
