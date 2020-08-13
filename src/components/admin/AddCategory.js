import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createCat} from '../../actions/catActions';

class AddCategory extends Component {

  state = {
    category: '',
  }

  inputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();

    if(this.state.category) {
      const category = { category: this.state.category.toLowerCase() };
      this.props.createCat(category);
      console.log(category);
      this.setState({ category: '' });
      this.props.history.push('/admin/viewcategories');
    } else {
      this.props.history.push('/admin/viewcategories');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="col-12">
          <h3 className="form_title mb-5">Add Book Category</h3>
        </div>

        <div className="col-12">
          <form className="index-form" onSubmit={this.formSubmit}>
            {/* CATEGORY NAME */}
            <div className="inputbox">
              <label htmlFor="category">Category Name</label>
              <input value={this.state.category} onChange={this.inputChange} type="text" id="category" placeholder="Category Name (Optional)" />
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

const mapDispatchToProps = (dispatch) => {
  return {
    createCat: (cat) => dispatch(createCat(cat)),
  }
}

export default connect(null, mapDispatchToProps)(AddCategory);