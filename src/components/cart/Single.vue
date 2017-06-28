/* eslint-disable */
<template>
    <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
            <el-button class="el-icon-delete" @click="removeFromCart(card)"></el-button>
            <img :src="card.cardImage.url" class="image" >
            <div style="padding: 14px;">
                <span>{{card.title}}</span>
                <div>
                    <el-select v-model="value" placeholder="Select">
                        <el-option
                                v-for="item in availablePrices"
                                :key="item.value"
                                :value="item">
                        </el-option>
                    </el-select>
                </div>
            </div>
        </el-card>
    </el-col>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
      props: {
        card: Object,
        availablePrices: Array,
      },
      data() {
        return {
          currentDate: new Date(),
        };
      },
      components: {
      },
      methods: mapActions([
        'removeFromCart',
      ]),
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
