export default function useBasket() {
	const basket = ref([])
	const count = ref(0)

	const add = (item) => {
		basket.value.push(item)
	}
	const remove = (index) => {
		basket.value.splice(index, 1)
	}

	const increment = () => {
		count.value++
	}

	return {
		basket,
		add,
		remove,
		count,
		increment
	}
}
