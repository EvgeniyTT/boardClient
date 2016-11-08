export default class NavbarController {
  constructor(taskService, $timeout) {
    'ngInject';
    this.$timeout = $timeout;
    this.taskService = taskService;
    this.showBoards = false;
    this.showLogin = false;
  }

  logout() {
      this.taskService.user = {};
      this.taskService.board.name = undefined; // [Evgeniy Tatatrin - 11/08/2016] hide board template as far it looks at board's name exist
      this.taskService.board = {};
  }

}
