const newColumn = {
  // columnIndex: 4,
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
    this.taskService.list(235634745);
    this.boardData = this.taskService.boardData;
  }

  addColumn() {
    // try-catch here doesn't work, error is thrown from another place
    try {
      this.boardData.push(newColumn);
    } catch (e) {
      console.log('You already have an empty column');
    }

  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
