<template>
    <button v-if="!link" class="bg-red-600 text-white px-2 py-2">
        <slot></slot>
    </button>
    <router-link v-else :to="to" >
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props:{
        link: {
            type: Boolean,
            required: false,
            default: false,
        },
        to:{
            type: String,
            required: false,
            default: '/'
        }
    }
}
</script>