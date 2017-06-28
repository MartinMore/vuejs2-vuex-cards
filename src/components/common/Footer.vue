<template>
  <div class="footer">
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <div class="page-container">
          {{footer}}
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'siteFooter',
    data() {
      return {
        footer: 'Copyright 2017, GiftCard',
      };
    },
  };
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
  .footer{
    margin-top:50px;
  }
  .footer .page-container{
    padding:20px 0px;
  }
  .footer a{
    color:#fff;
    text-decoration: none;
  }
</style>
