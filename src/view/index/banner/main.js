/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */
import swiperBanner from '../../../component/Swiper';
import service from '../service';
import lang from './lang';
import Util from '../../../common/util'
import commonService from '../../../common/commonService'

export default {
    name: 'Banner',
    i18n: {
        messages: {
            cn: lang.cn,
            en: lang.en
        }
    },
    components: {
        swiperBanner
    },
    created() {
        this._fetchMainNotice();
        this._fetchCommunityNotice();
        this._get_trading_fees_group()
        this._get_fci06()
        commonService.onLoopSocketData({
            initCallback: (config) => {
                console.log('config',config)
            }
        })
    },
    data() {
        return {
            mainAnnouncementList: [],
            communityAnnouncementList: [],
            bannerList: [
                {
                    img: require('./img/banner.jpg'),
                    url: 'javascript:;',
                    voteTitle: 'FCandy提案决策投票',
                    voteTimer: '投票时间为：8月27日18：00（GMT+8）至8月28日18：00（GMT+8)',
                    partIn: 'javascript:;'
                }, {
                    img: require('./img/banner.png'),
                    url: 'javascript:;',
                    voteTitle: 'FCoin提案决策投票',
                    voteTimer: '投票时间为：10月10日18：00（GMT+8）至8月28日18：00（GMT+8)',
                    partIn: 'javascript:;'
                }
            ],
            ft_circulation:'-',
            ft_destruction: '-',
            ft_secondary:'-',
            yesterday_convert: '-',
            fci06_rate: '-',
            fci06_color: '',
            fci06_base: '-',
            fci06_curr: '-',
            status:'normal',
            today_summary: '-',
            prev_all_summary: '',
            currentPrice: {},
        }
    },
    methods: {
        _fetchMainNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 3,
                type: 'main',
            }).then(rep => {
                if (rep.status === 'ok') {
                    this.mainAnnouncementList = rep.data.content;
                }
            });
        },

        _fetchCommunityNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 3,
                type: 'community_governance'
            }).then(rep => {
                if (rep.status === 'ok') {
                    this.communityAnnouncementList = rep.data.content;
                }
            });
        },
        _get_trading_fees_group(callback){
            service.get_trading_fees_group({})
            .then(res=>{
                if(res.status==='ok'){
                    let result = res.data;
                    console.log('result',result)
                    this.ft_circulation = Util.toThousands(result.ft_circulation)
                    this.ft_destruction = Util.toThousands(result.ft_destroy_amount);
                    this.ft_secondary = Util.toThousands(result.secondary_circulation);
                    this.status = result.data_state;
                    this.today_summary = result.summary
                    this.prev_all_summary = result.prev_day_dividend_detail.summary
                    callback && callback()
                }
            })
        },
        _get_fci06(){
            service.get_fci06({})
            .then(res=>{
                if(res.status==='ok'){
                    let result = res.data;
                    console.log(result)
                    let flag = ''
                    if(parseInt(result.increase)>0){
                        this.fci06_color = 'green'
                        flag = '+'
                    }else{
                        this.fci06_color = 'red'
                    }
                    this.fci06_rate = flag + (result.increase * 100).toFixed(2) + '%';
                    this.fci06_base = parseFloat(result.quote_index).toFixed(2);
                    this.fci06_curr = parseFloat(result.current_index).toFixed(2);
                }
            })
        }
    }
}
