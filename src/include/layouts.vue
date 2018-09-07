<template>
  <div class="layouts">
    <slot name="header">
      <v-header></v-header>
    </slot>
    <slot name="banner">
      <banner></banner>
    </slot>
    <slot name="main"></slot>
    <slot name="footer">
      <v-footer></v-footer>
    </slot>
    <slot name="other"></slot>
  </div>
</template>

<script>
import banner from '../component/banner'
import header from '../component/header'
import footer from '../component/footer'
//输出header组件
export default{
  components: {
    'banner': banner,
    'v-header': header,
    'v-footer': footer
  }
}
</script>
