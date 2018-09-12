/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */
import swiperBanner from '../../../component/Swiper';
import service from '../service';

export default {
    name: 'Banner',
    components: {
        swiperBanner
    },
    created() {
        this._fetchMainNotice();
        this._fetchCommunityNotice();
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
        }
    },
    methods: {
        _fetchMainNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 3,
                type: 'main'
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
    }
}
