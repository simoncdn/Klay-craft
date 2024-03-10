export type BasketProduct = {
	id: string
	name: string
	price: number
	quantity: number
	artist?: string
	description: string
	image: string
}

export const useBasketStore = defineStore('basket', {
	persist: {
		storage: persistedState.localStorage
	},
	state: () => ({
		basket: [] as BasketProduct[]
	}),
	getters: {
		incrementQuantity: (state) => (id: string) => {
			const product = state.basket.find((product) => product.id === id)
			if (product) {
				product.quantity++
			}
		},
		decrementQuantity: (state) => (id: string) => {
			const product = state.basket.find((product) => product.id === id)
			if (product) {
				if (product.quantity === 1) return
				product.quantity--
			}
		}
	},
	actions: {
		initBasket(storageBasket: BasketProduct[]) {
			this.basket = storageBasket
		},
		addToBasket(product: BasketProduct) {
			const isProductInBasket = this.basket.find((item) => item.id === product.id)
			if (isProductInBasket) {
				return (isProductInBasket.quantity += product.quantity)
			} else {
				return this.basket.push(product)
			}
		},
		deleteToBasket(productId: string) {
			const productIndex = this.basket.findIndex((product) => product.id === productId)
			this.basket.splice(productIndex, 1)
		}
	}
})
