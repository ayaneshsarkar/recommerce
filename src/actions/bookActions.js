export const uploadBookFile = (file) => {
  return async (dispatch, getState, {getFirebase}) => {

    const blob = await fetch(file).then(r => r.blob());
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();
    const fileImageRef = storageRef.child(file);

    fileImageRef.put(blob).then(async (snapshot) => {
      dispatch({ type: 'FILE_UPLOAD_SUCCESS', url: await snapshot.ref.getDownloadURL().then(url => url) });
    }).catch(error => {
      dispatch({ type: 'FILE_UPLOAD_ERROR', error });
    });
    
  }
}


export const createBook = (book) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection('books').add({
      ...book,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_BOOK_SUCCESS' });
    }).catch(error => {
      dispatch({ type: 'CREATE_BOOK_ERROR', error });
    });
  }
}