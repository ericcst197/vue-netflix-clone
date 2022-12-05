<template>
<base-container>
    <div class="max-w-md mx-auto ">
        <div class=" bg-black bg-opacity-80 p-16">
            <h1 class="text-4xl text-white font-semibold mb-10">Sign in</h1>
            <form @submit.prevent="submitForm">
                <input class="w-full mb-4 h-12 text-white bg-neutral-700 p-4 rounded" type="email" placeholder="Email" v-model.trim="signInEmail" required>
                <input class="w-full mb-4 h-12 text-white bg-neutral-700 p-4 rounded" type="password" placeholder="Password" min="6" required>  
                <base-button class="w-full rounded mt-20 h-14">Sign In</base-button>
                <div class="flex justify-between mt-5 text-neutral-400">
                    <div>
                        <input type="checkbox">
                        <label for="remember" class="p-1">Remember</label>
                    </div>
                    <base-button link to="/login">Need help?</base-button>
                </div>
            </form>
        </div>

    </div>
</base-container>
</template>

<script>
export default {
    data(){
        return {
            signInEmail: ''
        }
    },
    methods:{
        getEmail(){
            // if(this.$store.getters['auth/email)'] ){
                this.signInEmail = this.$store.getters['auth/email']
            // }
                // console.log(this.signInEmail)
        },
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
            this.$router.replace('/home')
        }
    },
    mounted(){
        this.getEmail()
    }
}
</script>
