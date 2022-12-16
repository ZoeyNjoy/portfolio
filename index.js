new fullpage(
    '#wrap', {
    anchors:['1page','2page','3page','4page','5page'],
    menu: '.menu',
    onLeave: function(origin, destination, direction, trigger){
        if(origin.index==0 && direction =='down'){
            $('.profile .left').show(1000);
        }else if(origin.index==2 && direction =='up'){
            $('.profile .left').show(1000);
        }else if(origin.index==1 && direction =='down'){
            $('.profile .left').hide(500);
        }else if(origin.index==1 && direction =='up'){
            $('.profile .left').hide(500);
        }else if(origin.index==2 && direction =='down'){
            $('#etc .main .image').show(500);
        }else if(origin.index==4 && direction =='up'){
            $('#etc .main .image').show(500);
        }else if(origin.index==3 && direction =='up'){
            $('#etc .main .image').hide(500);
        }else if(origin.index==3 && direction =='down'){
            $('#etc .main .image').hide(500);
        }},
    afterLoad: function(origin, destination, direction, trigger){
        if(origin.index == 1){
            $('.profile .left').show(1000);
        }else if(origin.index==4){
            $('#etc .main .image').show(500);
        }},
    navigation:true
    }
);



// $('.intro .txt #close').on('click',function(){
//     $('.intro').hide();
// });


// 1page
anime({
    targets:'#home p',
    translateY:[-25,10],
    // opacity:anime.stagger(0),
    delay:anime.stagger(50),
    direction:'alternate',
    easing: 'easeInExpo',
    duration:500,
    loop:true
})

// 2page
anime({
    targets: '.skill .per',
    borderRadius:50
});
anime({
    targets: '.skill .per1',
    width: '60%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per2',
    width: '54%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per3',
    width: '55%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per4',
    width: '50%',
    easing: 'easeInOutQuad',
    duration:3000
});
anime({
    targets: '.skill .per5',
    width: '25%',
    easing: 'easeInOutQuad',
    duration:3000
});


// 5번재 페이지 팝업
/* $('#etc .slides ul li a').on('click',function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    $('#etc .slides .popup img').attr('src', href);
    $('#etc .slides .popup').show(500);
    $('#etc .slide').css('background-color', 'rgba(0, 0, 0, 0.7)');
    $('#etc .slides .image').css({
        opacity: '0.8',
        filter: 'blur(1px)'
    });    
});
$('#etc .slides .popup .close').on('click',function(){
    $('#etc .slides .popup').hide(500);
    $('#etc .slide').css('background-color', 'rgba(0, 0, 0, 0)');
    $('#etc .slides .image').css({
        opacity: '1',
        filter: 'blur(0)'
    });
});
$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
        $('#etc .slides .popup').hide(500);
        $('#etc .slide').css('background-color', 'rgba(0, 0, 0, 0)');
        $('#etc .slides .image').css({
        opacity: '1',
        filter: 'blur(0)'
    });
    }
});*/

// $('#etc .slides .popup').on('scroll', function(){
//     $('body').addClass('stop')
// });



$(".group").colorbox({
    rel:'group',
    width:"90%",
    // innerWidth:"100%",
    height:"90%",
    // innerHeight:"100%",
    closeButton: true,
    scrolling:true
});