import {ADD_TO_SHELF, REMOVE_BOOK} from './mutation-types'

export default {
  addBook(context, payload){
    console.log(66666666, 'addbookk');
    context.commit(ADD_TO_SHELF, payload)
    console.log(REMOVE_BOOK);
  },

}