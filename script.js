window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.red');
    //touchstart - срабатывает при нажатии пальца на элемент
    box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log('redbox: touchstart');
        console.log(e.target);
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    })
    //touchmove - срабатывает при движении пальца по экрану после нажатия
    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        //беру координаты нажатого пальца в движении
        console.log('redbox: touch touchmove' + e.touches[0].pageX);
    })
    //touchmove - срабатывает, когда палец убирается от экрана
    box.addEventListener('touchend', function(e){
        e.preventDefault();
        console.log('redbox: touchend');
    })
})