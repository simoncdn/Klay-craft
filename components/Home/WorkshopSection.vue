<script setup lang="ts">
import Input from '../ui/input/Input.vue'
import { useToast } from '../ui/toast'

const { toast } = useToast()
const handleSuscribe = () => {
	toast({
		title: 'Your request has been successfully sent!',
		description:
			'Thank you for reaching out to learn more about our pottery workshops. We will get back to you very soon with all the necessary information.',
		variant: 'default'
	})
}
</script>

<template>
	<div :class="cn('section', 'py-32 gap-16', 'flex')">
		<div :class="cn('bg-blue-200', 'flex-1')">
			<NuxtImg
				src="/images/ceramics_workshop.jpg"
				alt="workshop"
				:class="cn('w-full h-full', 'object-cover')"
			/>
		</div>
		<div :class="cn('relative', 'w-4/12', 'flexCenter')">
			<h2 class="absolute right-0 top-16">Workshop</h2>

			<div :class="cn('gap-8', 'flexCol')">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas ex eu
					massa pulvinar, ac aliquet dui mollis. Mauris consequat scelerisque elit, id
					rutrum urna sagittis.
				</p>

				<div :class="cn('w-full', 'gap-1', 'flexCol')">
					<div :class="cn('gap-2', 'flexBetween')">
						<Input placeholder="Email" />
						<Button
							variant="ghost"
							size="icon"
							shape="roundedNone"
							class="group hover:bg-mistyGreen/20 transition-all duration-300"
							@click="handleSuscribe"
						>
							<Icon
								name="lucide:send"
								class="group-hover:rotate-45 transition-all duration-300"
							/>
						</Button>
					</div>
					<span :class="cn('w-full h-[1px]', 'bg-carbon')"></span>
				</div>
			</div>
		</div>
	</div>
</template>
