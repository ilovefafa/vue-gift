<template>
  <div>

      <el-row :gutter="20" justify="center" type="flex">
        <el-col :span="10">
    <el-menu default-active="activeIndex1" mode="horizontal">
      <el-menu-item index="1"><a href='http://www.qq.com' target="_blank">主页</a></el-menu-item>
      <el-menu-item index="2">发布礼物</el-menu-item>
      <el-menu-item index="3">赠送礼物</el-menu-item>
      <el-menu-item index="4">发现</el-menu-item>
      <!-- <el-submenu index="4">
        <template slot="title">下拉菜单</template>
        <el-menu-item index="4-1">4-1</el-menu-item>
        <el-menu-item index="4-2">4-2</el-menu-item>
        <el-menu-item index="4-3">4-3</el-menu-item>
      </el-submenu> -->

    </el-menu>
    </el-col>
    <el-col offset="4" :span="10">
    <el-menu default-active="activeIndex2" mode='horizontal' id='user-nav' router='true'>
      <el-menu-item index="login">登陆</el-menu-item>
      <el-menu-item index="signIn" >注册</el-menu-item>
    </el-menu>
    </el-col>
   </el-row>
     </div>
</template>

<script>
export default {
  name: 'headerE'
}
</script>

<style>
#user-nav{
  color: red
}
</style>
