import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import catReducer from './catReducer';

const rootReducer = combineReducers({

  firestore: firestoreReducer,
  firebase: firebaseReducer,
  categories: catReducer
});

export default rootReducer;