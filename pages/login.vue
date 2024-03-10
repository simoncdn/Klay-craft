<script setup lang="ts">
import SignUp from '~/components/Auth/SignUp.vue'
import SignIn from '~/components/Auth/SignIn.vue'

const currentForm = ref('signIn')

const handleForm = (formValue: string) => {
    currentForm.value = formValue
}
</script>

<template>
    <div :class="cn('h-full w-full', 'paddingX gap-16', 'flex')">
        <div :class="cn('gap-16', 'flex justify-center')">
            <div class="w-4/12">
                <Suspense>
                    <NuxtImg src="/images/sasha_reed_skylar_benett.jpg" alt="hero"
                        :class="cn('h-full w-full', 'object-cover grayscale')" />
                </Suspense>
            </div>

            <div :class="cn('w-4/12', 'flexCenter')">
                <SignIn v-if="currentForm === 'signIn'" @handle-form="handleForm" />
                <SignUp v-else @handle-form="handleForm" />
            </div>
        </div>
    </div>
</template>
