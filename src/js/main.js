$(document).ready(function(){

//the printer
    var typed = new Typed('.section__title_step', {
        strings: ["планам развития", "адаптации новичков", "карьерным траекториям"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
    });

//Smooth scrolling
    $('a[href^="#"').on('click', function() {
        let href = $(this).attr('href');
        if ($(href).length) {
        $('html, body').animate({
            scrollTop: $(href).offset().top - 50
        });
        } else return false
    });

//WOW init
    new WOW().init();

//Mask telephone
    $('#phone').mask('+7 999 999-99-99');

//Validate field
$(".order").validate({
    rules: {
        phone: {
        required: true,
        minlength: 16
      },
      name: {
        required: true,
      },
  
  },
  errorPlacement: function(error, element) {   },
  errorClass : 'field__control_error',
  validClass : 'field__control_valid',
  submitHandler: function(form, event) {event.preventDefault()
    let $sendValue = $('.order').serialize();
    $.ajax({
      url: './conf/telegram.php',
      method: 'POST',
      dataType: 'html',
      data: $sendValue,
      success: function(data){
        if (data === 'ok') {
          $('.order__submit').text('Заявка отправлена');
          $.fancybox.close();
          $('.order').trigger('reset');
        } else 
        alert('Произошла ошибка, проверьте корректность ввода данных.');
      }
    });
  }
  });


  $('.link__item').on('click', function(e) {
    e.preventDefault();
    $.fancybox.open({
      src: '#hidden',
      type: 'inline'
    });
  });

});    
