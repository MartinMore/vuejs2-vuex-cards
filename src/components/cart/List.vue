/* eslint-disable */
<template>
    <el-row :gutter="24">
        <Single :availablePrices="availablePrices" :card="card" v-for="card in cardsTmplSelects" :key="card.$index"></Single>
        <el-col :span="6">
            <el-button :body-style="{ padding: '0px' }" @click="setShowModalCards()">
                <img :src="empty.cardImage.url" class="image" >
                <div style="padding: 14px;">
                    <span>{{empty.title}}</span>
                </div>
            </el-button>
        </el-col>
    </el-row>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import Single from './Single';

    export default {
      name: 'Selects',
      data() {
        return {
          empty: {
            id: -1,
            title: 'AGREGAR GIFT CARD',
            cardImage: {
              url: '../../assets/addcard.png',
            },
          },
        };
      },
      computed: mapGetters({
        cardsTmplSelects: 'cardsTmplSelects',
        availablePrices: 'availablePrices',
      }),
      created() {
        this.$store.dispatch('getCardsTmplSelects');
        this.$store.dispatch('getAvailablePrices');
      },
      methods: mapActions([
        'removeFromCart',
        'setShowModalCards',
      ]),
      components: {
        Single,
      },
    };
</script>
