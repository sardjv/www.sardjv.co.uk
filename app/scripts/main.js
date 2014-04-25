'use strict';

//console.log('\'Allo \'Allo!');
$(document).ready(function(){
    $(this).scroll(function(){
        $('.navbar2').toggleClass('narrow', $(this).scrollTop() > 90);
    });
});