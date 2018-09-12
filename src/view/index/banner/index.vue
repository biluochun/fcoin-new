<template>
    <div class="module-banner">
        <swiper-banner :bannerlist='bannerlist'></swiper-banner>
      <div class="banner-notice">
          <div class="notice-item community">
              <h5 class="notice-title">社区治理公告</h5>
              <ul>
                  <li v-for="(item,index) in communitylist" :key='index' class="notice-list">
                      <a :href="item.html_url" class="link">
                          {{item.title}}
                      </a>
                    </li>
              </ul>
          </div>
          <div class="notice-item platform">
              <h5 class="notice-title">平台公告</h5>
              <ul>
                  <li v-for="(item,index) in communitylist" :key='index' class="notice-list">
                      <a :href="item.html_url" class="link">
                          {{item.title}}
                      </a>
                    </li>
              </ul>
          </div>
      </div>
    </div>
</template>

<script>
    /**
     * @file
     * @author jinguangguo
     * @date 2018/9/12 上午10:00
     */
    import vm from './main.js';
    export default vm;
</script>

<style lang="scss">
    @import "./style";
</style>
