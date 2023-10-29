<template>
    <div v-if="pageCount > 1" class="scroll-page">
        <router-link v-for="pageNumber in pageCount" :key="pageNumber" :to="getPageLink(pageNumber)"><div class="scroll-page__button" >{{ pageNumber }}</div></router-link>
        <router-link :to="getPageLink(currentPage)">
        <button :disabled="currentPage >= pageCount" @click="nextPage" class="scroll-page__button scroll-page__last">
            <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'PaginatedPageComponent',
        data() {           
            return {                
                currentPage: 0,
            }
        },
        props: {
            pageCount: Number,
            path: String,
        },
        methods: {        
            nextPage(){                       
                this.currentPage = this.getCurrentPageNumber() + 1;
                return this.currentPage;
            },
            getCurrentPageNumber() {
                const pageNumberParam = parseInt(this.$route.params.pageNumber);
                return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
           },
            getPageLink(pageNumber) {
                return `/${this.path}/${pageNumber}`;  
            }
        },     
    }
</script>