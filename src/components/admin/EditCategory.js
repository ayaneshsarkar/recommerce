import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {updateCat} from '../../actions/catActions';

class EditCategory extends Component {
  state = { category: '' }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidUpdate() {
    if(!this.state.category) {
      this.setState({
        category: this.capitalizeFirstLetter(this.props.category.category)
      });
    }
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
      this.props.updateCat(category, this.props.match.params.id);
      this.props.history.push('/admin/viewcategories');
    }

  }

  render() {
    const { category } = this.props;
    if(category) {
      return (
        <div className='container'>
          <div className="col-12">
            <h3 className="form_title mb-5">Add Book Category</h3>
          </div>

          <div className="col-12">
            <form className="index-form" onSubmit={this.formSubmit}>
              {/* CATEGORY NAME */}
              <div className="inputbox">
                <label htmlFor="category">Category Name</label>
                <input defaultValue={this.capitalizeFirstLetter(category.category)} onChange={this.inputChange} type="text" id="category" placeholder="Category Name (Optional)" />
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
    } else {
      return (
        <div className="container">
          <div className="col-12">
            <h3 className="form-title mb-5">Nothing Here!</h3>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const categories = state.firestore.data.categories;
  const category = categories ? categories[id] : null;

  return {
    category: category
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    updateCat: (cat, id) => dispatch(updateCat(cat, id))
  }
}

export default compose(
  connect(mapStateToProps, mapStateToDispatch),
  firestoreConnect([{ collection: 'categories' }])
)(EditCategory);