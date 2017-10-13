import React, { Component } from 'react';
import { connect } from "react-redux";
import { writeChannel, postChannel } from "../store";


const NewChannelEntry = ({ onSubmit, onChange, newChannelEntry }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(newChannelEntry);
    }}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input 
          className="form-control" 
          type="text" 
          name="channelName" 
          value={newChannelEntry}
          placeholder="Enter channel name"
          onChange={(e) => {
            onChange(e.target.value)
          }}
         />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}




/** Write your `connect` component below! **/

const mapDispatchToProps = dispatch => {
  return {
    onChange: content => {
      dispatch(writeChannel(content));
    },
    onSubmit: (content) => {
      dispatch(postChannel({name: content}));
      dispatch(writeChannel(""));
    }
  }
}

const mapStateToProps = state => {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

const NewChannelEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry);

export default NewChannelEntryContainer;




