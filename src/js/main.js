$(document).ready(function(){

    var typed = new Typed('.section__title_step', {
        strings: ["планам развития", "адаптации новичков", "карьерным траекториям"],
        typeSpeed: 70,
        backSpeed: 55,
        loop: true,
    });

    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        return false;
      });

});    
