<script setup lang="ts">
import { Toaster } from './components/ui/toast'
</script>

<template>
	<DevOnly>
		<NuxtLayout>
			<NuxtPage />
			<Toaster />
		</NuxtLayout>
	</DevOnly>
</template>
