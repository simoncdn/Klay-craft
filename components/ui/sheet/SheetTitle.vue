<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { DialogTitle, type DialogTitleProps } from 'radix-vue'
import { cn } from '@/utils'

const props = defineProps<DialogTitleProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
	const { class: _, ...delegated } = props

	return delegated
})
</script>

<template>
	<DialogTitle
		:class="cn('heading-5 font-bold dark:text-white', props.class)"
		v-bind="delegatedProps"
	>
		<slot />
	</DialogTitle>
</template>
