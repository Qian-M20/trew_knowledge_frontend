window.onload = function(){
    /**
     * mobile dropdown menu behavior
     */

    // when clicking on the hamurger menu, toggle the mobile drop down menu 
    $('.ham-menu').click(function(){
        $('.ham-menu .fa-bars').toggle();
        $('.ham-menu .fa-times').toggle();
        $('.mobile-dropdown').toggle();
        if($('.ham-menu .fa-times').css('display') == 'inline'){
            $('.mobile-menu').css('border','1px solid #0D47A1');
            // $('.mobile-header').css('height','48rem');
            $('main,footer').hide();
        }else {
            $('.mobile-header').css('height','auto');
            $('main,footer').show();;
        }
    })

    $(window).on('resize',function(){
        if($(window).width()>=1024){
            $('.mobile-dropdown').hide();
            $('.ham-menu .fa-bars').show();
            $('.ham-menu .fa-times').hide();
        }
        if($('.ham-menu .fa-times').css('display') == 'inline'){
            // $('.mobile-menu').css('border','1px solid #0D47A1');
            // $('.mobile-header').css('height','48rem');
            // $('html').css('overflow-y','hidden');
            $('main,footer').hide();
        }else {
            $('.mobile-header').css('height','auto');
            // $('html').css('overflow-y','auto');
            $('main,footer').show();;
        }
    })

    // when selecting between mobile menus
    $('.mobile-menu').click(function() {
        $(this).parents('.mobile-menu-box').siblings().find('.mobile-menu').css('border','1px solid #0D47A1');
        $(this).css('border','1px solid white');
    })

    // when clicking on the en button on mobile dropdown page, open up language subdropdown
    $('.lang-mobile.dropdown-menu').click(function(){
        $('.mobile-header').toggle();
        $('.mobile-dropdown').toggle();
        $('.en-dropdown-mobile').css('display','flex');
    })
    // when clicking on the exit button on en dropdown page, close language subdropdown
    $('.en-dropdown-mobile .exit-btn').click(function(){
        $('.mobile-header').toggle();
        $('.mobile-dropdown').toggle();
        $('.en-dropdown-mobile').hide();
    })
    // when clicking on the co button on mobile dropdown page, open up country subdropdown
    $('.country-mobile.dropdown-menu').click(function(){
        $('.mobile-header').toggle();
        $('.mobile-dropdown').toggle();
        $('.co-dropdown-mobile').css('display','block');
    })
    // when clicking on the exit button on co dropdown page, close country subdropdown
    $('.co-dropdown-mobile .exit-btn').click(function(){
        $('.mobile-header').toggle();
        $('.mobile-dropdown').toggle();
        $('.co-dropdown-mobile').hide();
    })

    //when click on the continent row, expand the country lists
    $('.continent-row').click(function(){
        $(this).parents('.continent').siblings().find('.country-lists').hide();
        $(this).parents('.continent').find('.country-lists').toggle();
        $(this).parents('.continent').siblings().find('.open').hide();
        $(this).parents('.continent').siblings().find('.close').show();
        // $('.open').hide();
        // $('.close').show();
        $(this).parent().find('.close').toggle();
        $(this).parent().find('.open').toggle();
    })


    /**
     * sign-in modal behavior
     */
    $('.social-nav.sign-in').click(function(){
        $('.sign-in-wrapper').css('display', 'flex');
    })

    $('.sign-in-wrapper .close-btn').click(function(){
        $('.sign-in-wrapper').css('display', 'none');
    })

    /**
     * desktop view en button behavior
     */
    $('.lang .split-dropdown').click(function(){
        $('.fa-caret-down.lang').toggle();
        $('.fa-caret-up.lang').toggle();
        if($('.lang.dropdown-content').css('display') == 'none'){
            $('.lang.dropdown-content').css('display','flex');
        }else {
            $('.lang.dropdown-content').css('display','none');
        }
        console.log('hi');
    })

    /**
     * desktop view country button behavior
     */

    $('.country .split-dropdown').click(function(){
        $('.co-dropdown-large').css('display','block');
    })

    $('.co-dropdown-large .exit-btn').click(function(){
        $('.co-dropdown-large').hide();
    })

    /**
     * desktop view about us dropdown behavior
     */
    $('#site-menu .split-dropdown').click(function(){

        $(this).parents('.dropdown-menu').siblings().find('.fa-caret-up').hide();
        $(this).parents('.dropdown-menu').siblings().find('.fa-caret-down').show();

        $(this).find('.fa-caret-down').toggle();
        $(this).find('.fa-caret-up').toggle();

        $(this).parents('.dropdown-menu').siblings().find('.dropdown-content').hide();
        $(this).parents('.dropdown-menu').find('.dropdown-content').toggle();


        // if($('.dropdown-content.aboutUs').css('display') == 'none'){
        //     $('.dropdown-content.aboutUs').css('display','flex');
        // }else {
        //     $('.dropdown-content.aboutUs').css('display','none');
        // }
        
    })

    
}