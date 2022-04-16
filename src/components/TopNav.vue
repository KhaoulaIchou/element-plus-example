<template>
  <el-menu
    :default-active="activeIndex"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item :route="{ name: 'home' }" index="1">Home</el-menu-item>
    <el-menu-item :route="{ name: 'statistic' }" index="2">Statistic Page</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>