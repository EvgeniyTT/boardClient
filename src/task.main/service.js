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
    this.socket.on(`getBoardData_${235634745}`, (data) => {
      this.$timeout(() => {
        this.boardData.length = 0;
        this.boardData.push(...data.boardData);
      })
    });
    this.socket.emit('getBoardData', { boardID: boardID })
  }

  // add(img) {
  //   return this.$http.post(`${this.url}/images`, img);
  // }
  //
  // update(_id, imgData) {
  //   return this.$http.put(`${this.url}/images/${_id}`, imgData);
  // }
  //
  // save(img) {
  //   if (img._id) {
  //     return this.update(img._id, img);
  //   }
  //   return this.add(img);
  // }
  //
  // remove(_id) {
  //   return this.$http.delete(`${this.url}/images/${_id}`);
  // }
  //
  // list() {
    // return this.$http.get(`${this.url}/images/${skip}/${limit}`);
  // }

  // get(_id) {
  //   return this.$http.get(`${this.url}/images/${_id}`);
  // }
}
