const initState = {};

const bookReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FILE_UPLOAD_SUCCESS':
      console.log('File Upload Success', action.url);
      return {...state, url: action.url};
    case 'FILE_UPLOAD_ERROR':
      console.log('File Upload Error', action.error);
      return state;
    default:
      return state;
  }
}

export default bookReducer;