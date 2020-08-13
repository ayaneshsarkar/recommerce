import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {deleteCat} from '../../actions/catActions';

const ViewCategories = ({categories, deleteCat}) => {
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const deleteCategory = (categoryId) => {
    deleteCat(categoryId);
  }

  let i = 1;
  let mapCategories;

  if(categories) {

    mapCategories = (
      categories.map(category => {
        return (
          <tr key={category.id}>
            <td>{i++}</td>
            <td>{capitalizeFirstLetter(category.category)}</td>
            <td>{moment(category.updatedAt.toDate()).fromNow()}</td>
            <td><Link to={"/admin/editcategory/" + category.id}>Edit</Link></td>
            <td onClick={(categoryId) => deleteCategory(category.id)} className="danger">Delete</td>
          </tr>
        );
      })
    );

    if(Object.keys(categories).length === 0) {
      mapCategories = (
        <tr>
          <td>Nothing Here</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }

  } else {
    mapCategories = (
      <tr>
        <td>Loading...</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <div className="container">
      <div className="col-12">
        <h3 className="form_title mb-5">View Categories</h3>
      </div>

      {/* VIEW CATEGORIES TABLE */}
      <div className="col-12">
        <table className="table table-stripped mb-5">
          <thead className="thead-dark">
            <tr>
              <th>Sl No.</th>
              <th>Category</th>
              <th>Last Updated At</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {mapCategories}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.firestore.ordered.categories
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCat: (catId) => dispatch(deleteCat(catId))
  }
};




export default compose(connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'categories', orderBy: ['updatedAt', 'desc'] }])
)(ViewCategories);