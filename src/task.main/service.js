import io from 'socket.io-client';

export default class taskService {
  constructor($http, $timeout) {
    'ngInject';
    this.$http = $http;
    this.$timeout = $timeout;
    this.url = 'http://10.10.54.24:3040';
    this.boardData = [];
    this.socket = io(this.url);

  }

  list(boardID) {
    this.socket.on(`getBoardData_${boardID}`, (data) => {
      this.$timeout(() => {
        this.boardData.length = 0;
        this.boardData.push(...data.boardData);
      })
    });
    this.socket.emit('getBoardData', { boardID: boardID })
  }
  update() {
    const boardData = angular.copy(this.boardData);
    this.socket.emit('boardUpdate', { _id: "580e1706d65d0c160ce5a3a6", boardData: boardData})
  }
}
