import { createSlice } from '@reduxjs/toolkit'


const topicsSlice= createSlice({
  name: 'topics',
  initialState:{
    topics:{}
  },
  reducers: {
    addTopic: (state, action) => {
      const {id, name, icon} = action.payload
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      }
    }
    extraReducers: (builder) =>{
      builder.addCase(addQuiz, (state, action) =>{
        const {topicId, id} = action.payload
        const topic = state.topics[topicId]
        if (topic){
          topic.quizIds.push(id)
        }
      })
      // why does solution use 'quizzes/addQuiz': (state, action) => {}

    }
  }
})
export const selectTopics = (state) => state.topics.topics
//why is it state.topics.topics, also what does the line above mean?

export const {addTopic}= topicsSlice.actions
export default topicsSlice.reducer
