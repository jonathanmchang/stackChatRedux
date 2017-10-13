import React, { Component } from 'react';
import Message from './Message';
import NewMessageEntry from './NewMessageEntry';
import store from '../store';
import { connect } from 'react-redux';

const MessagesList = ({ messages, channelId }) => {
  
  channelId = Number(channelId); // because it's a string "1", not a number!
  const filteredMessages = messages.filter(message => message.channelId === channelId);

  
  return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessageEntry channelId={channelId} />
      </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.messages,
    channelId: ownProps.match.params.channelId
  }
}

const MessagesListContainer = connect(mapStateToProps)(MessagesList)

export default MessagesListContainer


