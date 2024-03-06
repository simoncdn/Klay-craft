<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/utils/index'

const props = defineProps<{
	defaultValue?: string | number
	modelValue?: string | number
	class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
	(e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
	passive: true,
	defaultValue: props.defaultValue
})
</script>

<template>
	<input
		v-model="modelValue"
		:class="
			cn(
				'txt-sm flex h-10 w-full rounded-sm bg-transparent px-3 py-2 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mistyGreen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mistyGreen/20 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300',
				props.class
			)
		"
	/>
</template>
