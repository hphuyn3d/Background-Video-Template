$(function() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('hidden')
    }, 500);
})();

/*Skill Bar Animation*/
$(function() {
  $('.progress-bar').each(function() {
    var bar_value = $(this).attr('aria-valuenow') + '%';                
    $(this).animate({ width: bar_value }, { duration: 2000, easing: 'easeOutCirc' });
  });
});

