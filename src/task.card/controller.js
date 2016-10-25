const newTask = {
  name: 'New Task',
  priority: 'Minor',
  assign: '',
  description: 'a lot of text for description a lot of text for description a lot of text for description a lot of text for description',
  comments: []
}

export default class TaskCardController {
  constructor($scope, taskService) {
    'ngInject';
    this.taskService = taskService;
    if ($scope.taskPanelController) {
      this.task = $scope.taskPanelController.task;
    } else {
      this.isNewTask = true;
      this.task = newTask;
    }

  }

  $onInit() {
    this.taskUpdate = Object.assign({}, this.task);
    this.calculateChecklistProgress();
  }

  calculateChecklistProgress() {
    if(this.taskUpdate.checklist) {
      let doneCheklistItems = this.taskUpdate.checklist.filter(item => item.checked)
      this.checklistProgress = ((doneCheklistItems.length/this.taskUpdate.checklist.length)*100).toFixed(2);
    } else {
        this.checklistProgress = 0;
    }

  }
  addChecklist(){
    this.taskUpdate.checklist=[];
  }
  removeChecklist() {
    this.taskUpdate.checklist=null;
    this.taskUpdate.checklistProgress=0;
  }
  addCheckbox() {
    this.taskUpdate.checklist.push({checked: false, item: ''});
    this.calculateChecklistProgress();
  }
  removeCheckbox(checkbox) {
    this.taskUpdate.checklist = this.taskUpdate.checklist.filter(item => item != checkbox);
    this.calculateChecklistProgress();
  }
  addComment(commentText) {
    const comment = {author: 'Greg Mitro', date: '10/16/2016 14:24', text: commentText};
    this.taskUpdate.comments.push(comment);
  }
  saveTask() {
    Object.assign(this.task, this.taskUpdate);
    if(this.isNewTask) {
      console.log('CARD CONTROLLER, this.task: ', this.task);
      this.addTask(this.task);
    }
    this.taskService.update();
  }
  discardChanges() {
    this.taskUpdate = Object.assign({}, this.task);
  }
  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
