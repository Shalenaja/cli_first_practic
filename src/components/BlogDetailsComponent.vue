<template>
<div class="box-content">
    <HeaderComponent/>
    <div class="blog-details-banner center"></div>    
    <div class="blog-details-content center">
        <component :is="currentTabComponent" class="tab"></component>
        <div class="blog-details-content__button-box">
            <h3 class="blog-details-content__button-box_title">Tags</h3>
            <button v-for="tab in tabs" :key="tab.id" @click="currentTab = tab" class="blog-details-content__button-box_button">{{ tab }}</button>
        </div>
    </div>
    <FooterComponent/>       
</div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

import ArticleKitchen from '@/components/ArticleKitchen.vue';
import ArticleBedroom from '@/components/ArticleBedroom.vue';
import ArticleBuilding from '@/components/ArticleBuilding.vue';
import ArticleArchitecture from '@/components/ArticleArchitecture.vue';
import ArticleKitchenPlanning from '@/components/ArticleKitchenPlanning.vue';


    export default {
        name: 'BlogDetailsComponent',  
        data() {
            return {
                tabs: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bedroom'],
                currentTab: 'Kitchen',
            }
        },

        computed: {
            currentTabComponent() {
            this.currentTab = this.currentTab.toLowerCase();                  
            return `component-${this.currentTab}`
            }
        },  

        components: {
    HeaderComponent,
    FooterComponent,
    'component-kitchen': ArticleKitchen,
    'component-bedroom': ArticleBedroom,
    'component-building': ArticleBuilding,
    'component-architecture': ArticleArchitecture,
    'component-kitchen planning': ArticleKitchenPlanning,   
}         
    }      
</script>

<style lang="scss" scoped>
</style>