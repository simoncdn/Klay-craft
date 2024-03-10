<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useToast } from '~/components/ui/toast'

const { toast } = useToast()
const supabase = useSupabaseClient()
const formSchema = toTypedSchema(
    z.object({
        email: z.string().min(2).max(50),
        password: z.string().min(2).max(50)
    })
)
const form = useForm({
    validationSchema: formSchema
})
async function signUpNewUser(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    })
    if (error) {
        toast({
            title: 'Error',
            description: error.message,
            variant: 'destructive'
        })
    } else {
        toast({
            title: 'Account created',
            description: 'Thank you for signing up!',
            variant: 'default'
        })
    }
}

const onSubmit = form.handleSubmit((values) => {
    signUpNewUser(values.email, values.password)
})
</script>

<template>
    <form :class="cn('h-fit 2xl:w-8/12', 'gap-12', 'flexCol')" @submit="onSubmit">
        <div :class="cn('gap-2', 'flexCol')">
            <h3>Sign Up</h3>
            <p class="txt-sm">
                Create an account to keep track of your orders and store addresses for a quicker
                checkout and more
            </p>
        </div>

        <div :class="cn('gap-4', 'flexCol')">
            <FormField v-slot="{ componentField }" name="email">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="Enter your email" v-bind="componentField"
                            :class="cn('border border-mistyGreen')" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="Enter your password" v-bind="componentField"
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
                <Button type="button" size="fit" variant="withoutStyle" class="underline"
                    @click="$emit('handleForm', 'signIn')">Sign in</Button>
            </div>
        </div>
    </form>
</template>
