$(document).ready(function() {
    
    $('#devonVenueButton').on('click', function() {
    $.scrollTo('#devonVenueDetails', {duration:1000});
    });


    $('#devonTransportationButton').on('click', function() {
    $.scrollTo('#devonTransportDetails', {duration:1000});
    });

    $('#devonAccomodationButton').on('click', function() {
    $.scrollTo('#devonAccomodationDetails', {duration:1000});
    });

    $('#devonLocalAreaButton').on('click', function() {
    $.scrollTo('#devonLocalAreaDetails', {duration:1000});
    });

    $('#devonScheduleButton').on('click', function() {
    $.scrollTo('#devonScheduleDetails', {duration:1000});
    });


   /*$('#devondeetsbutton').on('click', function() {
        $('#devondeets2').slideDown();
        $('#devonmap').attr('src',"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1614.6181235536253!2d-3.790460308628615!3d50.49362556421584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1400702721533");
   });*/

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.nv_mainsection').each( function(i){
            
            var middle_of_object = $(this).position().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the middle of the object is at the bottom of window, fade it it */
            if( bottom_of_window > middle_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 

        $('nav').each( function(i){
            
            var top_of_window = $(window).scrollTop();
            
            /* If the middle of the object is at the bottom of window, fade it it */
            if( top_of_window >= 300){
                
                $(this).addClass('FixToTop');
                      
            } else if(top_of_window < 300){
                $(this).removeClass('FixToTop');
                }
        });
    
    });
    
});