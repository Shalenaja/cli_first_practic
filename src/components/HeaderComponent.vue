<template>
    <header class="header center">
        <div class="header__left">
            <a href="/" class="logo_img">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
                    </svg>                                            
            </a>
            <a href="/" class="logo_name">Interno</a>
        </div>
        <nav class="header__right">
            <ul class="header__right_menu">
            <MenuComponent v-for="link in menu" :key="link.id" :link="link"/>
            </ul>
        </nav>   
    </header>
</template>

<script>
import MenuComponent from '@/components/MenuComponent.vue';

    export default {
    data() {
        return {
            menu: [
                { id: 1,
                    name: 'Home',
                    url: '/',
                },
                { id: 2,
                    name: 'Project',
                    url: '/ProjectComponent',
                },
                { id: 3,
                    name: 'Blog',
                    url: '/BlogComponent',
                },
            ]
        };
    },
    components: { MenuComponent }
}
</script>

<style lang="scss" scoped>
</style>