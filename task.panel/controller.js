export default class ImageCardController {
  constructor(imageService, $window, $document, $element, $scope) {
    'ngInject';
  }
  
  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
