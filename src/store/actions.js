import {ADD_TO_SHELF, 
                REMOVE_BOOK,
                ALERT_BOOK,
                } from './mutation-types'

export default {
  addBook(context, payload){
    context.commit(ADD_TO_SHELF, payload)
    console.log(REMOVE_BOOK);
  },
  modifyBook(context, payload) {
    context.commit(ALERT_BOOK, payload)
  }

}