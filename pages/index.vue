<script setup>
import { useToast } from '~/components/ui/toast'
import { useScroll } from '@vueuse/core'

const productsList = (ref < HTMLElement) | (null > null)

const { toast } = useToast()
const { x } = useScroll(productsList)

const handleSuscribe = () => {
	toast({
		title: 'Your request has been successfully sent!',
		description:
			'Thank you for reaching out to learn more about our pottery workshops. We will get back to you very soon with all the necessary information.',
		variant: 'default'
	})
}

const translateX = computed(() => {
	const containerWidth = productsList.value?.clientWidth || 0
	const contentWidth = productsList.value?.scrollWidth || 0
	const maxScroll = contentWidth - containerWidth
	const scrollbarContainerWidth = containerWidth / 3
	const scrollbarWidth = scrollbarContainerWidth / 1.5

	return (x.value / maxScroll) * scrollbarWidth
})
</script>

<template>
	<div :class="cn('h-full w-full', 'gap-16', 'flexCol')">
		<div :class="cn('h-screen w-full')">
			<video
				autoplay
				loop
				muted
				:class="
					cn(
						'z-[-1] absolute top-0',
						'w-full h-screen',
						'brightness-50 contrast-125 object-cover'
					)
				"
			>
				<source src="/videos/ceramics-test.mp4" type="video/mp4" />
			</video>

			<div :class="cn('paddingX gap-24 mt-24', 'flexCol')">
				<h1 :class="cn('z-20', 'flexCol', 'text-beige')">
					<span>KLAY</span>
					<span>CRAFT</span>
				</h1>

				<div :class="cn('w-2/12', 'gap-2', 'flexCol')">
					<NuxtLink
						to="/products"
						:class="cn('group', 'flexBetween items-center', 'text-beige txt-sm')"
					>
						<span class="group-hover:opacity-70 transition-all duration-300"
							>Shop now</span
						>
						<Icon
							name="lucide:move-right"
							class="group-hover:translate-x-2 transition-all duration-300"
						/>
					</NuxtLink>

					<span :class="cn('w-full h-[1px]', 'bg-beige')"></span>
				</div>

				<div
					:class="
						cn(
							'absolute left-0 right-0 bottom-0',
							'w-full h-fit',
							'mx-auto mb-8 gap-4',
							'flexCol items-center'
						)
					"
				>
					<span :class="cn('text-beige txt-sm')">SCROLL</span>

					<span :class="cn('w-[1px] h-16 bg-beige')"></span>
				</div>
			</div>
		</div>
		<div
			:class="cn('section', 'lg:py-16 gap-16 lg:gap-0', 'flexCol lg:flex-row lg:flexBetween')"
		>
			<div
				:class="cn('relative w-full lg:w-5/12 h-full', 'gap-16', 'flexCol justify-center')"
			>
				<h2 class="z-10 lg:whitespace-nowrap text-center lg:text-left">OUR WORLD</h2>

				<div :class="cn('gap-16', 'flexCol justify-center')">
					<div :class="cn('w-full', 'gap-8', 'flexCol', 'txt-sm')">
						<p>
							In the heart of Australia's art scene, Sasha Reed and Skylar Bennett
							have turned their passion for pottery into a true haven of creativity.
							Their studio, a crossroads of tradition and innovation, reflects their
							commitment to the craft. Each piece tells a story of resilience, beauty,
							and the unbreakable bond between the artists and their material. Their
							journey is an ode to dream realization, building a community that values
							sustainability, art, and the shared joy of creation. Their work, a
							harmonious blend of earthy textures and vibrant glazes, invites us to
							see pottery not just as objects, but as carriers of history and culture.
						</p>
						<p>
							The journey of Sasha Reed and Skylar Bennett through the world of
							pottery is a captivating story of friendship, art, and ecological
							commitment. Together, they've established a studio where each piece
							celebrates the earth's raw beauty, shaped by skilled hands and fiery
							determination. Their story is an invitation to uncover the soul behind
							the clay, the passion behind their eco-friendly creations, and the
							heritage they aim to preserve with every unique piece.
						</p>
					</div>

					<NuxtLink
						to="/about"
						:class="
							cn('w-fit', 'flexCol', 'hover:opacity-70 transition-all duration-300')
						"
					>
						READ OUR STORY

						<span :class="cn('w-full h-[1px]', 'bg-carbon')"></span>
					</NuxtLink>
				</div>
			</div>

			<div :class="cn('relative', 'w-full lg:w-6/12')">
				<span :class="cn('absolute bottom-0 -left-2', 'h-2/6 w-[1px]', 'bg-carbon')"></span>
				<NuxtImg
					src="/images/Sasha_Skylar.jpg"
					alt="Sasha Reed and Skylar Benett"
					:class="cn('w-full h-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute -bottom-2 right-0', 'h-[1px] w-6/12', 'bg-carbon')"
				></span>
			</div>
		</div>
		<div
			:class="
				cn(
					'section',
					'lg:py-32 gap-16 lg:gap-0',
					'flex flex-col-reverse lg:flex-row flexBetween'
				)
			"
		>
			<div :class="cn('w-full lg:w-7/12', 'flexCenter')">
				<NuxtImg
					src="/images/ceramics_workshop.jpg"
					alt="workshop"
					:class="cn('w-full h-5/6', 'object-cover')"
				/>
			</div>
			<div
				:class="
					cn(
						'relative',
						'w-full lg:w-4/12',
						'gap-16',
						'flexCol justify-center items-center lg:items-end'
					)
				"
			>
				<h2 class="lg:whitespace-nowrap text-center">Workshop</h2>

				<div :class="cn('gap-8', 'flexCol', 'txt-sm')">
					<p>
						Dive into the world of pottery with us at our exclusive workshops. Whether
						you're a beginner eager to get your hands dirty or an experienced potter
						looking to refine your skills, our sessions are designed to inspire
						creativity and share the joy of pottery making. <br />
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
		<div :class="cn('section', 'gap-16', 'flexCol')">
			<h2 class="text-center h-fit">
				New in <br />
				Selection
			</h2>

			<div :class="cn('h-full w-full', 'gap-8', 'flex flex-col lg:flex-row items-start')">
				<div :class="cn('h-full w-fit', 'flexCenter')">
					<h3 :class="cn('lg:-rotate-90', 'text-center')">
						<router-link
							to="/products"
							:class="cn('hover:opacity-70 transition-all duration-300')"
						>
							<span class="flex gap-4 lg:hidden"
								>Shop all ceramics
								<NuxtImg src="/images/arrow.svg" alt="arrow right" />
							</span>

							<span class="hidden lg:block">
								Shop all<br />
								ceramics
							</span>
						</router-link>
					</h3>
				</div>
				<div
					:class="
						cn(
							'relative overflow-x-hidden',
							'w-full h-full',
							'gap-8 lg:gap-0',
							'flex flex-col items-start lg:block'
						)
					"
				>
					<ul
						ref="productsList"
						:class="
							cn('overflow-x-auto scrollbar-none', 'min-w-0 w-full', 'gap-4', 'flex')
						"
					>
						<li
							v-for="product in products"
							:key="product.id"
							class="w-64 h-96 flex-shrink-0"
						>
							<router-link
								:to="`/products/${product.id}`"
								:class="cn('h-full group', 'gap-4', 'flexCol')"
							>
								<div class="relative h-full w-full">
									<img
										:src="product.image"
										:alt="product.name"
										:class="
											cn(
												'w-full h-full',
												'object-cover',
												'group-hover:brightness-75 transition-all duration-150'
											)
										"
									/>
									<Icon
										name="lucide:eye"
										:class="
											cn(
												'absolute top-0 right-0 left-0 bottom-0 opacity-0',
												'm-auto',
												'text-3xl text-beige',
												'group-hover:opacity-100 transition-all duration-150'
											)
										"
									/>
								</div>

								<div :class="cn('flexCol')">
									<div :class="cn('flexBetween items-center', 'txt-sm')">
										<span>{{ product.name }}</span>
										<span class="font-medium">{{
											formatPrice(product.price)
										}}</span>
									</div>
									<span class="txt-xs text-mistyGreen">{{
										product.description
									}}</span>
								</div>
							</router-link>
						</li>
					</ul>

					<div
						:class="
							cn(
								'block lg:absolute left-0 -bottom-0',
								'w-4/12 bg-lightGray',
								'lg:m-auto',
								'flex'
							)
						"
					>
						<span
							:class="cn('w-4/12 h-[2px]', 'bg-carbon')"
							:style="{ transform: `translateX(${translateX}px)` }"
						></span>
					</div>
				</div>
			</div>
		</div>
		<div :class="cn('section', 'gap-16 lg:gap-0', 'flex flex-col lg:flex-row lg:flexBetween')">
			<div :class="cn('relative', 'w-full lg:w-5/12 h-full')">
				<NuxtImg
					src="/images/ceramic_art_1.jpg"
					alt="pottery art"
					:class="cn('w-full h-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute left-0 -bottom-2', 'w-5/12 h-[1px]', 'bg-carbon')"
				></span>
			</div>
			<div
				:class="cn('w-full lg:w-6/12 h-full', 'gap-8 lg:gap-16', 'flexCol justify-center')"
			>
				<h4>
					Every piece of pottery carries within it the soul of its creator.It is a dance
					between clay and artist, where every touch brings to life a form that didn't
					exist before.
				</h4>

				<div :class="cn('w-10/12', 'gap-6', 'flexCol', 'txt-sm')">
					<p>
						In our studio, each piece of pottery begins as a simple lump of clay, but it
						becomes much more: a story, a tradition, an artwork. We believe that pottery
						is not just a functional or decorative object but an extension of the
						artist's soul. Our creations are inspired by traditional techniques passed
						down through generations, while embracing modern touches that speak to
						contemporary aesthetics.
					</p>
					<p>
						The process of creating our pottery is a testament to patience, dedication,
						and love. Each piece is handcrafted, going through the stages of shaping,
						drying, first firing, glazing, and then final firing. This journey
						transforms raw clay into a beautiful and durable object, reflecting the
						hidden beauty in the simplest materials. Our process videos offer a glimpse
						into this magic, unveiling the art and craftsmanship behind each creation.
					</p>
				</div>
			</div>
		</div>
		<div
			:class="
				cn(
					'section',
					'gap-16 lg:gap-0',
					'flex flex-col-reverse lg:flex-row lg:flexBetween lg:items-center'
				)
			"
		>
			<div
				:class="cn('w-full lg:w-4/12 h-full', 'gap-8 lg:gap-16', 'flexCol justify-center')"
			>
				<h4>Pottery is the quiet expression of the eternal time</h4>

				<div :class="cn('gap-6', 'flexCol', 'txt-sm')">
					<p>
						Our philosophy rests on harmony with nature, a celebration of imperfect
						beauty, and a commitment to sustainability. We draw our inspiration from
						natural elements, organic patterns, and earthy colors, making each piece
						unique. The quotes integrated into this section reflect our admiration for
						clay and fire, ancient partners in the art of pottery, and underscore the
						deep connection between the artist, their material, and the natural world.
					</p>
					<p>
						Together, these elements serve not only to showcase our products but to
						weave a story around our brand, inviting visitors to immerse themselves in
						the world of pottery and appreciate each piece not just for its beauty but
						also for the story it tells.
					</p>
				</div>
			</div>
			<div :class="cn('relative', 'w-full lg:w-7/12 h-full lg:h-5/6', 'flexCenter')">
				<NuxtImg
					src="/images/ceramic_art_2.jpg"
					alt="pottery art"
					:class="cn('w-full h-full', 'object-cover')"
				/>
				<span
					:class="cn('absolute right-0 -bottom-2', 'w-5/12 h-[1px]', 'bg-carbon')"
				></span>
			</div>
		</div>
	</div>
</template>
