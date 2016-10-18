
export default class TaskMainController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  $onInit() {
    // const tasks = this.taskService.list();
    // const taskColumns = tasks.map(task => task.columnIndex);
    // const uniqTaskColumns = Array.from(new Set(taskColumns))
    // this.columnTasks = [];
    //
    // for (let i = 0; i < uniqTaskColumns.length; i++) {
    //   this.columnTasks.push(
    //     { [uniqTaskColumns[i]] : tasks.filter(task => task.columnIndex == uniqTaskColumns[i]) }
    //   )
    // }

    this.columnTasks = this.taskService.list();
    console.log(this.columnTasks);

  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
