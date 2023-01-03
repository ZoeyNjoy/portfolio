new fullpage(
    '#wrap', {
    anchors:['1page','2page','3page','4page','5page'],
    menu: '.menu',
    onLeave: function(origin, destination, direction, trigger){
        if(origin.index==0 && direction =='down'){
            $('.profile .left').show(1000);
            $('.profile .left').addClass('ani1');
        }else if(origin.index==2 && direction =='up'){
            $('.profile .left').show(1000);
            $('.profile .left').addClass('ani1');
        }else if(origin.index==1 && direction =='down'){
            $('.profile .left').hide(500);
        }else if(origin.index==1 && direction =='up'){
            $('.profile .left').hide(500);
        }else if(origin.index==2 && direction =='down'){
            $('#etc .main .image').show(500);
            $('#etc .main .image').addClass('ani3');
        }else if(origin.index==4 && direction =='up'){
            $('#etc .main .image').show(500);
            $('#etc .main .image').addClass('ani4');
        }else if(origin.index==3 && direction =='up'){
            $('#etc .main .image').hide(500);
            $('#etc .main .image').addClass('ani4');
        }else if(origin.index==3 && direction =='down'){
            $('#etc .main .image').hide(500);
            $('#etc .main .image').addClass('ani4');
        }},
    afterLoad: function(origin, destination, direction, trigger){
        if(origin.index == 1){
            $('.profile .left').show(1000);
            $('.profile .left').addClass('ani1');
        }else if(origin.index==4){
            $('#etc .main .image').show(500);
            $('#etc .main .image').addClass('ani3');
        }},
    navigation:true,
    slidesNavigation: true
    }
);




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
/* $('.popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
        verticalFit: true
    },
    zoom: {
        enabled: true,
        duration: 300
    }
}); */

$('.popup').magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: true,
	mainClass: 'mfp-with-zoom mfp-img-mobile',
	image: {
		verticalFit: true,
	},
	gallery: {
		enabled: true,
		navigateByImgClick: true,
		preload: [0,1],
    },
	zoom: {
		enabled: true,
		duration: 300,
        easing: 'ease-in-out',
	}
});

