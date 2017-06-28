/* eslint-disable */
<template>
    <el-col :span="7">
      <el-button :body-style="{ padding: '0px' }" @click="addToCards(card)">
        <img :src="card.cardImage.url" class="image" >
      </el-button>
    </el-col>
</template>

<script>
  // import AddToCart from './AddToCart';
  import { mapActions } from 'vuex';

  export default {
    props: {
      card: Object,
    },
    data() {
      return {
        currentDate: new Date(),
      };
    },
    methods: mapActions([
      'addToCards',
    ]),
    components: {
      // AddToCart,
    },
  };
</script>

<style scoped>
  .image {
    width: 100%;
    display: block;
  }
  .el-col {
    border-radius: 4px;
    margin: 10px;
  }
</style>
