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
	<div :class="cn('section', 'py-32', 'flexBetween')">
		<div :class="cn('w-7/12', 'flexCenter')">
			<NuxtImg
				src="/images/ceramics_workshop.jpg"
				alt="workshop"
				:class="cn('w-full h-5/6', 'object-cover')"
			/>
		</div>
		<div :class="cn('relative', 'w-4/12', 'gap-16', 'flexCol justify-center items-end')">
			<h2 class="whitespace-nowrap text-center">Workshop</h2>

			<div :class="cn('gap-8', 'flexCol', 'txt-sm')">
				<p>
					Dive into the world of pottery with us at our exclusive workshops. Whether
					you're a beginner eager to get your hands dirty or an experienced potter looking
					to refine your skills, our sessions are designed to inspire creativity and share
					the joy of pottery making. <br />
					Space is limited, so don’t miss your chance to be part of this unique
					experience.
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
