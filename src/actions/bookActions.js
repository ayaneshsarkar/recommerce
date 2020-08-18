export const createBook = (file) => {
  return async (dispatch, getState, {getFirebase}) => {

    const blob = await fetch(file).then(r => r.blob());
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref();

    const fileImageRef = storageRef.child(file);

    // const upload = fileImageRef.put(blob);
    // await upload.on('state_change', snapshot => {

    // }, error => {
    //   dispatch({ type: 'FILE_UPLOAD_ERROR', error });
    // }, () => {
    //   upload.snapshot.ref.getDownloadURL().then(downloadURL => {
    //     dispatch({ type: 'FILE_UPLOAD_SUCCESS', url: downloadURL });
    //   });
    // });


    fileImageRef.put(blob).then(async (snapshot) => {
      dispatch({ type: 'FILE_UPLOAD_SUCCESS', url: await snapshot.ref.getDownloadURL().then(url => url) });
    }).catch(error => {
      dispatch({ type: 'FILE_UPLOAD_ERROR', error });
    });
    
  }
}