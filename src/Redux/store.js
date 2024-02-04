import { createStore } from 'redux'
import {imageReducer} from './Reducer/imageUploadReducer'

export const store = createStore(imageReducer)