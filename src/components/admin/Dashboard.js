import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../../scss/admin.scss';

class Dashboard extends Component {
  
  render() {
    return (
      <div className="wrapper mediaTab">
        <Navbar />

        <div className="main_body">
          <Sidebar />
        </div>
      </div>    
    );
  }
}

export default Dashboard;