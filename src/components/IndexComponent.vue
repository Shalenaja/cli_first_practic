<template> 
<head>
<!-- <link rel="stylesheet" href="./assets/fonts/stylesheet.css">  -->
    <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap" rel="stylesheet"> -->
</head> 
<div class="box-content">
<HeaderComponent/>
    <div class="content center">
        <div class="content__banner">
            <div class="content__banner_info">
                <h1 class="content__banner_info_title">Let Your Home Be Unique</h1>
                <p class="content__banner_info_text">There are many variations of the passages of lorem Ipsum fromavailable, majority</p>
                <button class="content__banner_info_button">Get Starte
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
                        </svg>                            
                </button>
            </div>
        </div>
        <div class="content__layouts">
            <h2 class="content__layouts_title">Follow Our Projects</h2>
            <p class="content__layouts_text">It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            <div class="content__layouts_block">
                <div class="content__layouts_block_item">
                    <img class="content__layouts_block_item_img" src="@/assets/img/layouts_block_img_1.jpg" alt="layouts_img">
                    <h3 class="content__layouts_block_item_title">Modern Kitchan</h3>
                    <p class="content__layouts_block_item_text">Decor / Artchitecture</p>
                </div>
                <div class="content__layouts_block_item">
                    <img class="content__layouts_block_img" src="@/assets/img/layouts_block_img_2.jpg" alt="layouts_img">
                    <h3 class="content__layouts_block_item_title">Modern Kitchan</h3>
                    <p class="content__layouts_block_item_text">Decor / Artchitecture</p>
                </div>
                <div class="content__layouts_block_item">
                    <img class="content__layouts_block_img" src="@/assets/img/layouts_block_img_3.jpg" alt="layouts_img">
                    <h3 class="content__layouts_block_item_title">Modern Kitchan</h3>
                    <p class="content__layouts_block_item_text">Decor / Artchitecture</p>
                </div>
                <div class="content__layouts_block_item">
                    <img class="content__layouts_block_img" src="@/assets/img/layouts_block_img_4.jpg" alt="layouts_img">
                    <h3 class="content__layouts_block_item_title">Modern Kitchan</h3>
                    <p class="content__layouts_block_item_text">Decor / Artchitecture</p>
                </div> 
            </div>
        </div>           
    </div>
    <div class="project-info center">
        <div class="project-info__content">
            <div class="project-info__content_item project-info__content_item_line">
                <a class="project-info__content_item_amount" href="#">12</a>
                <p class="project-info__content_item_text">Years Of Experiance</p>
            </div>
            <div class="project-info__content_item project-info__content_item_line">
                <a class="project-info__content_item_amount" href="#">85</a>
                <p class="project-info__content_item_text">Success Project</p>
            </div>
            <div class="project-info__content_item project-info__content_item_line">
                <a class="project-info__content_item_amount" href="#">15</a>
                <p class="project-info__content_item_text">Active Project</p>
            </div>
            <div class="project-info__content_item">
                <a class="project-info__content_item_amount" href="#">95</a>
                <p class="project-info__content_item_text">Happy CUstomers</p>
            </div>
        </div>
    </div> 
    <div class="news center">
        <h2 class="news__title">Articles & News</h2>
        <p class="news__text">It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
        <section class="news__block">
            <NewsCardComponent v-for="item in array" :key="item.id" :item="item"/> 
        </section>
    </div>
<FooterComponent/>
</div>
</template>
  
<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';
import NewsCardComponent from './NewsCardComponent.vue';

export default {
    data() {
        return {
            array: [
                { id: '1', img: require('@/assets/img/news-item__img_1.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '2', img: require('@/assets/img/news-item__img_2.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '3', img: require('@/assets/img/news-item__img_3.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'}, ],
            }
        },
    components: { HeaderComponent, FooterComponent, NewsCardComponent }
};
</script>

<style lang="scss" scoped>
</style> 