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
              name: 'do the dishes',
              priority: 'Major',
              assign: 'wife',
              description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
              checklist: [
                {checked: true, item: 'do something first'},
                {checked: true, item: 'do something next'},
                {checked: false, item: 'finish with nothing'}
              ],
              comments: [
                {author: 'Petr Ivanovich', date: '10/16/2016 14:24', text: 'Can not belive you are going to do this'},
                {author: 'Maria Colovratovna', date: '10/16/2016 13:32', text: 'You need to fill up a form to start doing something'},
                {author: 'Izya Evreevich', date: '10/14/2016 12:24', text: 'What will we have from this task?'}
              ]
            }
          ]
      },
      {
        columnIndex: 2,
        columnName: 'In-Progress',
        tasks : [
            {
              name: 'buy gun to kill them all',
              priority: 'Trivial',
              assign: 'me',
              description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
              checklist: [
                {checked: true, item: 'do something first'},
                {checked: true, item: 'do something next'},
                {checked: false, item: 'finish with nothing'}
              ],
              comments: [
                {author: 'Petr Ivanovich', date: '10/16/2016 14:24', text: 'Can not belive you are going to do this'},
                {author: 'Maria Colovratovna', date: '10/16/2016 13:32', text: 'You need to fill up a form to start doing something'},
                {author: 'Izya Evreevich', date: '10/14/2016 12:24', text: 'What will we have from this task?'}
              ]
            },
            {
              name: 'make a trello clone',
              priority: 'Critical',
              assign: 'me',
              description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
              checklist: [
                {checked: true, item: 'do something first'},
                {checked: true, item: 'do something next'},
                {checked: false, item: 'finish with nothing'}
              ],
              comments: [
                {author: 'Petr Ivanovich', date: '10/16/2016 14:24', text: 'Can not belive you are going to do this'},
                {author: 'Maria Colovratovna', date: '10/16/2016 13:32', text: 'You need to fill up a form to start doing something'},
                {author: 'Izya Evreevich', date: '10/14/2016 12:24', text: 'What will we have from this task?'}
              ]
            }
          ]
      },
      {
        columnIndex: 3,
        columnName: 'Done',
        tasks : [
            {
              name: 'clean the room',
              priority: 'Minor',
              assign: 'wife',
              description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
              checklist: [
                {checked: true, item: 'do something first'},
                {checked: true, item: 'do something next'},
                {checked: false, item: 'finish with nothing'}
              ],
              comments: [
                {author: 'Petr Ivanovich', date: '10/16/2016 14:24', text: 'Can not belive you are going to do this'},
                {author: 'Maria Colovratovna', date: '10/16/2016 13:32', text: 'You need to fill up a form to start doing something'},
                {author: 'Izya Evreevich', date: '10/14/2016 12:24', text: 'What will we have from this task?'}
              ]
            }
          ]
      }
    ]
  }

  // get(_id) {
  //   return this.$http.get(`${this.url}/images/${_id}`);
  // }
}
