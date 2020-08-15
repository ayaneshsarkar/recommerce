import React, { Component } from 'react';

class AddBook extends Component {

  state = {
    title: '',
    author: '',

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