import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MessagesList from './MessagesList';
import NewChannelEntryContainer from "./NewChannelEntry";
import MessagesListContainer from "./MessagesList";

import store, { fetchMessages, fetchChannels } from '../store';


export default class Main extends Component {

  componentDidMount () {
    const messagesThunk = fetchMessages();
    store.dispatch(messagesThunk);
    store.dispatch(fetchChannels());
  }

  render () {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <main>
          <Switch>
            <Route path="/new-channel" component={NewChannelEntryContainer} />
            <Route path="/channels/:channelId" component={MessagesListContainer} />
            <Redirect to="/channels/1" />
          </Switch>
        </main>
      </div>
    );
  }
}
