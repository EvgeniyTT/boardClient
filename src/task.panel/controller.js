export default class TaskPanelController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.task = $scope.task;
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
