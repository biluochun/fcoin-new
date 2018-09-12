<template>
    <div class="module-banner">
        <swiper-banner :bannerlist='bannerlist'></swiper-banner>
      <div class="banner-title">
          <h3 class="vote-title">FCandy提案决策投票</h3>
          <p class="vote-timer">投票时间为：8月27日18：00（GMT+8）至8月28日18：00（GMT+8）</p>
          <div class="part-in"><a class="link" href="javascript:;">立即参与<i class="icon-more go"></i></a></div>
      </div>
      <div class="banner-notice">
          <div class="notice-item community">
              <h5 class="notice-title">社区治理公告</h5>
              <ul>
                  <li v-for="(item,index) in communitylist" :key='index'>
                      <a :href="item.html_url" class="link">
                          {{item.title}}
                      </a>
                    </li>
              </ul>
          </div>
          <div class="notice-item platform">
              <h5 class="notice-title">平台公告</h5>
          </div>
      </div>
    </div>
</template>

<script>
    /**
     * @file
     * @author jinguangguo
     * @date 2018/9/7 下午7:33
     */
    import vm from './main.js';
    export default vm;
</script>

<style lang="scss">
    @import "./style";
</style>
