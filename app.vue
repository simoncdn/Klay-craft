<script setup lang="ts">
import { Toaster } from './components/ui/toast'
</script>

<template>
	<DevOnly>
		<NuxtPage />
		<Toaster />
	</DevOnly>
</template>
