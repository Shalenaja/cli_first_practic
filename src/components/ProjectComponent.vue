<template>
   <div class="box-content">
    <HeaderComponent/>
    <div class="project-banner center">
        <div class="project-banner__link">
                <h1 class="project-banner__link_title">Our Project</h1>
                <ul>
                    <li><a href="IndexComponent.vue">Home</a></li>
                    <li><a href="ProjectComponent.vue">Project</a></li>
                </ul>
        </div>
    </div>
    <div class="project-content center">
        <div class="project-content__kind-box">
            <button class="project-content__kind-box_button" v-for="btn in btnArray" :key="btn.id" @click="currentBtn = btn">{{ btn }}</button>
        </div>
        <component :is="currentBtnComponent"></component>
        <div class="project-content__scroll-page">
            <button class="project-content__scroll-page_button">01</button>
            <button class="project-content__scroll-page_button">02</button>
            <button class="project-content__scroll-page_button">03</button>
            <button class="project-content__scroll-page_button">
                <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
        </div> 
    </div> 
    <FooterComponent/>  
</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

import BathRoomProjects from '@/components/BathRoomProjects.vue';
import BedRoomProjects from '@/components/BedRoomProjects.vue';
import KitchanProjects from '@/components/KitchanProjects.vue';
import LivingAreaProjects from '@/components/LivingAreaProjects.vue';

    export default {
        data() {
            return {
                btnArray: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
                currentBtn: 'Bed Room',
            }
        },
        computed: {
            currentBtnComponent() {               
            return `component-${this.currentBtn}`
            }
        },
        components: {
        HeaderComponent,
        FooterComponent,
        'component-Bed Room': BedRoomProjects,
        'component-Bathroom': BathRoomProjects,
        'component-Kitchan': KitchanProjects,
        'component-Living Area': LivingAreaProjects
        } 
    }
</script>

<style lang="scss" scoped>

</style>

