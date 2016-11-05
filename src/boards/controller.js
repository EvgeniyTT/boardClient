export default class BoardsController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
    this.newBoard = {};
  }

  $onInit() {
    this.boards = this.taskService.boards;
  }

}
