
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

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
