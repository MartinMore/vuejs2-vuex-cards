<template>
  <el-row :gutter="24">
    <Single :card="card" v-for="card in cardsTmpl" :key="card.$index"></Single>
  </el-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Single from './Single';

  export default {
    name: 'cardsTmpl',
    computed: mapGetters({
      cardsTmpl: 'cardsTmpl',
    }),
    created() {
      this.$store.dispatch('getCardsTmpl');
    },
    components: {
      Single,
    },
  };
</script>
