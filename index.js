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

  //DRAGO-DROPABLE PART
  $('ul').sortable({
    connectWith: 'ul',
    receive: function(event, ui) {
      // handleStatusChange(event, ui, this);
    },
    update: function() {
      // saveSort();
    }
  });

  function handleStatusChange(event, ui, sortElement) {
    var newStatus;
    if ($(ui.sender).parent('div').hasClass('removed')) {
      $(ui.sender).sortable('cancel');
    } else {
      if ($(sortElement).parent('div').hasClass('active')) {
        newStatus = 'active';
      } else if ($(sortElement).parent('div').hasClass('redcard')) {
        newStatus = 'redcard';
      } else if ($(sortElement).parent('div').hasClass('removed')) {
        newStatus = 'removed';
      }

      $.post(window.url + '/' + $(ui.item).attr('data-id'), {status: newStatus})
        .done(function() { saveSort(); })
        .fail(function() { $(ui.sender).sortable('cancel'); });
    }
  }

  function saveSort() {
    var activeListId = [];
    var redcardListId = [];
    var removedListId = [];
    var listObject;

    activeList.find('li').each(function() {
      activeListId.push($(this).attr('data-id'));
    });
    redcardList.find('li').each(function() {
      redcardListId.push($(this).attr('data-id'));
    });
    removedList.find('li').each(function() {
      removedListId.push($(this).attr('data-id'));
    });

    listObject = {
      activeListId: activeListId,
      removedListId: removedListId,
      redcardListId: redcardListId
    };

    localStor.setItem('listObject', JSON.stringify(listObject));
  }

})
