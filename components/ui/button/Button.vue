<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '@/utils/index'

interface Props extends PrimitiveProps {
	variant?: ButtonVariants['variant']
	size?: ButtonVariants['size']
	as?: string
	class?: HTMLAttributes['class']
	shape?: ButtonVariants['shape']
}

const props = withDefaults(defineProps<Props>(), {
	as: 'button'
})
</script>

<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:class="cn(buttonVariants({ variant, size, shape }), props.class)"
	>
		<slot />
	</Primitive>
</template>
