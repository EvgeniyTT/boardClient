import ng from 'angular';
import taskColumnDirective from './directive';

export default ng.module('taskColumn', [])
  .directive('taskColumn', taskColumnDirective)
  .name;
