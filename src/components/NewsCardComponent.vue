<template>
    <div class="news-item">
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
</template>

<script>
    export default {        
        props: {
            item: Object,
        },
}
</script>
