
<template>
  <div id="app">
    <TopNav  />
    <!--<SideBarLeft />-->
    <!-- <SideBarRight />-->
    <el-main>
      <router-view />
    </el-main>
    <el-drawer
      :with-header="false">
      <span>Hi there!</span>
    </el-drawer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
//import SideBarLeft from './components/SideBarLeft.vue'
//import SideBarRight from './components/SideBarRight.vue'
export default {
  name: 'app',
  components: {
   //SideBarLeft
   //SideBarRight
    TopNav
  },
}
</script>

<style>
#app {
  font-family: 'Open Sans', sans-serif;
}
</style>