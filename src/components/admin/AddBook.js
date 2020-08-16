import React, { Component, createRef } from 'react';

class AddBook extends Component {

  state = {
    title: '',
    author: '',
    publishDate: '',
    bookImage: ''
  }

  bookImageInput = createRef();
  bookInput = createRef();
  imgPreview = createRef();

  imageClick = () => {
    const bookImageInput = this.bookImageInput;
    bookImageInput.current.click();
  }

  imgChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      console.log(e.target.value);
      //eslint-disable-next-line
      this.bookInput.current.value = e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    } else {
      this.bookInput.current.value = 'Choose An Image';
    }
  }

  inputChange = () => {
    console.log('yes');
  }

  formSubmit = () => {
    console.log('yes');
  }

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <h3 className="form_title mb-5">Add Books</h3>
        </div>

        <div className="col-12">
          <form className="index-form" onSubmit={this.formSubmit}>
            {/* BOOK TITLE */}
            <div className="inputbox">
              <label htmlFor="title">Book Title</label>
              <input value={this.state.title} onChange={this.inputChange} type="text" id="title" placeholder="Book Title" />
              <div className="mid_margin"></div>
            </div>

            {/* AUTHOR FULLNAME */}
            <div className="inputbox">
              <label htmlFor="author">Author</label>
              <input value={this.state.author} onChange={this.inputChange} type="text" id="author" placeholder="Author Fullname" />
              <div className="mid_margin"></div>
            </div>

            {/* PUBLISH DATE */}
            <div className="inputbox">
              <label htmlFor="publishDate">Publish Date</label>
              <input value={this.state.publishDate} onChange={this.inputChange} type="text" id="publishDate" placeholder="Publish Date" />
              <div className="mid_margin"></div>
            </div>

            {/* BOOK IMAGE */}
            <div className="inputbox">
              <label htmlFor="bookImage">Book Image</label>
              <input type="file" ref={this.bookImageInput} onChange={this.imgChange} className="hidden" id="bookImage" />
              <div className="imageBox">
                <span onClick={this.imageClick} className="imageClip mb-3"><i className="fas fa-paperclip"></i></span>
                <input type="text" ref={this.bookInput} readOnly value="Choose An Image" className="mb-3" />
              </div>

              <img className="img-fluid inputPre" src="" alt="" ref={this.imgPreview} />
              <div className="mid_margin"></div>
            </div>

            {/* SUBMIT BUTTON */}
            <div className="input_button">
              <button type="submit" className="btn btn-dark">Submit</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}


export default AddBook;