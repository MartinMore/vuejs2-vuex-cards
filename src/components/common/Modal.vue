<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            SELECCIONA TU DISEÑO
                        </slot>
                        <el-button class="el-icon-close" @click="setShowModalCards()"></el-button>
                    </div>
                    <div class="modal-body">
                        <el-row :gutter="24">
                            <el-col :span="24"> <GiftcardList></GiftcardList></el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import { mapActions } from 'vuex';
  import GiftcardList from '../home/giftcards/List';

  export default {
    name: 'modalCards',
    methods: mapActions([
      'setShowModalCards',
    ]),
    created() {
    },
    components: {
      GiftcardList,
    },
  };
</script>


<style scoped>
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        width: 800px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
