import {ADD_TO_SHELF, 
                REMOVE_BOOK,
                ALERT_BOOK,
              } from './mutation-types'

export default {
  [ADD_TO_SHELF](state, payload) {
    state.bookList.push(payload)
  },
  [REMOVE_BOOK](state, payload) {
  },
  [ALERT_BOOK](state, payload) {
    state.book = payload
  }
}