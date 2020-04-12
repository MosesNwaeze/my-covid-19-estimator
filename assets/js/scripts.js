/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable camelcase */


jQuery(document).ready(() => {
  /*
        Fullscreen background
    */

  /*
        Form
    */
  $('.f1 fieldset:first').fadeIn('slow');

  $('.f1 input[type="text"], .f1 input[type="password"], .f1 textarea').on(
    'focus',
    function () {
      $(this).removeClass('input-error');
    }
  );

  // next step
  $('.f1 .btn-next').on('click', function () {
    const parent_fieldset = $(this).parents('fieldset');
    let next_step = true;
    // navigation steps / progress steps
    const current_active_step = $(this).parents('.f1').find('.f1-step.active');
    const progress_line = $(this).parents('.f1').find('.f1-progress-line');

    // fields validation
    parent_fieldset
      .find('input[type="text"], input[type="password"], textarea')
      .each(function () {
        if ($(this).val() === '') {
          $(this).addClass('input-error');
          next_step = false;
        } else {
          $(this).removeClass('input-error');
        }
      });
    // fields validation

    if (next_step) {
      parent_fieldset.fadeOut(400, function () {
        // change icons
        current_active_step
          .removeClass('active')
          .addClass('activated')
          .next()
          .addClass('active');
        // progress bar
        bar_progress(progress_line, 'right');
        // show next step
        $(this).next().fadeIn();
        // scroll window to beginning of the form
        scroll_to_class($('.f1'), 20);
      });
    }
  });

  // previous step
  $('.f1 .btn-previous').on('click', function () {
    // navigation steps / progress steps
    const current_active_step = $(this).parents('.f1').find('.f1-step.active');
    const progress_line = $(this).parents('.f1').find('.f1-progress-line');

    $(this)
      .parents('fieldset')
      .fadeOut(400, function () {
        // change icons
        current_active_step
          .removeClass('active')
          .prev()
          .removeClass('activated')
          .addClass('active');
        // progress bar
        bar_progress(progress_line, 'left');
        // show previous step
        $(this).prev().fadeIn();
        // scroll window to beginning of the form
        scroll_to_class($('.f1'), 20);
      });
  });

  // submit
  $('.f1').on('submit', function (e) {
    // fields validation
    $(this)
      .find('input[type="text"], input[type="password"], textarea')
      .each(function () {
        if ($(this).val() === '') {
          e.preventDefault();
          $(this).addClass('input-error');
        } else {
          $(this).removeClass('input-error');
        }
      });
    // fields validation
  });
});
