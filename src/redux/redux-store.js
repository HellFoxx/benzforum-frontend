import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user-slice'
import messagesReducer from './messages-slice'
import discussionsReducer from './discussions-slice'

export default configureStore({
  reducer: {
    user : userReducer,
    messages : messagesReducer,
    discussions : discussionsReducer,
  },
})