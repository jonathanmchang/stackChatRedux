import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!

const ChannelList = ({ channels, messages }) => {
   return (
     <ul>
       {
         channels.map(channel => {
           return (
             <li key={channel.id}>
               <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                 <span># {channel.name}</span>
                 <span className="badge">{messages.filter(m => m.channelId === channel.id).length}</span>
               </NavLink>
             </li>

           )
         })
       }
       <li>
         <NavLink to="/new-channel">Create a channel...</NavLink>
       </li>
     </ul>
   );
}



/** Write your `connect` component below! **/

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    channels: state.channels
  }
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;



