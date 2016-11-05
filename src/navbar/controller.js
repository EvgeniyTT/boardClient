export default class NavbarController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  logout() {
    this.taskService.user = {};
  }

}
