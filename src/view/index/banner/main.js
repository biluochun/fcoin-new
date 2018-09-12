/**
 * @file
 * @author fuheyong
 * @date 2018/9/12 上午10:00
 */

import swiperBanner from '../../../component/Swiper';
import service from '../service';

export default {
    name: 'Banner',

    components: {},
    created() {
        //this.getbanner()
        /*
        this.get_announcements('community_governance');
        this.get_announcements('main');
         */
        this._fetchNotice('main');
    },
    data() {
        return {
            communitylist: [{
                html_url: 'javascript:;',
                title: '[09-02]FI社区启动公投及继续停牌申请[09-02]FI社区启动公投及继续停牌申请'
            }, {
                html_url: 'javascript:;',
                title: '[09-02]FI社区启动公投及继续停牌申请'
            }],
            bannerlist: [{
                img: require('./banner.jpg'),
                url: 'javascript:;'
            }, {
                img: require('./banner.png'),
                url: 'javascript:;'
            }],
            mainAnnouncementList: [],
            communityAnnouncementList: []
        }
    },
    methods: {
        _fetchNotice(type) {
            service.getAnnouncement({
                page: 1,
                pageSize: 5,
            }).then(rep => {
                debugger;
            });
        }
    }
}
