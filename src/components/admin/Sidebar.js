import React from 'react';
import '../../scss/admin.scss';

const Sidebar = () => {
  return (
    <div className="sidebar_menu">
      <div className="sidebar_menu__inner">
        <ul>
          <li>
            <a href="/" className="active">
              <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
              <span className="list">Dashboard</span>
            </a>
          </li>
        </ul>

        <div onClick={(e) => (console.log(e.target))} className="hamberger">
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
  )
}


export default Sidebar;