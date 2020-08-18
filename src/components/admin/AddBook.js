import React, { Component, createRef } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {connect} from 'react-redux';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import DateWrapper from './DateWrapper';
import {createBook} from '../../actions/bookActions';

class AddBook extends Component {

  state = {
    title: '',
    author: '',
    publishDate: null,
    bookImage: '',
    bookImageAlt: 'Choose An Image',
    bookImageBlob: null,
    online: 0, paperback: 0, hardcover: 0,
    description: '',
    options: null,
    categoryId: null,
    downloadURL: ''
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidUpdate() {
    if(this.state.options === null) {
      this.setState({
        options: this.props.categories.map(cat => {
          return {
            value: cat.id, label: this.capitalizeFirstLetter(cat.category)
          }
        })
      })
    }

    if(this.props.url && !this.state.downloadURL) {
      this.setState({
        downloadURL: this.props.url
      });
    }

    if(this.state.downloadURL) {
      console.log(this.state.downloadURL);
    }
  }

  bookImageInput = createRef();
  bookInput = createRef();
  imgPreview = createRef();

  customStyles = {
    menu: (provided, state) => ({
      ...provided,
      fontSize: '1.6rem',
      borderRadius: '0.1px',
      color: '#777'
    }),

    option: (provided, state) => ({
      ...provided,
      padding: '1.7rem 2rem'
    }),
  }

  imageClick = () => {
    const bookImageInput = this.bookImageInput;
    bookImageInput.current.click();
  }

  imgChange = (e) => {
    const file = e.target.files[0];
    if(file) {
      this.setState({
        bookImage: URL.createObjectURL(e.target.files[0]),
        //eslint-disable-next-line
        bookImageAlt: e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1],
        bookImageBlob: e.target.files[0]
      });
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
  }

  catChange = categoryId => {
    this.setState({
      categoryId: categoryId.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();

    const book = {
      title: this.state.title,
      author: this.state.author,
      publishDate: this.state.publishDate,
      bookURL: this.state.downloadURL,
      onlinePrice: this.state.online,
      paperbackPrice: this.state.paperback,
      hardcoverPrice: this.state.hardcover,
      categoryId: this.state.categoryId,
      description: this.state.description
    };

    console.log(book);
    
    this.props.createBook(this.state.bookImage);
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
                <input type="text" ref={this.bookInput} readOnly value={this.state.bookImageAlt} 
                className="noCursor mb-3" />
              </div>

              <img className="inputPre" src={this.state.bookImage} alt="" 
              ref={this.imgPreview} />
              <div className="mid_margin"></div>
            </div>

            {/* PRICES */}
            {/* Online */}
            <div className="inputbox">
              <label htmlFor="online">Online Price</label>
              <div className="imageBox">
                <span className="imageClip noCursor"><i className="fas fa-rupee-sign"></i></span>
                <input onInput={this.inputChange} id="online" type="number" placeholder="Online Price" />
              </div>
              <div className="mid_margin"></div>
            </div>

            {/* Paperback */}
            <div className="inputbox">
              <label htmlFor="paperback">Paperback Price</label>
              <div className="imageBox">
                <span className="imageClip noCursor"><i className="fas fa-rupee-sign"></i></span>
                <input onInput={this.inputChange} id="paperback" type="number" placeholder="Paperback Price" />
              </div>
              <div className="mid_margin"></div>
            </div>

            {/* Hardcover */}
            <div className="inputbox">
              <label htmlFor="hardcover">Hardcover Price</label>
              <div className="imageBox">
                <span className="imageClip noCursor"><i className="fas fa-rupee-sign"></i></span>
                <input onInput={this.inputChange} id="hardcover" type="number" placeholder="Hardcover Price" />
              </div>
              <div className="mid_margin"></div>
            </div>

            {/* Categories */}
            <div className="inputbox">
              <label htmlFor="categories">Categories</label>
              { this.state.options ? 
              (<Select styles={this.customStyles} onChange={this.catChange} options={this.state.options} readOnly />) 
              : '' }
              <div className="mid_margin"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="inputbox">
              <label htmlFor="description">Description</label>
              <textarea onChange={this.inputChange} id="description" rows="5" placeholder="Description"></textarea>
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

const mapStateToProps = (state) => {
  return {
    categories: state.firestore.ordered.categories,
    url: state.books.url
  }
};

const mapStateToDispatch = (dispatch) => {
  return {
    createBook: (file) => dispatch(createBook(file))
  }
};


export default compose(connect(mapStateToProps, mapStateToDispatch),
  firestoreConnect([{ collection: 'categories', orderBy: ['updatedAt', 'desc'] }])
)(AddBook);