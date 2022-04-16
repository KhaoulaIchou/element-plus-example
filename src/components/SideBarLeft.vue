<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">Menu</h5>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
      <el-menu-item :route="{ name: 'home' }" index="1">Home</el-menu-item>
      <el-menu-item :route="{ name: 'statistic' }" index="2">Statistic Page</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
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