// Function to show the animal Fun facts information and picture
$(document).on('change', '.animal-selector', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).addClass('hide');
    $(show).removeClass('hide');
  });
  $(document).ready(function(){
      $('.animal-selector').trigger('change');
  });
const lion = new Audio("assets/sound/lion.wav");
