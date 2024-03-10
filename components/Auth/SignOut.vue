<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(
    z.object({
        email: z.string().min(2).max(50),
        password: z.string().min(2).max(50)
    })
)
const form = useForm({
    validationSchema: formSchema
})
const onSubmit = form.handleSubmit((values) => {
    console.log('Form submitted!', values)
})
</script>

<template>
    <form :class="cn('h-fit w-8/12', 'gap-12', 'flexCol')" @submit="onSubmit">
        <div :class="cn('gap-2', 'flexCol')">
            <h3>Sign Out</h3>
            <p class="txt-sm">
                Create an account to keep track of your orders and store addresses for a quicker checkout and more </p>
        </div>

        <div :class="cn('gap-4', 'flexCol')">
            <FormField name="email">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="email" v-bind="componentField"
                            :class="cn('border border-mistyGreen')" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField name="password">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="password" v-bind="componentField"
                            :class="cn('border border-mistyGreen')" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
        </div>

        <div :class="cn('gap-4', 'flexCol')">
            <Button shape="roundedNone" variant="solid" type="submit">CREATE ACCOUNT </Button>

            <div :class="cn('gap-1', 'flex')">
                <span>Already have an account?</span>
                <Button @click="$emit('handleForm', 'signIn')" type="button" size="fit" variant="withoutStyle"
                    class="underline">Sign in</Button>
            </div>
        </div>
    </form>
</template>
