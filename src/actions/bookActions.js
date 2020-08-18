export const createBook = (book, file) => {
  return async (dispatch, getState, {getFirebase, getFirestore}) => {

    const blob = await fetch(file).then(r => r.blob());
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();
    const fileImageRef = storageRef.child(file);

    const firestore = getFirestore();

    fileImageRef.put(blob).then(async (snapshot) => {
      const downloadURL = await snapshot.ref.getDownloadURL().then(url => url);
      firestore.collection('books').add({
        ...book,
        bookURL: downloadURL,
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_BOOK_SUCCESS' });
      }).catch(error => {
        dispatch({ type: 'CREATE_BOOK_ERROR', error });
      });
    }).catch(error => {
      dispatch({ type: 'FILE_UPLOAD_ERROR', error });
    });
    
  }
}