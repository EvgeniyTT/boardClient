window.addEventListener('load',function(){
  var button = document.querySelector('button');
  var responsesDiv = document.querySelector('div.responses');

  var socket = new WebSocket("ws://localhost:8081");
  var i = 0;
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
    var incomingMessage = event.data;
    console.log('incomingMessage:', incomingMessage);
    showMessage(incomingMessage);
  });

  // показать сообщение в div#subscribe
  function showMessage(message) {
    var messageElem = document.createElement('p');
    messageElem.textContent = message;
    responsesDiv.appendChild(messageElem);
  }
})
