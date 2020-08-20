const initState = {};

const bookReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_BOOK_SUCCESS':
      console.log('Create Book Success');
      return state;
    case 'CREATE_BOOK_ERROR':
      console.log('Create Book Error', action.error);
      return state;
    case 'FILE_UPLOAD_ERROR':
      console.log('File Upload Error', action.error);
      return state;
    case 'GET_BOOK_SUCCESS':
      return action.data;
    case 'GET_BOOK_ERROR':
      console.log(action.error);
      return action.error;
    default:
      return state;
  }
}

export default bookReducer;