<template>
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="style.css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Jost&display=swap" rel="stylesheet">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Blog</title>
    </head>
    <body>
    <div class="box-content">
        <HeaderComponent/>
        <div class="blog-content">
                <div class="blog-content__banner center">
                    <div class="blog-content__banner_link">
                        <h1 class="blog-content__banner_link_title">Articles & News</h1>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="blog.html">Blog</a></li>
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
                <div class="news-item" v-for="item in array" :key="item.id">  
                    <img class="news-item__img" :src="item.img" alt="news__block_img">
                    <div class="news-item__kind">
                        <h4 class="news-item__kind_heading">{{item.heading}}</h4>
                    </div>
                    <h3 class="news-item__title">{{item.title}}</h3>
                    <div class="news-item__date">
                        <p class="news-item__date_left">{{item.data}}</p>
                        <button class="news-item__date_button">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="&#62;">
                                <circle id="Ellipse 4" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                                <path id="Vector" d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                </svg>                                   
                        </button>
                    </div>
                </div>
            </section>
            <div class="news-blog__scroll-page">
                <button class="news-blog__scroll-page_button">1</button>
                <button class="news-blog__scroll-page_button">2</button>
                <button class="news-blog__scroll-page_button">3</button>
                <button class="news-blog__scroll-page_button">
                    <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                        <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
            </div>
        </div>
        <FooterComponent/>
    </div>
</body>
</html>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue';
import FooterComponent from './FooterComponent.vue';

    export default {
        data() {
        return {
            array: [
                { id: '1', img: require('@/assets/img/news-item__img_1.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '2', img: require('@/assets/img/news-item__img_2.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '3', img: require('@/assets/img/news-item__img_3.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'},
                { id: '1', img: require('@/assets/img/news-item__img_4.jpg'), heading: 'Kitchan Design', title: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022'},
                { id: '2', img: require('@/assets/img/news-item__img_5.jpg'), heading: 'Living Design', title: 'Low Cost Latest Invented Interior Designing   Ideas.', data: '22 December,2022'},
                { id: '3', img: require('@/assets/img/news-item__img_6.jpg'), heading: 'Interior Design', title: 'Best For Any Office & Business Interior Solution', data: '25 December,2022'}, ],
            }
        },
        components: {HeaderComponent, FooterComponent}
}
</script>

<style scoped lang="scss">
</style>
