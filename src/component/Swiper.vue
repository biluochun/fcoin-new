<template>
        <swiper :options="swiperOption" ref="awesomeSwiper" v-if="bannerlist.length">
            <swiper-slide v-for='(item,index) in bannerlist' :key='index'>
                <a :href="item.url">
                    <img :src="item.img" alt="" width="100%">
                </a>
                <div class="banner-title">
                    <h3 class="vote-title">{{item.voteTitle}}</h3>
                    <p class="vote-timer">{{item.voteTimer}}</p>
                    <div class="part-in"><a class="link" :href="item.partIn">立即参与<i class="icon-more go"></i></a></div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
       
</template>
<script>
/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:{
        bannerlist:{
            type:Array,
            default:[]
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    created(){
        this.isAutoplay()
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
    methods:{
        isAutoplay(){
           if(this.bannerlist.length>1){
                this.swiperOption.autoplay = {
                    delay: 3000,
                    stopOnLastSlide: true,
                    disableOnInteraction: false
                }
           }else{
                this.swiperOption.autoplay = false 
           }
       }
    }
    
}
</script>
<style lang='scss'>
.swiper-container{
    height:320px;
}
.swiper-pagination-bullet-active{
    background-color: #737C80;
}
.swiper-container-autoheight, .swiper-container-autoheight .swiper-slide{
    height: 320px;
    img{
        display: block;
        height: 100%;
    }
}
.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom:28px;
    span{
        outline: none;
    }
}
.banner-title{
       position: absolute;
       top:0;
       left:0;
       padding-top:80px;
       width: 100%;
       text-align: center;
       z-index: 99;
       .vote-title{
        color:#E9E9E9;
        font: 28px 'MicrosoftYaHei';
        font-weight: normal;
        margin-bottom:20px;
       }
       .vote-timer{
           font-size: 16px;
           color:#737C80;
       }
       .part-in{
           .link{
                width: 110px;
                height: 26px;
                font-size:14px;
                color:#E9E9E9;
                text-align: center;
                border-bottom:2px solid #E9E9E9;
                position: absolute;
                top:130%;
                left:50%;
                transform: translate(-50%,0);
                color:#E9E9E9;
                &:hover{
                    border-bottom:2px solid #00B07C;
                }
           }
           .go{
               margin-left:10px;
               font-size:10px;
           }
       }
   }

</style>


