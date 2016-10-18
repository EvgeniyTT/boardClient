import ng from 'angular';
import taskColumnDirective from './directive';

export default ng.module('taskCard', [])
  .directive('taskColumn', taskColumnDirective)
  .name;
