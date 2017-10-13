import io from 'socket.io-client';
import store, { getMessage, createChannel } from './store';

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');

  socket.on('new-message', message => {
    store.dispatch(getMessage(message));
  });

  socket.on("new-channel", channel => {
    store.dispatch(createChannel(channel))
  })

});

export default socket;
