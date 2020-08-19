import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Admin from './Admin';
import AddCategory from './AddCategory';
import AddBook from './AddBook';
import ViewCategories from './ViewCategories';
import ViewBooks from './ViewBooks';
import EditCategory from './EditCategory';
import '../../scss/admin.scss';

class Dashboard extends Component {

  state = {
    active: false
  }

  toggleActive = () => {
    const activeClass = this.state.active;
    this.setState({active: !activeClass});
  }
  
  render() {
    return (
      <Fragment>
        <div className={"wrapper mediaTab" + (this.state.active ? ' active' : '') }>
          <Navbar />

          <div className="main_body">
            <Sidebar toggleActive={this.toggleActive} />
            <Switch>
              <Route exact path="/admin" component={Admin} />
              <Route path="/admin/addcategory" component={AddCategory} />
              <Route path="/admin/addbook" component={AddBook} />
              <Route path="/admin/viewcategories" component={ViewCategories} />
              <Route path="/admin/viewbooks" component={ViewBooks} />
              <Route path="/admin/editcategory/:id" component={EditCategory} />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;