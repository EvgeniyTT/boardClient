export default class TaskCardController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
