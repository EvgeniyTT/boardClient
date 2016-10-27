const newTask = {
  name: 'New Task',
  priority: 'Minor',
  assign: '',
  description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
  comments: []
}

export default class TaskColumnController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
    this.newTask = newTask;
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    this.sortableOptions = {
      placeholder: "panel-placeholder",
      connectWith: ".column",
      update: (event, ui) => {
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

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
