<template>
    <div class="box-content">
        <HeaderComponent/>                    
        <div class="not-found">      
            <div class="not-found__left center ">
                <h1 class="not-found__left_title">404</h1>
                <p class="not-found__left_text">We are sorry, but the page you requested was not found</p>
                <button class="not-found__left_button">Back To Home
                    <span class="not-found__left_button-img">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                      </svg>
                    </span>
                </button>   
            </div>
            <div class="not-found__right"></div>         
        </div> 
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

    export default {
        components: {HeaderComponent}
    }
</script>

<style lang="scss" scoped>

</style>