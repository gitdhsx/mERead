import {ADD_TO_SHELF, REMOVE_BOOK} from './mutation-types'

export default {
  [ADD_TO_SHELF](state, payload) {
    console.log(9999999, 'add to shelf');
    state.bookList.push(payload)
  },
  [REMOVE_BOOK](state, payload) {
    console.log(123321);
  }
}