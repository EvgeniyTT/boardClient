export default class TaskColumnController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.column = $scope.column;
    this.$scope = $scope;
    this.$element = $element[0];
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    // $(this.$element).find('ul').sortable({
    //   connectWith: 'ul',
    //   placeholder: 'sortable-placeholder',
    //   receive: function(event, ui) {
    //     console.log('RECEIVE');
    //     console.log('event', event);
    //     console.log('this', this);
    //     console.log('ui', ui);
    //     console.log('ui.helper', ui.helper);
    //     console.log('ui.item', ui.item);
    //     console.log('ui.sander', ui.sander);
    //     // handleStatusChange(event, ui, this);
    //   },
    //   remove: function(event, ui) {
    //     console.log('REMOVE');
    //     console.log('event', event);
    //     console.log('this', this);
    //     console.log('ui', ui);
    //     console.log('ui.helper', ui.helper);
    //     console.log('ui.item', ui.item);
    //     // handleStatusChange(event, ui, this);
    //   },
    //   update: function() {
    //     console.log('UPDATE');
    //     // saveSort();
    //   }
    // });

    this.sortableOptions = {
      placeholder: "panel-placeholder",
      connectWith: ".column",
      update: (event, ui) => {
        // console.log('event', event);
        // console.log('ui', ui);
        // console.log('this', this);
        // console.log('this', this.column);
        console.log('$scope', this.$scope);
      }
    };

    function handleStatusChange(event, ui, sortElement) {
      var newStatus;
      if ($(ui.sender).parent('div').hasClass('removed')) {
        $(ui.sender).sortable('cancel');
      } else {
        if ($(sortElement).parent('div').hasClass('active')) {
          newStatus = 'active';
        } else if ($(sortElement).parent('div').hasClass('redcard')) {
          newStatus = 'redcard';
        } else if ($(sortElement).parent('div').hasClass('removed')) {
          newStatus = 'removed';
        }

        $.post(window.url + '/' + $(ui.item).attr('data-id'), {status: newStatus})
          .done(function() { saveSort(); })
          .fail(function() { $(ui.sender).sortable('cancel'); });
      }
    }

    function saveSort() {
      var activeListId = [];
      var redcardListId = [];
      var removedListId = [];
      var listObject;

      activeList.find('li').each(function() {
        activeListId.push($(this).attr('data-id'));
      });
      redcardList.find('li').each(function() {
        redcardListId.push($(this).attr('data-id'));
      });
      removedList.find('li').each(function() {
        removedListId.push($(this).attr('data-id'));
      });

      listObject = {
        activeListId: activeListId,
        removedListId: removedListId,
        redcardListId: redcardListId
      };

      localStor.setItem('listObject', JSON.stringify(listObject));
    }

  }

  addTask() {
    this.column.tasks.push(
      {
        task: 'do the dishes',
        priority: 7,
        assign: 'wife'
      }
    )
  }

  deleteTask(task) {
    this.column.tasks = this.column.tasks.filter(item => item != task);
  }

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
