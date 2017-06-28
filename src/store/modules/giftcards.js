/* eslint-disable */
import api from '../../api/fixtures';
import * as types from '../common/mutation-constant';

// initial state
const state = {
    currency: {},
    cardsCatOrder: [],
    cardsCat: [],
    cardsTmpl: {},
    availablePrices: [],
    maximumAmount: 0,
    maximumQuantity: 0,

    sectionNum: 1,
    showModalCards: false,
    cardsTmplSelects: [
    ],
};

// getters
const getters = {
    currency: state => state.currency,
    cardsCatOrder: state => state.cardsCatOrder,
    cardsCat: state => state.cardsCat,
    cardsTmpl: state => state.cardsTmpl,
    availablePrices: state => state.availablePrices,
    maximumQuantity: state => state.maximumQuantity,
    maximumAmount: state => state.maximumAmount,
    sectionNum: state => state.sectionNum,
    cardsTmplSelects: state => state.cardsTmplSelects,
    showModalCards: state => state.showModalCards,
};

// actions
const actions = {
    setSectionNum({commit}) {
        commit(types.RECEIVE_SECTION_NUM, {sectionNum});
    },
    getCurrency({ commit }) {
        api.getCurrency(currency => {
            commit(types.RECEIVE_CURRENCY, { currency });
        })
    },
    getCardsCatOrder({ commit }) {
        api.getCardsCatOrder(cardsCatOrder => {
            commit(types.RECEIVE_CARDS_CAT_ORDER, { cardsCatOrder })
        })
    },
    getCardsCat({ commit }) {
        api.getCardsCat(cardsCat => {
            commit(types.RECEIVE_CARDS_CAT, {cardsCat})
        })
    },
    getCardsTmpl({ commit }) {
        api.getCardsTmpl(cardsTmpl => {
            commit(types.RECEIVE_CARDS_TMPL, {cardsTmpl})
        })
    },
    getAvailablePrices({ commit }) {
        api.getAvailablePrices(availablePrices => {
            commit(types.RECEIVE_AVAILABLE_PRICES, {availablePrices})
        })
    },
    getMaximumAmount({ commit }) {
        api.getMaximumAmount(maximumAmount => {
            commit(types.RECEIVE_MAX_AMOUNT, {maximumAmount})
        })
    },
    getMaximumQuantity({ commit }) {
        api.getMaximumQuantity(maximumQuantity => {
            commit(types.RECEIVE_MAX_QUANTITY, {maximumQuantity})
        })
    },
    getCardsTmplSelects({commit}) {
        commit(types.RECEIVE_CARDS_TMPL_SELECTS, {cardsTmplSelects});
    },
};

// mutations
const mutations = {
    [types.RECEIVE_CARDS_TMPL] (state, {cardsTmpl}) {
        state.cardsTmpl = cardsTmpl
    },
    [types.RECEIVE_AVAILABLE_PRICES] (state, {availablePrices}) {
        state.availablePrices = availablePrices
    },
    [types.ADD_TO_CART] (state, cardSelect) {
        state.cardsTmplSelects.push(cardSelect);
        state.sectionNum = 2;
        state.showModalCards = false;
    },

    [types.RECEIVE_CARDS_TMPL_SELECTS] (state, {cardsTmplSelects}) {
        state.cardsTmplSelects = cardsTmplSelects;
    },
    [types.REMOVE_FROM_CART] (state, card) {
        const index = state.cardsTmplSelects.findIndex(added => added.id === card.id);
        state.cardsTmplSelects.splice(index, 1);
        if(state.cardsTmplSelects.length === 0) {
            state.sectionNum = 1;
        }
    },
    [types.SET_SHOW_MODAL_CARDS] (state) {
        state.showModalCards = !state.showModalCards
    }
    /*
    [types.ADD_TO_CART] (state,  id ) {
        state.all.find(p =>  p.id === id).inventory--;
    },
    [types.REMOVE_FROM_CART] (state, removedProduct) {
        state.all
            .find(product => product.id === removedProduct.id)
            .inventory += removedProduct.quantity
    } */
};

export default {
    state,
    getters,
    actions,
    mutations
}
