export const createCat = (cat) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('categories').add({
      ...cat,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_CAT_SUCCESS' });
    }).catch(error => {
      dispatch({ type: 'CREATE_CAT_ERROR', error });
    });
  }
};

export const getCat = (catText) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('categories').where('category', '==', catText).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        dispatch({ type: 'TEST_SUCCESS', data: doc.data() });
      })
    }).catch(error => {
      dispatch({ type: 'TEST_ERROR', error });
    });
  }
}