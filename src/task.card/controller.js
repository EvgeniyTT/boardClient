export default class TaskCardController {
  constructor(taskService) {
    'ngInject';
    this.taskService = taskService;
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
    Object.assign(this.task, this.taskUpdate); // [Evgeniy Tatarin - 10/26/2016] apply updates to initial task
    if(this.isNew) {
      this.addTask(this);
    }
    this.taskService.update();
    this.isCardShown = false;
  }
  discardChanges() {
    this.taskUpdate = Object.assign({}, this.task); // [Evgeniy Tatarin - 10/26/2016] reset to initial task
    this.isCardShown = false;
  }
  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
