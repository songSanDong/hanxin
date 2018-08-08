<template>
  <div id="app">
    <!-- 网页的header -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- sidebar -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表管理 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // 导入 AppHeader 组件
  import AppHeader from './components/AppHeader.vue';
  import AppSidebar from './components/AppSidebar.vue';
  // 导出
  export default {
    components: {
      AppHeader,
      AppSidebar
    }
  }
</script>

<style>

</style>
