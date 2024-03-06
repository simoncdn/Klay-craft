<script setup lang="ts"></script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<LayoutHeader />
		<slot />
		<LayoutFooter />
	</div>
</template>
