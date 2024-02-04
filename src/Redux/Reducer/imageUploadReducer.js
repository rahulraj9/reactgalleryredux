import {GETIMAGEUPLOADDATA,UPLOADIMAGE} from '../Action/imageUploadAction'
const initialAction = {
  images:[
  ],
}
export function imageReducer(state=initialAction,action){
  switch (action.type) {
    case GETIMAGEUPLOADDATA:
      return{
        ...state,
        images:[
          ...state.images,{
            file:action.file,
          }
        ]
      }
    case UPLOADIMAGE:
      return{
       ...initialAction
      }
  
    default:
      return state
  }
}