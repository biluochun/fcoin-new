<template>
    <swiper :options="swiperOption" ref="awesomeSwiper" v-if="bannerlist.length">
            <swiper-slide v-for='(item,index) in bannerlist' :key='item.index'>
            <a :href="item.url">
                <img :src="item.img" alt="" width="100%">
            </a>
            </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        bannerlist:{
            type:Array,
            default:[]
        }
    },
    data(){
        return{
            swiperOption: {
                notNextTick: true,
                paginationClickable: true,
                observer:true,
                spaceBetween: 0,
                loop:true,
                autoHeight: true,
                centeredSlides: true,
                // autoplay:{
                //             delay: 2000,
                //             stopOnLastSlide: true,
                //             disableOnInteraction: false
                // },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:false,//修改swiper的父元素时，自动初始化swiper
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                onSlideChangeEnd: function(swiper){
            　　　  swiper.update();
                }
            }
        }
    },
    created(){
        this.isAutoplay()
    },
    methods:{
        isAutoplay(){
           if(this.bannerlist.length>1){
                this.swiperOption.autoplay = {
                    delay: 2000,
                    stopOnLastSlide: true,
                    disableOnInteraction: false
                }
           }else{
                this.swiperOption.autoplay = false 
           }
       }
    },
    components:{
        swiper,
        swiperSlide
    }
    
}
</script>
<style lang='scss'>
.swiper-pagination-bullet-active{
    background-color: #737C80;
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:28px;
}
</style>


