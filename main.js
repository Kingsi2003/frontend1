$(function(){
let nextbutton = $('.cia2');
let prevbutton = $('.cia1');
let visible = 1;
$('#tog').on('click',function(){
    $('#ul').slideToggle(500)
})
nextbutton.on('click',function(){
    if($('.p').length === 0){
        $('.j').prop('src',$('.p').prop('src'))
        $(`.k:nth-child(${visible})`).addClass('p')
        
    }
    else if($('.p').length === 1 && visible < $('.k').length ){
        $('.j').prop('src',$('.p').prop('src'))
        visible++
        $(`.k:nth-child(${visible})`).addClass('p')
        $(`.k:nth-child(${visible})`).prev().removeClass('p')

    }
    else if( visible === $('.k').length){
        $('.j').prop('src',$('.p').prop('src'))
        $(`.k:nth-child(${visible})`).removeClass('p')
        visible = 1
        $(`.k:nth-child(${visible})`).addClass('p')
    }
   
})
prevbutton.on('click',function(){
    if($('.p').length === 1 && visible > 1){
        $('.j').prop('src',$('.p').prop('src'))
        visible--
        $(`.k:nth-child(${visible})`).addClass('p')
        $(`.k:nth-child(${visible})`).next().removeClass('p')
         console.log(visible)
    }
    else if(visible === 1){
        $('.j').prop('src',$('.p').prop('src'))
        $(`.k:nth-child(${visible})`).removeClass('p')
        visible = $('.k').length
        $(`.k:nth-child(${visible})`).addClass('p')
    }
})
})