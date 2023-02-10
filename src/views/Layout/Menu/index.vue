<template>
  <el-menu default-active="/" router background-color="rgb(26, 111, 145)" text-color="#fff"
  active-text-color="#ffd04b" class="el-menu-vertical-demo" :collapse="isCollapse">
  <el-menu-item>
    <span slot="title">仓库管理系统</span>
  </el-menu-item>
  <el-menu-item index="/">
    <i class="el-icon-menu"></i>
    <span slot="title">系统首页</span>
  </el-menu-item>
  <el-submenu index="/goods">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">产品管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/goods/list">产品列表</el-menu-item>
      <el-menu-item index="/goods/category">产品分类</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="/order">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">订单管理</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/order/list">订单列表</el-menu-item>
      <el-menu-item index="/order/collect">汇总清单</el-menu-item>
      <el-menu-item index="/order/auditing">订单审核</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-submenu index="/advert">
    <template slot="title">
      <i class="el-icon-document"></i>
      <span slot="title">广告分类</span>
    </template>
    <el-menu-item-group>
      <el-menu-item index="/advert/list">广告列表</el-menu-item>
      <el-menu-item index="/advert/list" disabled>分类管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>

  <el-submenu index="4" disabled>
    <template slot="title">
    <i class="el-icon-setting"></i>
    <span slot="title">系统管理</span>
  </template>
    <el-menu-item-group>
      <el-menu-item index="4-1">用户管理</el-menu-item>
      <el-menu-item index="4-2">部门管理</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</el-menu>
</template>

<script>
export default {
  props:['isCollapse']
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
 
</style>