export default class TaskCardController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.task = $scope.taskPanelController.task;
  }

  changeName() {
    this.task.task = 'baba';
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
