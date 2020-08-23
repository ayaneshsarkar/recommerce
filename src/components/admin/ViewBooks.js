import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
//import {Link} from 'react-router-dom';
import moment from 'moment';
//import {getCat} from '../../actions/catActions';
import {getBooks} from '../../actions/bookActions';

class ViewBooks extends Component {

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  mapBooks = null;

  componentDidMount() {
    this.props.getBooks();
  }

  componentDidUpdate() {
    console.log(this.props.stateBooks);
  }

  render() {

    const { books } = this.props;

    if(books) {
      this.mapBooks = (
        books.map(book => {
          return (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td><img src={book.bookURL} alt={book.title}/></td>
              <td>{book.categoryId}</td>
              <td>{moment(book.publishDate.toDate()).format('LL')}</td>
              <td>{moment(book.updatedAt.toDate()).fromNow()}</td>
            </tr>
          )
        })
      );
  
      if(Object.keys(books).length === 0) {
        this.mapBooks = (
          <tr>
            <td>Nothing Here</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      }
    } else {
      this.mapBooks = (
        <tr>
          <td>Loading...</td>
          <td></td>
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
          <h3 className="form_title mb-5">View All Books</h3>
        </div>
  
        {/* VIEW BOOKS TABLE */}
        <div className="col-12">
          <table className="table table-stripped mb-5">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Image</th>
                <th>Category</th>
                <th>Publish Date</th>
                <th>Last Updated At</th>
              </tr>
            </thead>
  
            <tbody>
              {this.mapBooks ? this.mapBooks : ''}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
};

const mapStatetoProps = (state) => {
  return {
    books: state.firestore.ordered.books,
    stateBooks: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBooks: () => dispatch(getBooks())
  }
};


export default compose(connect(mapStatetoProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'books', orderBy: ['updatedAt', 'desc'] }])
)(ViewBooks);