// 给右侧按钮注册轮播点击事件
var index=0 ;
var n=$('.banner li').index();

$('.rightbtn').click(function () {
    
    $('.lunboimg img').eq(index).stop().animate({
        left: -1360
    }, 1000)
    
    index++;
    if (index >$('.lunboimg img').length-1) {
        index = 0;
    }
    $('.lunboimg img').eq(index).css('left', '1360px');
    $('.lunboimg img').eq(index).stop().animate({
        left: 0
    }, 1000)
    $('.banner li').eq(index).addClass('active').siblings().removeClass('active');

    n = index
})
//左侧按钮轮播事件
$('.leftbtn').click(function () {
    $('.lunboimg img').eq(index).stop().animate({
        left: 1360
    }, 1000);
    
    index--;
    if (index < 0) {
        index = $('.lunboimg img').length - 1;
    }
    $('.lunboimg img').eq(index).css('left', '-1360px');
    $('.lunboimg img').eq(index).stop().animate({
        left: 0
    }, 1000);
    $('.banner li').eq(index).addClass('active').siblings().removeClass('active');
    n = index
})
//li点击轮播事件
$('.banner ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    index=$(this).index();
    if(index>n){
        $('.lunboimg img').eq(n).animate({
            left:-1360
        },1000);
        $('.lunboimg img').css('left','1360px')
        $('.lunboimg img').eq(index).animate({
            left:0
        },1000);
        n=index;
    }else if(index<n){
        $('.lunboimg img').eq(n).animate({
            left:1360
        },1000);
        $('.lunboimg img').css('left','-1360px') 
        $('.lunboimg img').eq(index).animate({
            left:0
        },1000);
        n=index;
    }
})


// $('.banner ul li').click(function(){
//     $(this).addClass('active').siblings().removeClass('active');
//     // var n=$('.banner li').index();
//     var v=$(this).index();
//     if(v>index){
//         $('.lunboimg img').eq(index).animate({
//             left:-1360
//         },1000);
//         index=v;
//         $('.lunboimg img').eq(index).css('left','1360px')
//         $('.lunboimg img').eq(index).animate({
//             left:0
//         },1000);
        
//     }else if(v<index){
//         $('.lunboimg img').eq(index).animate({
//             left:1360
//         },1000);
//         index=v;
//         $('.lunboimg img').eq(index).css('left','-1360px')
//         $('.lunboimg img').eq(index).animate({
//             left:0
//         },1000);
        
//     }
// })
