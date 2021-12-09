/* global jQuery*/

jQuery(document).ready(function ($) {

  var section = $('.js-section');

  section.waypoint(function(direction) {
    if (direction === 'down') {
      var text = $(this[0, 'element']).attr('data-text');
      var el = $('.js-floating-text span');
      el.html(text)
    }
  }, {
    offset: '50%'
  });

  section.waypoint(function(direction) {
    if (direction === 'up') {
      var text = $(this[0, 'element']).attr('data-text');
      var el = $('.js-floating-text span');
      el.html(text)
    }
  }, {
    offset: '-50%'
  });

})

jQuery(document).ready(function ($) {
  var section = $('.js-section');
  section.waypoint(function(direction) {
    if (direction === 'down') {
      var text = $(this[0, 'element']).attr('data-score');
      var el = $('.js-floating-score span');
      el.html(text)
    }
  }, {
    offset: '50%'
  });

  section.waypoint(function(direction) {
    if (direction === 'up') {
      var text = $(this[0, 'element']).attr('data-score');
      var el = $('.js-floating-score span');
      el.html(text)
    }
  }, {
    offset: '-50%'
  });
})