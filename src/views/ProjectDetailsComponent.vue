<template>  
    <div class="box-content">
        <HeaderComponent/>
        <div class="project-details-banner center"></div>
        <div class=" project-details-box center">
           <div class="project-details-info">
                <h2 class="project-details-info__title">{{title}}</h2>
                <p class="project-details-info__text">{{ text1 }}</p>
                <p class="project-details-info__text">{{ text2 }}</p>
            </div>
        </div>
        <div class="slider-box center"> 
            <Slider/>
        </div>   
        <FooterComponent/>      
    </div>
</template>

<script>
import { useHead } from '@vueuse/head';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import Slider from '@/components/SliderComponent.vue';
import { mapState } from 'vuex';

    export default {
        name: 'ProjectDetailsComponent', 
        components: { 
            HeaderComponent,
            FooterComponent,
            Slider
        },
        setup() {
            useHead ({
                title:
                'ProjectComponent',
                meta: [
                    {
                    name: 'ProjectComponent',
                    content: 'Проекты дизайн интерьера',
                    }
                ]
            });
        }, 
        computed: {
            ...mapState(['title', 'text1', 'text2'])
        },
    }
</script>


