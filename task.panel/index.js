import ng from 'angular';
import taskPanelDirective from './directive';

export default ng.module('taskPanel', [])
  .directive('taskPanel', taskPanelDirective)
  .name;
