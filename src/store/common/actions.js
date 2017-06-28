/* eslint-disable */
import * as types from './mutation-constant'

export const addToCards = ({commit}, cardSelect) => {
  commit(types.ADD_TO_CART, cardSelect)
};

export const removeFromCart = ({commit}, card) => {
    commit(types.REMOVE_FROM_CART, card)
};

export const setShowModalCards = ({commit}) => {
    commit(types.SET_SHOW_MODAL_CARDS)
};
