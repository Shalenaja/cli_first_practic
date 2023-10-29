<template>
   <div class="box-content">
    <HeaderComponent/>    
    <div class="project-banner center">
        <div class="project-banner__link">
                <h1 class="project-banner__link_title">Our Project</h1>
                <ul>
                    <MenuComponent v-for="link in menu" :key="link.id" :link="link"/>          
                </ul>
        </div>
    </div>
    <div class="project-content center">
        <router-link :to="getFirstPage">
            <div class="project-content__kind-box">
                <button class="project-content__kind-box_button" v-for="btn in btnArray" :key="btn.id" @click="currentBtn = btn">{{ btn }}</button>
            </div>   
        </router-link>       
        <component :is="currentBtnComponent"></component>
    </div> 
    <FooterComponent/>
</div>
</template>

<script>
import { useHead } from '@vueuse/head';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';

import BathRoomProjects from '@/components/BathRoomProjects.vue';
import BedRoomProjects from '@/components/BedRoomProjects.vue';
import KitchanProjects from '@/components/KitchanProjects.vue';
import LivingAreaProjects from '@/components/LivingAreaProjects.vue';

    export default {
        name: 'ProjectComponent',
        components: {
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        'component-Bed Room': BedRoomProjects,
        'component-Bathroom': BathRoomProjects,
        'component-Kitchan': KitchanProjects,
        'component-Living Area': LivingAreaProjects
        },
        setup() {
            useHead ({
                title:
                'ProjectComponent',
                meta: [
                    {
                    name: 'ProjectComponent',
                    content: 'Проект дизайн интерьера',
                    }
                ]
            });
        },  
        data() {
            return {
                menu: [
                    {id: 1, name: 'Home', url: '/'},
                    {id: 2, name: 'Project', url: '/ProjectDetailsComponent'}
                ],

                btnArray: ['Bathroom', 'Bed Room', 'Kitchan', 'Living Area'],
                currentBtn: 'Bed Room',                  
           }
        },
        computed: {            
            currentBtnComponent() {               
            return `component-${this.currentBtn}`
            },
            getFirstPage() {
                return `1`;  
            }  
        },
    }
</script>


     