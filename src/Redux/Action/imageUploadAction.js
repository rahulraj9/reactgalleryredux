export const GETIMAGEUPLOADDATA = 'Upload Image Data'
export const UPLOADIMAGE = 'UploadImage'


export const imgUploadData = (file)=>({file,type:GETIMAGEUPLOADDATA})

export const upldImage = ()=>({type:UPLOADIMAGE})