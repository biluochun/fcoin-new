<template>
  <div id="app" v-wechat-title="`${$t($route.meta.title)} - ${$route.path === '/' ? $t('index.slogan') : 'FCoin'}`">
    <router-view/>
  </div>
</template>

<script>
//输出header组件
export default{
}
</script>
