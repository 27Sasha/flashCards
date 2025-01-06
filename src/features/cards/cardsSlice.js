import { createSlice } from '@reduxjs/toolkit'

const cardsSlice = createSlice({
  name: 'cards',
  intialState:{
    cards: {}
  },
  reducer:{
    addCard: (state,action) =>{
      const {id, front, back} = action.payload
      state.cards[id] = ({id: id, front: front, back: back})
    }
  }
})

export const selectCard = (id) = (state) => state.cards.cards
export const { addCards } = cardsSlice.action
export default cardsSlice.reducer
