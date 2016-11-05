import io from 'socket.io-client';
// const jwt = require('jsonwebtoken');
// const socketioJwt = require('socketio-jwt');

export default class taskService {
  constructor($http, $timeout) {
    'ngInject';
    this.$http = $http;
    this.$timeout = $timeout;
    this.url = API_HOST;
    this.user = {};
    this.boards = {};
    this.board = {};
    this.board.data = [];
    this.socket = io(this.url);

    this.socket.on(`boardList`, (boards) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/27/2016] handle digest cycle and render page on data update
        Object.assign(this.boards, boards);
      })
    });

    this.socket.on(`boardData`, (board) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        Object.assign(this.board, board);
      })
    });

    this.socket.on(`logged`, (user) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        Object.assign(this.user, user);
      })
    });

    this.socket.on(`signupError`, (err) => {
      this.$timeout(() => { // [Evgeniy Tatarin - 10/26/2016] handle digest cycle and render page on data update
        this.signupError = err;
      })
    });
  }

  getBoardsList() {
    this.socket.emit('getBoardList', this.user);
  }

  getBoard(boardID) {
    this.socket.emit('getBoard', boardID);
  }

  addBoard(newBoard) {
    newBoard.users = [];
    newBoard.data = [];
    if (newBoard.restriction == 'private') {
      newBoard.users.push(this.user._id)
    }
    this.socket.emit('addBoard', newBoard, this.user._id);
  }

  deleteBoard(boardID) {
    this.socket.emit('deleteBoard', boardID, this.user._id);
  }

  update() {
    const board = angular.copy(this.board); // [Evgeniy Tatarin - 10/26/2016] remove angular's $$hashKeys
    this.socket.emit('updateBoard', board)
  }

  login(userData) {
    this.socket.emit('login', userData);
  }

  signup(userData) {
    this.socket.emit('signup', userData);
  }

}
