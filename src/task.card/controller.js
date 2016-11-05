export default class TaskCardController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
  }

  $onInit() {
    if (this.isNew) {
      this.taskTemplate = Object.assign({}, this.task); // [Evgeniy Tatarin - 11/05/2016] save new task template to use for all next new tasks
    }
    this.taskUpdate = Object.assign({}, this.task);
    this.calculateChecklistProgress();
  }

  calculateChecklistProgress() {
    if(this.taskUpdate.checklist) {
      let doneCheklistItems = this.taskUpdate.checklist.filter(item => item.checked)
      this.checklistProgress =
        isNaN(doneCheklistItems.length/this.taskUpdate.checklist.length) ? 0 : ((doneCheklistItems.length/this.taskUpdate.checklist.length)*100).toFixed(2)  ;
    } else {
        this.checklistProgress = 0;
    }
  }

  addChecklist(){
    this.taskUpdate.checklist = [];
    this.calculateChecklistProgress();
  }
  removeChecklist() {
    this.taskUpdate.checklist = null;
    this.calculateChecklistProgress();

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
    const comment = {author: this.taskService.user.username, date: new Date(), text: commentText};
    this.taskUpdate.comments.unshift(comment);
  }
  saveTask() {
    this.task = Object.assign({}, this.taskUpdate); // [Evgeniy Tatarin - 10/26/2016] apply updates to initial task
    if(this.isNew) {
      this.addTask(this);
      this.task = Object.assign({}, this.taskTemplate); // [Evgeniy Tatarin - 10/26/2016] reset to initial task template for next new item
      this.taskUpdate = Object.assign({}, this.task); // [Evgeniy Tatarin - 10/26/2016] reset to initial task template for next new item
    }
    this.taskService.update();
    this.isCardShown = false;
  }

  discardChanges() {
    this.taskUpdate = Object.assign({}, this.task); // [Evgeniy Tatarin - 10/26/2016] reset to initial task
    this.isCardShown = false;
  }

}
