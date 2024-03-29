import { type VariantProps, cva } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300',
	{
		variants: {
			variant: {
				default:
					'bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90',
				solid: 'bg-carbon text-white rounded-none hover:bg-carbon/90 active:bg-carbon dark:hover:bg-white/90 dark:hover:text-carbon',
				ghostCarbon:
					'hover:bg-carbon/10 active:bg-carbon dark:hover:bg-white/90 dark:hover:text-carbon',
				ghost: 'hover:bg-white/10 active:bg-white/20 dark:hover:bg-carbon/90 dark:hover:text-slate-50',
				darkGhost:
					'text-carbon hover:bg-carbon hover:text-white active:bg-carbon/90 dark:hover:bg-white/10 dark:hover:text-slate-50 transition-all duration-300'
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'h-10 w-10',
				full: 'h-full w-full',
				fit: 'h-fit w-fit'
			},
			shape: {
				default: 'rounded-md',
				rounded: 'rounded-full',
				roundedMd: 'rounded-md',
				roundedLg: 'rounded-lg',
				roundedXl: 'rounded-xl',
				roundedNone: 'rounded-none'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
			shape: 'default'
		}
	}
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
