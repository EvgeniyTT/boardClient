import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'ng-img-crop-full-extended/compile/unminified/ng-img-crop.css';
// import 'dropzone/dist/dropzone.css';
import ng from 'angular';
// import 'angular-route';
// import 'angular-messages';
import './styles/styles.css';
import taskPanel from './task.panel';
import taskCard from './task.card';
import taskColumn from './task.column';
import taskMain from './task.main';


ng.module('app', [taskPanel, taskCard, taskColumn, taskMain]);


window.addEventListener('load',function(){
  const button = document.querySelector('button');
  const responsesDiv = document.querySelector('div.responses');

  const socket = new WebSocket("ws://localhost:8081");
  let i = 0;
  console.log(button);
  button.addEventListener('click', function() {
    var outgoingMessage = `START`;
    console.log('outgoingMessage: ', outgoingMessage);
    socket.send(outgoingMessage);
    i++;
    return false;
  });

  // обработчик входящих сообщений
  socket.addEventListener('message', function(event) {
    const incomingMessage = event.data;
    console.log('incomingMessage:', incomingMessage);
    showMessage(incomingMessage);
  });

  // показать сообщение
  function showMessage(message) {
    const messageElem = document.createElement('p');
    messageElem.textContent = message;
    responsesDiv.appendChild(messageElem);
  }

})
