export default class TaskPanelController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.task = $scope.$parent.task;
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
