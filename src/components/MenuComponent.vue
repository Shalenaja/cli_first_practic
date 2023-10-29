<template>
        <li>
            <router-link :to="link.url">{{ link.name }}</router-link> 
        </li>
</template>

<script>
    export default {
        props: {
         link: Object,
        }
    }
</script>