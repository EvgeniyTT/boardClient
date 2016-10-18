export default class taskService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = 'http://10.10.54.24:3040';
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
  list() {
    // return this.$http.get(`${this.url}/images/${skip}/${limit}`);
    return [
      {
        columnIndex: 1,
        columnName: 'To DO',
        tasks : [
            {
              task: 'do the dishes',
              priority: 2,
              assign: 'wife'
            }
          ]
      },
      {
        columnIndex: 2,
        columnName: 'In-Progress',
        tasks : [
            {
              task: 'buy gun to kill them all',
              priority: 4,
              assign: 'me'
            },
            {
              task: 'make a trello clone',
              priority: 1,
              assign: 'me'
            }
          ]
      },
      {
        columnIndex: 3,
        columnName: 'Done',
        tasks : [
            {
              task: 'clean the room',
              priority: 3,
              assign: 'wife'
            }
          ]
      }
    ]
  }

  // get(_id) {
  //   return this.$http.get(`${this.url}/images/${_id}`);
  // }
}
