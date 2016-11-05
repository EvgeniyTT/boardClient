
export default class TaskColumnController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
    this.newTask = {
      name: 'New Task',
      priority: 'Minor',
      assign: '',
      description: '',
      comments: []
    };
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    this.sortableOptions = {
      placeholder: "panel-placeholder",
      connectWith: ".column",
      stop: (event, ui) => {
        this.taskService.update();
      }
    };
  }

  addTask(task) {
    this.column.tasks.push(task);
  }

  deleteTask(task) {
    this.column.tasks = this.column.tasks.filter(item => item != task);
    this.taskService.update();
  }

}
