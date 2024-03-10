<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useToast } from '~/components/ui/toast'
import * as z from 'zod'

const router = useRouter()
const { toast } = useToast()
const supabase = useSupabaseClient()
const formSchema = toTypedSchema(
    z.object({
        email: z.string().min(2).max(50),
        password: z.string().min(2).max(50)
    })
)
async function signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) {
        toast({
            title: 'Error',
            description: error.message,
            variant: 'destructive'
        })
    } else {
        toast({
            title: 'Welcome back!',
            description: 'You are now signed in',
            variant: 'default'
        })
        router.push('/')
    }
}
async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    })
}
async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })
}

const form = useForm({
    validationSchema: formSchema
})
const onSubmit = form.handleSubmit((values) => {
    signInWithEmail(values.email, values.password)
})
</script>

<template>
    <form :class="cn('h-fit 2xl:w-8/12', 'gap-8', 'flexCol')" @submit="onSubmit">
        <div :class="cn('gap-2', 'flexCol')">
            <h3>Sign In</h3>
            <p class="txt-sm">
                Sign in to view your personal information and check up on your recent orders
            </p>
        </div>

        <div :class="cn('gap-4', 'flexCol')">
            <FormField name="email" v-slot="{ componentField }">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="Enter your email" v-bind="componentField"
                            :class="cn('border border-mistyGreen')" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>
            <FormField name="password" v-slot="{ componentField }">
                <FormItem v-auto-animate>
                    <FormLabel class="txt-sm">Password</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="Enter your password" v-bind="componentField"
                            :class="cn('border border-mistyGreen')" />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            </FormField>

            <!-- <span :class="cn('cursor-pointer', 'underline')">Forgot your password?</span> -->
        </div>

        <div :class="cn('gap-4', 'flexCol')">
            <Button shape="roundedNone" variant="solid" type="submit">SIGN IN</Button>

            <div :class="cn('gap-1', 'flex')">
                <span>Don't have an account?</span>
                <Button @click="$emit('handleForm', 'signOut')" type="button" size="fit" variant="withoutStyle"
                    class="underline">Create account</Button>
            </div>
        </div>

        <div :class="cn('gap-2', 'flexCenter')">
            <span class="w-full h-[1px] bg-carbon"></span>
            <span>or</span>
            <span class="w-full h-[1px] bg-carbon"></span>
        </div>
        <div :class="cn('gap-4', 'flexCol')">
            <Button @click="signInWithGithub" shape="roundedNone" variant="solid" type="button">Continue with
                GitHub</Button>
            <Button @click="signInWithGoogle" shape="roundedNone" variant="solid" type="button">Continue with
                Google</Button>
        </div>
    </form>
</template>
