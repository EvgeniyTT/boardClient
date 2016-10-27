const newColumn = {
  columnIndex: 4,
  columnName: 'New Column',
  tasks: []
}

export default class TaskMainController {
  constructor(taskService, $scope) {
    'ngInject';
    this.taskService = taskService;
    this.$scope = $scope;
  }

  $onInit() {
    this.board = this.taskService.board;
    this.boards = this.taskService.boards;
  }

  

  addColumn() {
    // try-catch here doesn't work, error is thrown from another place
    try {
      this.board.data.push(newColumn);
    } catch (e) {
    }
    this.taskService.update();
  }

  deleteColumn(column) {
    let columnIndex = this.board.data.indexOf(column);
    this.board.data.splice(columnIndex, 1);
    this.taskService.update();
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
