<template>
  <div>
    <!-- 顶部区域 -->
    <div class="header">
      <div class="icon">
        <i v-if="!isCollapse" @click="changemenu" class="iconfont icon-right-indent"></i>
        <i v-else @click="changemenu" class="iconfont icon-left-indent"></i>
      </div>
      <div class="header-right">
        <span>{{ nowTime }}</span>
        <span class="line">|</span>
        <span>欢迎xxxx</span>
        <span class="line">|</span>
        <span class="exit">
          <i class="iconfont icon-tuichu"></i>
        </span>
      </div>
    </div>

    <!-- 内容区域 -->
    <router-view></router-view>
  </div>
</template>

<script>
// 导入dayjs
import dayjs from 'dayjs'

export default {
  props:['isCollapse'],
  methods:{
    data(){
      return{
        nowTime:''
      }
    },
    changemenu(){
      this.$emit('changeMenu')
    }
  },
  created(){
    // 获取当前时间
    this.nowTime = dayjs(new Date()).format('YYYY年MM月DD日 HH:mm:ss')
  }
}
</script>

<style lang="less" scoped>
.header{
  background: skyblue;
  height: 50px;
  width: 100%;
  line-height: 50px;
  color: white;
  display: flex;
  .icon{
    i{
      font-size:26px ;
    }
  }
  .header-right{
    font-size: 12px;
    flex: 1;
    text-align: right;
    padding-right: 20px;
    .line{
      font-size: 12px;
      padding: 10px;
      color: #f5f5f5;
    }
    .exit{
      float: right;
      position: relative;
      height: 50px;
      width: 30px;
      
      i{
        font-size: 18px;
        top:50%;
        transform: translateY(-50%);
        position:absolute;
        right: 10px;
      }
    }
  }
}
</style>