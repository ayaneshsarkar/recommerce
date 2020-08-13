import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../../scss/admin.scss';

const Sidebar = ({toggleActive, location}) => {
  return (
    <div className="sidebar_menu">
      <div className="sidebar_menu__inner">
        <ul>
          <li>
            <Link to="/admin" className={(location.pathname === '/admin') ? 'active' : ''}>
              <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
              <span className="list">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/viewcategories" className={(location.pathname === '/admin/viewcategories') ? 'active' : ''}>
              <span className="icon"><i className="fas fa-list-alt"></i></span>
              <span className="list">View Categories</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/addcategory" className={(location.pathname === '/admin/addcategory') ? 'active' : ''}>
              <span className="icon"><i className="far fa-list-alt"></i></span>
              <span className="list">Add Category</span>
            </Link>
          </li>

          <li>
            <Link to="/admin/addbook" className={(location.pathname === '/admin/addbook') ? 'active' : ''}>
              <span className="icon"><i className="fas fa-book"></i></span>
              <span className="list">Add Book</span>
            </Link>
          </li>
        </ul>

        <div onClick={toggleActive} className="hamberger">
          <div className="hamberger_inner">
            <span className="arrow" style={{ marginTop: '0.3px' }}>
              <i className="fas fa-long-arrow-alt-left toggledLeft"></i>
              <i className="fas fa-long-arrow-alt-right toggledRight" aria-hidden="true" 
              style={{ display: 'none' }}></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );

}


export default withRouter(Sidebar);