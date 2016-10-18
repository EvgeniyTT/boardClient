import ng from 'angular';
import taskMainDirective from './directive';
import taskService from './service';

export default ng.module('taskMain', [])
  .directive('taskMain', taskMainDirective)
  .service('taskService', taskService)
  .name;
