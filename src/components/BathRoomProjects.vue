
<template>
    <MasonryWall class="project-content__item-box" :ssr-columns="2" :column-width="582" :gap="32" :items="paginatedData">
        <template #default="{item}">   
                <ProjectCardComponent :item="item"/>
        </template>
    </MasonryWall>
     <PaginatedPageComponent :pageCount="pageCount" :path="path"/>    
</template>

<script>
import { defineComponent } from 'vue';
import ProjectCardComponent from './ProjectCardComponent.vue';
import PaginatedPageComponent from './PaginatedPageComponent.vue';

    export default defineComponent({
        components: {
            ProjectCardComponent,
            PaginatedPageComponent
        },
        data() {
            return {
                projects: [
                    { id: 1, img:  require('@/assets/img/bathroom/Bathroom_1.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 2, img:  require('@/assets/img/bathroom/Bathroom_2.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 3, img:  require('@/assets/img/bathroom/Bathroom_3.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 4, img: require('@/assets/img/bathroom/Bathroom_1.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 5, img:  require('@/assets/img/bathroom/Bathroom_1.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 6, img:  require('@/assets/img/bathroom/Bathroom_2.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 7, img:  require('@/assets/img/bathroom/Bathroom_2.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                    { id: 8, img: require('@/assets/img/bathroom/Bathroom_3.jpg'), title: 'BathroomProjects', link1: 'Decor', link2: 'Artchitecture' },
                ],
                sizePage: 6, 
                path: 'ProjectComponent',
            }  
        },
        methods: { 
            getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber);              
                return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
            },            
        },
        computed: {
            pageCount(){                                                
                return Math.ceil(this.projects.length/this.sizePage);  
                },
            paginatedData(){
                const pageNumber = this.getCurrentPageNumber();
                const start = (pageNumber -1) * this.sizePage,
                        end = start + this.sizePage;
                return this.projects                                  
                        .slice(start, end);
                },
        }, 
    })     
</script>




