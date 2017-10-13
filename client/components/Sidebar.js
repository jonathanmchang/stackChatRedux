import React, { Component } from 'react';
import ChannelListContainer from './ChannelList';


export default class Sidebar extends Component {

  render () {
    return (
      <sidebar>
        <div className="sidebar-header">
          <h3 href="#">
            <div>Stack Chat</div>
            <i alt="Brand" className="glyphicon glyphicon-comment">
            </i>
          </h3>
        </div>
        <h5>Channels</h5>
        <ChannelListContainer />
      </sidebar>
    );
  }
}
