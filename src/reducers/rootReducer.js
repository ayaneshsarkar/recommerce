import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import catReducer from './catReducer';
import bookReducer from './bookReducer';

const rootReducer = combineReducers({

  firestore: firestoreReducer,
  firebase: firebaseReducer,
  categories: catReducer,
  books: bookReducer
});

export default rootReducer;