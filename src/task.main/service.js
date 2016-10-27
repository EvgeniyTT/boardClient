import io from 'socket.io-client';

export default class taskService {
  constructor($http, $timeout) {
    'ngInject';
    this.$http = $http;
    this.$timeout = $timeout;
    this.url = 'http://10.10.54.24:3040';
    this.boards = [];
    this.board = {};
    this.board.data = [];
    this.socket = io(this.url);

    this.socket.on(`boardList`, (boards) => {
      console.log('NEW BOARD COMMING');
      this.$timeout(() => { // [Evgeniy Tatarin - 10/27/2016] handle digest cycle and render page on data update
        this.boards.length = 0;
        this.boards.push(...boards);
      })
    });
    this.socket.emit('getBoards');

    this.socket.on(`getBoardData`, (board) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        Object.assign(this.board, board);
      })
    });
  }

  getBoard(boardID) {
    this.socket.emit('getBoardData', boardID);
  }

  addBoard(boardName) {
    this.socket.emit('addBoard', boardName);
  }

  deleteBoard(boardID) {
    this.socket.emit('deleteBoard', boardID);
  }

  update() {
    const board = angular.copy(this.board); // [Evgeniy Tatarin - 10/26/2016] remove angular's $$hashKeys
    this.socket.emit('boardUpdate', board)
  }
}
