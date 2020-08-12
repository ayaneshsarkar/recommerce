import React, { Component } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
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
      <div className={"wrapper mediaTab" + (this.state.active ? ' active' : '') }>
        <Navbar />

        <div className="main_body">
          <Sidebar toggleActive={this.toggleActive} />
        </div>
      </div>    
    );
  }
}

export default Dashboard;