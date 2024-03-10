import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { type BasketProduct } from '~/store/useBasketStore'

export const cn = (...classes: ClassValue[]) => {
    return twMerge(clsx(...classes))
}

export const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
}

export const getBasketSubtotal = (basket: BasketProduct[]) => {
    return basket.reduce((acc, product) => acc + product.price * product.quantity, 0)
}
