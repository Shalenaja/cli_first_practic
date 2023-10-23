<template>
    <div class="project-content__item-box">
    <ProjectCardComponent v-for="item in projects" :key="item.id" :item="item"/>  
    </div>
</template>

<script>
import ProjectCardComponent from './ProjectCardComponent.vue';

    export default {
        data() {
            return {
                projects: [
                    { id: 1, img:  require('@/assets/img/bedroom/Bedroom_1.jpg'), title: 'Minimal Bedroom table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 2, img:  require('@/assets/img/bedroom/Bedroom_2.jpg'), title: 'Minimal Bedroom table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 3, img:  require('@/assets/img/bedroom/Bedroom_3.jpg'), title: 'Modern Bedroom', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 4, img: require('@/assets/img/bedroom/Bedroom_4.jpg'), title: 'Classic Minimal Bedroom', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 5, img: require('@/assets/img/bedroom/Bedroom_5.jpg'), title: 'System Table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 6, img: require('@/assets/img/bedroom/Bedroom_6.jpg'), title: 'Minimal Bedroom table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 7, img: require('@/assets/img/bedroom/Bedroom_7.jpg'), title: 'Modern Bedroom', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 8, img: require('@/assets/img/bedroom/Bedroom_8.jpg'), title: 'Modern Medroom', link1: 'Decor', link2: 'Artchitecture' },
                ],
            }  
        },
        components: {
            ProjectCardComponent,
        }
    } 
</script>

