<template>
    <base-container>
        <div class="h-full py-20 text-center text-white">
            <h1 class="text-6xl font-semibold">Unlimited movies, TV shows, and more.</h1>
            <p class="text-3xl m-4">Watch anywhere. Cancel anytime.</p>
            <form @submit.prevent="submitForm">
                <h3 class="text-2xl mx-10 px-10 lg:my-10">Ready to watch? Enter your email to create or restart your membership.</h3>
                <div class="mx-auto my-4 w-2xl flex justify-center">
                    <input type="email" class=" w-2/3 max-w-md lg:1/4 h-16 text-black focus:outline-none placeholder:text-slate-400 p-4" placeholder="Email address" v-model.trim="emailInput" required>
                    <base-button @click="validateForm" class="bg-red-600 text-white px-2 py-5 min-w-max h-16">
                        <span>Get Started</span>
                        <svg viewBox="0 0 6 12" class="ml-3 w-2 md:w-5 h-5 fill-white inline-block" xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill-rule="evenodd"></path></svg>
                    </base-button>
                </div>
                <p v-if="!formIsValid" class="mx-44 px-44 text-start block text-yellow-400 font-semibold">Email is required!</p>
            </form>    
        </div>
    </base-container>
</template>

<script>

export default {
    data(){
        return {
            emailInput : '',
            formIsValid: true
        }
    },
    methods:{
        validateForm(){
          this.formIsValid = true
          if(this.emailInput === '') {
            console.log("email is required")
            this.formIsValid = false
          }
        },
        submitForm(){
            this.validateForm() 
            // this.$store.dispatch('auth/signup',this.emailInput)
            this.$router.push('/login')
        }
    }

}
</script>


