import 'jquery-ui-dist/jquery-ui.min';
import $ from  'jquery/dist/jquery';

export default class TaskColumnController {
  constructor($window, $document, $element, $scope) {
    'ngInject';
    this.column = $scope.column;
    this.$element = $element[0];
  }

  $onInit() {
    //DRAGO-DROPABLE PART
    console.log($(this.$element).find('ul'));
    $(this.$element).find('ul').sortable({
      connectWith: 'ul',
      receive: function(event, ui) {
        // handleStatusChange(event, ui, this);
      },
      update: function() {
        // saveSort();
      }
    });

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

  $onDestroy() {
    // remove event listeners
    // this.$document.removeEventListener('scroll', this.scrollListener);
  }

}
