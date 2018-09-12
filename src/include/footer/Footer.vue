
<template>
    <footer class="module-footer">
       <div class="layout-container">
           <div class="container-info fn-clearfix">
               <div class="footer-logo">
                   <a href="/" class="link">
                    <i class="icon-logo-gray"></i>
                   </a>
                   <p class="remind">币市有风险，投资需谨慎</p>
               </div>
               <div class="footer-left">
                   <dl class='dl'>
                       <dt class='dt'>{{$t('footer.services.title')}}</dt>
                       <dd class='dd'><a class="link" href="#">{{$t('footer.services.services_item_1')}}</a></dd>
                       <dd class='dd'><a class="link" href="">{{$t('footer.services.services_item_2')}}</a></dd>
                       <dd class='dd'><a class="link" href="">{{$t('footer.services.services_item_3')}}</a></dd>
                   </dl>
                   <dl class='dl'>
                       <dt class="dt">{{$t('footer.tool.title')}}</dt>
                       <dd class="dd"> <a class="link" href="">{{$t('footer.tool.services_item_1')}}</a></dd>
                       <dd class="dd"> <a class="link" href="">{{$t('footer.tool.services_item_2')}}</a></dd>
                   </dl>
                   <dl class='dl'>
                       <dt class="dt">{{$t('footer.clause.title')}}</dt>
                       <dd class="dd"> <a class="link" href="">{{$t('footer.clause.services_item_1')}}</a></dd>
                       <dd class="dd"> <a class="link" href="">{{$t('footer.clause.services_item_2')}}</a></dd>
                       <dd class="dd"> <a class="link" href="">{{$t('footer.clause.services_item_3')}}</a></dd>
                   </dl>
                   <dl class='dl'>
                       <dt class="dt">{{$t('footer.about.title')}}</dt>
                       <dd class="dd"><a class="link" href="">{{$t('footer.about.services_item_1')}}</a></dd>
                       <dd class="dd"><a class="link" href="">{{$t('footer.about.services_item_2')}}</a></dd>
                       <dd class="dd"><a class="link" href="">{{$t('footer.about.services_item_3')}}</a></dd>
                   </dl>
               </div>
            </div>  
            <div class="footer-community fn-clearfix">
                <a href="https://twitter.com/FCoinOfficial">
                    <i class="icon-twitter">
                        <i class="path2"></i>
                    </i>
                </a>
                <a href="javascript:;" @mouseover="toggle_language('show')" @mouseout="toggle_language('hide')">
                    <i class="icon-telegram">
                        <i class="path2"></i>
                    </i>
                    <div class="language" v-show="toggleLang">
                        <span @click="toggle_current('en')">English</span>
                        <span @click="toggle_current('cn')">中文</span>
                    </div>
                </a>
                <a href="https://github.com/FCoinOfficial">
                    <i class="icon-github">
                        <i class="path2"></i>
                    </i></a>
                <a href="https://medium.com/@FCoinOfficial" >
                    <i class="icon-medium">
                        <i class="path2"></i>
                    </i>
                </a>
                <a href="https://www.reddit.com/user/fcoinoffical/" >
                    <i class="icon-reddit">
                        <i class="path2"></i>
                    </i>
                </a>
                <a href="https://fcoinofficial.slack.com">
                    <i class="icon-slack">
                        <i class="path2"></i>
                    </i>
                </a>
                <p class="footer-bottom">Copyright © 2018 FCoin</p>
            </div>  
       </div>
    </footer>
</template>

<script>
    import vm from './footer.js'
    export default vm
</script>
<style lang="scss">
@import './footer.scss'
</style>
