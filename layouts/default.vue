<script setup lang="ts"></script>

<template>
	<div :class="cn('relative', 'h-full w-full', 'gap-16', 'flexCol')">
		<LayoutHeader />
		<slot />
		<LayoutFooter />
	</div>
</template>
