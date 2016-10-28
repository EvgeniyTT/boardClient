export default class BoardsController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  $onInit() {
    this.boards = this.taskService.boards;
    console.log('BOARDS: ', this.boards);
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
