const initState = {};

const bookReducer = (state = initState, action) => {
  switch(action.type) {
    case 'FILE_UPLOAD_SUCCESS':
      console.log('File Upload Success', action.url);
      return {...state, url: action.url};
    case 'FILE_UPLOAD_ERROR':
      console.log('File Upload Error', action.error);
      return state;
    case 'CREATE_BOOK_SUCCESS':
      console.log('Create Book Success');
      return state;
    case 'CREATE_BOOK_ERROR':
      console.log('Create Book Error', action.error);
      return state;
    default:
      return state;
  }
}

export default bookReducer;