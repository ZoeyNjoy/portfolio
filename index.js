new fullpage(
    '#wrap', {
    anchors:['1page','2page','3page','4page','5page','6page'],
    menu: '.menu',
    onLeave: function(origin, destination, direction){
        if(origin.index==1 && destination.index==0){
            $('.profile .left').hide(1000);
        }else if(origin.index==0 && destination.index==1){
            $('.profile .left').show(500);
        }else if(origin.index==1 && destination.index==2){
            $('.profile .left').hide(1000);
        }else if(origin.index==2 && destination.index==1){
            $('.profile .left').show(500);
        }
    },
    navigation:true
    }
);

$('.cau .box .btn').on('click',function(){
    $('.cau').hide();
});


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
    width: '50%',
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
    width: '30%',
    easing: 'easeInOutQuad',
    duration:3000
});


// colorbox
    $('.clickbox').colorbox({
        Width:'100%',
        innerWidth:'100%'
    });


// 5번재 페이지 팝업
$('#etc .main .image ul li a').on('click',function(e){
    e.preventDefault();
    var href = $(this).attr('href');

    $('#etc .main .popup img').attr('src',href);
    $('#etc .main .popup').show(500);
    $('#etc .main').css('background-color', 'rgba(0, 0, 0, 0.5)');
});
$('#etc .main .popup .close').on('click',function(){
    $('#etc .main .popup').hide(500);
    $('#etc .main').css('background-color', 'rgba(0, 0, 0, 0)');
});