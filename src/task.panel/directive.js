import template from './template.html';
import controller from './controller';

export default () => ({
  restrict: 'E',
  template,
  controller,
  controllerAs: 'taskPanelController',
  scope: {
    deleteTask: '&'
  },
  bindToController: true
});
