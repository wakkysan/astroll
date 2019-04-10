// JavaScript Document

$(function(){
    var topMoveHeight;

    // resize window
    var resizeWindow = function() {
        topMoveHeight = $('#articleBody').offset();
    }
    var timer = false;    
    $( window ).resize( function() {
        if ( timer !== false ) {
            clearTimeout( timer );
        }
        timer = setTimeout( function(){
            resizeWindow();
        }, 500 );
    });
    
    resizeWindow();
    
    $( window ).scroll( function(){
        var windowScrollTop = $( this ).scrollTop();
        if ( windowScrollTop < topMoveHeight.top ){
            $('#topMove').css('bottom', '-64px' );
            $('#articleTitle').css('background-position-y', 50 - ( windowScrollTop / 6.5 ) + '%' );
        } else {
            $('#topMove').css('bottom', '8px' );
        }
    });
});