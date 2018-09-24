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
        this._get_trading_fees_group();
        this._get_fci06();
        commonService.onLoopSocketData({
            initCallback: (config) => {
                console.log('config',config)
                this.tickerDatas = config.symbolMap
                this.currentPrice = config.currentPrice
                this._get_trading_fees_group(()=>{
                    this.yesterdayConvert =  Util.toThousands((Util.numMulti(Util.numMulti(this.prevAllSummary,500),this.currentPrice.btc)).toFixed(2)) + ' USDT';
                })

            },
            loopCallback:(config)=>{
                //console.log(config)
            }
        })
    },
    data() {
        return {
            mainAnnouncementList: [],//平台公告
            communityAnnouncementList: [],//社区治理公告
            bannerList: [                 //banner配置
                {
                    img: require('./img/banner.jpg'),
                    url: 'javascript:;',
                    voteTitle: 'FCandy提案决策投票',
                    voteTimer: '投票时间为：8月27日18：00（GMT+8）至8月28日18：00（GMT+8)',
                    partIn: 'javascript:;'
                }, {
                    img: require('./img/banner02.png'),
                    url: 'javascript:;',
                    voteTitle: 'FCoin提案决策投票',
                    voteTimer: '投票时间为：10月10日18：00（GMT+8）至8月28日18：00（GMT+8)',
                    partIn: 'javascript:;'
                }
            ],
            ftCirculation:'-',//FT总流通量
            ftDestruction: '-',//FT总销毁量
            ftSecondary:'-',//FT二级市场流通量
            yesterdayConvert: '-',//昨日全站交易量折合
            fci06_rate: '-',
            fci06_color: '',
            fci06_base: '-',
            fci06_curr: '-',
            status:'normal',
            todaySummary: '-',//今日手续费收入总额折合
            prevAllSummary: '',
            currentPrice: {},
            tickerDatas:{},
            currentPrice:{}
        }
    },
    methods: {
        _fetchMainNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 3,
                type: 'main',
            }).then(rep => {
                if (rep.status ===  200) {
                    this.mainAnnouncementList = rep.data.data.content;
                }
            });
        },

        _fetchCommunityNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 3,
                type: 'community_governance'
            }).then(rep => {
                if (rep.status === 200) {
                    this.communityAnnouncementList = rep.data.data.content;
                }
            });
        },
        _get_trading_fees_group(callback){
            service.get_trading_fees_group({})
            .then(res=>{
                //console.log('res',res)
                if(res.status===200){
                    let result = res.data.data;
                    this.ftCirculation = Util.toThousands(result.ft_circulation)
                    this.ftDestruction = Util.toThousands(result.ft_destroy_amount);
                    this.ftSecondary = Util.toThousands(result.secondary_circulation);
                    this.status = result.data_state;
                    this.todaySummary = result.summary
                    this.prevAllSummary = result.prev_day_dividend_detail.summary
                    callback && callback()
                }
            })
        },
        _get_fci06(){
            service.get_fci06({})
            .then(res=>{
                if(res.status===200){
                    let result = res.data.data;
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
