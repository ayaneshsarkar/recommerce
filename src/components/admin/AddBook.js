import React, { Component, createRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import DateWrapper from './DateWrapper';

class AddBook extends Component {

  state = {
    title: '',
    author: '',
    publishDate: null,
    bookImage: '',
    bookImageAlt: 'Choose An Image'
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
      this.setState({
        bookImage: URL.createObjectURL(e.target.files[0]),
        //eslint-disable-next-line
        bookImageAlt: e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]
      });
      console.log(this.state.bookImage);
    }
  }

  inputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  dateChange = (date) => {
    this.setState({
      publishDate: date
    });
    console.log(this.state);
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

              <DatePicker id="publishDate"
                selected={this.state.publishDate}
                className="e-custom-style"
                placeholder="Enter Date"
                dateFormat="dd/MM/yyyy"
                placeholderText="DD/MM/YYYY"
                showMonthDropdown
                showYearDropdown
                scrollableMonthYearDropdown
                scrollableYearDropdown
                dropdownMode="select"
                calendarContainer={DateWrapper}
                onSelect={(date) => this.dateChange(date)} 
              />

              <div className="mid_margin"></div>
            </div>

            {/* BOOK IMAGE */}
            <div className="inputbox">
              <label htmlFor="bookImage">Book Image</label>
              <input type="file" ref={this.bookImageInput} onChange={this.imgChange} className="hidden" id="bookImage" />
              <div className="imageBox">
                <span onClick={this.imageClick} className="imageClip mb-3"><i className="fas fa-paperclip"></i></span>
                <input type="text" ref={this.bookInput} readOnly value={this.state.bookImageAlt} className="mb-3" />
              </div>

              <img className="inputPre" src={this.state.bookImage} alt={this.state.title} ref={this.imgPreview} />
              <div className="mid_margin"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="inputbox">
              <label htmlFor="description">Description</label>
              <textarea id="description" rows="5" placeholder="Description"></textarea>
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