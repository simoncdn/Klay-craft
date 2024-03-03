<script setup lang="ts">
const router = useRoute()
const productSlugId = router.params.productId
const product = products.find((product) => product.id === Number(productSlugId))
</script>

<template>
	<div :class="cn('bg-red-300')">Product Info: {{ product }}</div>
</template>
