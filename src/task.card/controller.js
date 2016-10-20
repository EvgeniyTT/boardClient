export default class TaskCardController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.task = $scope.taskPanelController.task;
    this.calculateChecklistProgress();
  }
  calculateChecklistProgress() {
    let doneCheklistItems = this.task.checklist.filter(item => item.checked)
    this.checklistProgress = ((doneCheklistItems.length/this.task.checklist.length)*100).toFixed(2);
  }
  addChecklist(){
    this.task.checklist=[];
  }
  removeChecklist() {
    this.task.checklist=null;
    this.checklistProgress=0;
  }
  addCheckbox() {
    this.task.checklist.push({checked: false, item: ''});
    this.calculateChecklistProgress();
  }
  removeCheckbox(checkbox) {
    this.task.checklist = this.task.checklist.filter(item => item != checkbox);
    this.calculateChecklistProgress();
  }
  addComment(commentText) {
    const comment = {author: 'Greg Mitro', date: '10/16/2016 14:24', text: commentText};
    this.task.comments.push(comment);
  }
  saveTask() {
    //submit data to the server
  }
  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
