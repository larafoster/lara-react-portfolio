(window).scroll(function(event) {
    Scroll();
}); 

('.navbar-nav li a').click(function() {  
    ('html, body').animate({scrollTop: (this.hash).offset().top -1}, 1000);
    return false;
});

// User define function
function Scroll() {
    var contentTop      =   [];
    var contentBottom   =   [];
    var winTop      =   (window).scrollTop();
    var rangeTop    =   200;
    var rangeBottom =   500;
    ('.navbar-nav').find('.scroll a').each(function(){
        contentTop.push( ( (this).attr('href') ).offset().top);
        contentBottom.push( ( (this).attr('href') ).offset().top + ( (this).attr('href') ).height() );
    })
    .each( contentTop, function(i){
        if ( winTop > contentTop[i] - rangeTop ){
            ('.navbar-nav li.scroll')
            .removeClass('current')
            .eq(i).addClass('current');          
        }
    })

};
    
// -------------------------------------------------------------
//  Sticky Nav
// -------------------------------------------------------------
(function () {  
    function menuToggle(){
        var windowWidth = (window).width();
        if(windowWidth > 991 ){
            (window).on('scroll', function(){
                if( (window).scrollTop()>735 ){
                    ('.main-section .navbar').addClass('fixed-top animated fadeInDown');
                } else {
                    ('.main-section .navbar').removeClass('fixed-top animated fadeInDown');
                };
            });
        }else{
            
            ('.main-section .navbar').addClass('fixed-top');
                
        };  
    }

    menuToggle();
}()); 