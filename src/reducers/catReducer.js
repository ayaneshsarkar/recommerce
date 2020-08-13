const initState = {};

const catReducer = (state = initState, action) => {

  switch(action.type) {
    case 'CREATE_CAT_SUCCESS':
      console.log('Category Create Success');
      return state;
    case 'CREATE_CAT_ERROR':
      console.log('Category Create Error', action.error);
      return state;
    case 'TEST_SUCCESS':
      console.log('Test Success');
      return action.data;
    case 'TEST_ERROR':
      console.log('TEST ERROR', action.error);
      return state;
    case 'DELETE_CAT_SUCCESS':
      console.log('Category Delete Success');
      return state;
    case 'DELETE_CAT_ERROR':
      console.log('Category Delete Error');
      return action.error;
    case 'UPDATE_CAT_SUCCESS':
      console.log('Category Update Success');
      return state;
    case 'UPDATE_CAT_ERROR':
      console.log('Category Update Error');
      return action.error;
    default:
      return state;
  }

};


export default catReducer;