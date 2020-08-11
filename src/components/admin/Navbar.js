import React, {Fragment} from 'react';
import '../../scss/admin.scss';

const Navbar = () => {
  return (
    <Fragment>
      <div className="top_navbar">
        <div className="adminLogo">
          <a href="/">ReCommerce</a>
        </div>
        
        <div className="top_menu">
          <div className="home_link">
            <a href="/">
              <span className="icon mr-2"><i className="fa fa-home"></i></span>
              <span>Home</span>
            </a>
          </div>

          <div className="right_info">
            <div className="icon_wrap">
              <div className="icon"><i className="fa fa-user"></i></div>
            </div>
          </div>

          <div className="icon_wrap" id="toggleMenu" style={{ display: 'none' }}>
            <div className="icon"><i className="fa fa-ellipsis-v"></i></div>
          </div>
        </div>

      </div>


    </Fragment>
  );
}


export default Navbar;