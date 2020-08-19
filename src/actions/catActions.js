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

export const getCat = (id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('categories').where('id', '==', id).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        dispatch({ type: 'GET_CAT_SUCCESS', data: doc.data() });
      })
    }).catch(error => {
      dispatch({ type: 'GET_CAT_ERROR', error });
    });
  }
};

export const updateCat = (cat, id) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('categories').doc(id).update({
      ...cat,
      updatedAt: new Date()
    }).then(() => {
      dispatch({ type: 'UPDATE_CAT_SUCCESS', status: 'success' });
    }).catch(error => {
      dispatch({ type: 'UPDATE_CAT_ERROR', error });
    });
  }
};

export const deleteCat = (catId) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('categories').doc(catId).delete()
      .then(() => {
        dispatch({ type: 'DELETE_CAT_SUCCESS', status: 'deleted' });
      }).catch(error => {
        dispatch({ type: 'DELETE_CAT_ERROR', error });
      });
  }
};