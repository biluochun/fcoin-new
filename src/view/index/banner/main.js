/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */
import swiperBanner from '../../../component/Swiper'
 export default {
    name: 'Banner',
    components: {
        swiperBanner
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
                url:'javascript:;',
                voteTitle:'FCandy提案决策投票',
                voteTimer:'投票时间为：8月27日18：00（GMT+8）至8月28日18：00（GMT+8)',
                partIn:'javascript:;'
            },{
                img:require('./banner.png'),
                url:'javascript:;',
                voteTitle:'FCoin提案决策投票',
                voteTimer:'投票时间为：10月10日18：00（GMT+8）至8月28日18：00（GMT+8)',
                partIn:'javascript:;'
            }],
        }
    },
    created(){

    },
    methods: {
       
    }
}
