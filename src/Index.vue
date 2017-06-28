<template>
  <div class="page-container">
    <br>
    <div id="section_home" v-if="sectionNum==1">
      <el-row>
        {{msg_section1}}
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24"> <GiftcardList></GiftcardList></el-col>
      </el-row>
    </div>

    <div id="section_cart" v-else-if="sectionNum==2">
      <el-row>
        {{msg_section2}}
      </el-row>
      <el-row :gutter="24">
        <el-col :span="24"> <CartGiftcard></CartGiftcard></el-col>
      </el-row>
      <ModalCards v-if="showModalCards" @close="showModalCards = false"></ModalCards>
    </div>

    <div id="section_payment" v-else-if="sectionNum==3">
      <el-row>
        {{msg_section3}}
      </el-row>
    </div>

    <div id="section_outcome" v-else-if="sectionNum==4">
      <el-row>
        {{msg_section4}}
      </el-row>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import GiftcardList from './components/home/giftcards/List';
  import CartGiftcard from './components/cart/List';
  import ModalCards from './components/common/Modal';

  export default {
    name: 'shop',
    computed: mapGetters({
      sectionNum: 'sectionNum',
      showModalCards: 'showModalCards',
    }),
    data() {
      return {
        msg_section1: 'Selecciona tu diseño',
        msg_section2: 'Agrega tus giftcards',
        msg_section3: 'Iniciar Sesión',
        msg_section4: 'Metodo de pagos',
      };
    },
    components: {
      GiftcardList,
      CartGiftcard,
      ModalCards,
    },
  };
</script>
<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-row:last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }

</style>
