/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */
import swiperBanner from '../../../component/Swiper'
 export default {
    name: 'Banner',
    components: {

    },
    created() {
        //this.getbanner()
    },
    data(){
        return {
            communitylist:[{
                html_url:'javascript:;',
                title:'[09-02]FI社区启动公投及继续停牌申请[09-02]FI社区启动公投及继续停牌申请'                
            },{
                html_url:'javascript:;',
                title:'[09-02]FI社区启动公投及继续停牌申请'  
            }],
            bannerlist:[{
                img:require('./banner.jpg'),
                url:'javascript:;'
            },{
                img:require('./banner.png'),
                url:'javascript:;'
            }],
        }
    },
    created(){

    },
    methods: {
       
    },
    components:{
        swiperBanner
    }

}
