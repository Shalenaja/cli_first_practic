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
                    { id: 1, img:  require('@/assets/img/kitchan/Kitchan_1.jpg'), title: 'Minimal Bedroom table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 2, img:  require('@/assets/img/kitchan/Kitchan_2.jpg'), title: 'Minimal Bedroom table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 3, img:  require('@/assets/img/kitchan/Kitchan_3.jpg'), title: 'Modern Bedroom', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 4, img: require('@/assets/img/kitchan/Kitchan_4.jpg'), title: 'Classic Minimal Bedroom', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 5, img: require('@/assets/img/kitchan/Kitchan_5.jpg'), title: 'System Table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 6, img: require('@/assets/img/kitchan/Kitchan_1.jpg'), title: 'Minimal Bedroom table', link1:'Decor', link2: 'Artchitecture' }, 
                    { id: 7, img: require('@/assets/img/kitchan/Kitchan_2.jpg'), title: 'System Table', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 8, img: require('@/assets/img/kitchan/Kitchan_3.jpg'), title: 'Minimal Bedroom table', link1:'Decor', link2: 'Artchitecture' }, 
                ],
            }  
        },
        components: {
            ProjectCardComponent,
        }
    } 
</script>

