export default class NavbarController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
    this.showBoards = false;
    this.showLogin = false;
  }

  logout() {
    this.taskService.user = {};
  }

}
