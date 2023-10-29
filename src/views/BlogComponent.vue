<template>
<div class="box-content">
    <HeaderComponent/>
    <div class="blog-content">
            <div class="blog-content__banner center">
                <div class="blog-content__banner_link">
                    <h1 class="blog-content__banner_link_title">Articles & News</h1>
                    <ul>
                    <router-link v-for="link in menu" :key="link.id" :to="link.url"> {{ link.name }}</router-link>
                    </ul>
                </div>
            </div>
            <div class="blog-content__post center">
                <h2 class="blog-content__title">Latest Post</h2>
                <div class="blog-content__post-box">
                    <img class="blog-content__post-box_img" src="@/assets/img/blog-content_post-info_img.jpg" alt="post-info_img">                
                    <div class="blog-content__post-box_info">
                        <h3 class="blog-content__post-box_info_title">Low Cost Latest Invented Interior Designing Ideas
                        </h3>
                        <p class="blog-content__post-box_info_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. 
                        </p>
                        <p class="blog-content__post-box_info_text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                        </p>
                        <div class="blog-content__post-box_info_date">
                            <p class="blog-content__post-box_info_date_left">26 December,2022</p>
                        <button class="blog-content__post-box_info_date_button">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC"/>
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                            
                        </button>
                        </div>
                    </div>
                </div>
            </div>           
    </div>
    <div class="news-blog center">
        <h2 class="news-blog__title">Articles & News</h2>
        <section class="news-blog__cards">
            <NewsCardComponent v-for="item in paginatedData" :key="item.id" :item="item"/>            
        </section>
        <section class="scroll-box">
            <PaginatedPageComponent :pageCount="pageCount" :path="path"/>
        </section>       
    </div>
    <FooterComponent/>
</div>
</template>

<script>
import { useHead } from '@vueuse/head';
import PaginatedPageComponent from '@/components/PaginatedPageComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NewsCardComponent from '@/components/NewsCardComponent.vue';

    export default {
        name: 'BlogComponent',   
        components: { HeaderComponent, FooterComponent, NewsCardComponent, 
                      PaginatedPageComponent },
        setup() {
            useHead ({
                title:
                'Project furniture studio in VUE/CLI!',
                meta: [
                    {
                    name: 'IndexComponent',
                    content: 'Блог дизайн интерьера',
                    }
                ]
            });
        },     
        data() {
        return {
            menu: [{id: 1, name: 'Home', url: '/'}, {id: 2, name: 'Blog', url: '/BlogDetailsComponent'}],
            
            array: [
                { id: '1', img: require('@/assets/img/news-item__img_1.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '2', img: require('@/assets/img/news-item__img_2.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '3', img: require('@/assets/img/news-item__img_3.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'},
                { id: '4', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '5', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '6', img: require('@/assets/img/news-item__img_6.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'},
            
                { id: '7', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '8', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '9', img: require('@/assets/img/news-item__img_6.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'},
                { id: '10', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '11', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '12', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '13', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '14', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '15', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '16', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '17', img: require('@/assets/img/news-item__img_6.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'},
                { id: '18', img: require('@/assets/img/news-item__img_6.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'}
            ],

            sizePage: 6, 
            path: 'BlogComponent',       
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
                return Math.ceil(this.array.length/this.sizePage);
                },
            paginatedData(){
                const pageNumber = this.getCurrentPageNumber();
                const start = (pageNumber -1) * this.sizePage,
                        end = start + this.sizePage;
                return this.array
                        .slice(start, end);
                },
        },
}
</script>
