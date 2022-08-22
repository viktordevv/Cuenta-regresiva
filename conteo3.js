const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMensaje = document.querySelector('.msj-final');

//Fecha de finalización
const finalDate = new Date('Oct 20, 2022 00:00:00').getTime();

let interval = setInterval(function(){
    //formato fecha actual
    const now = new Date().getTime();

    //resta fecha actual - fecha final
    const distance = finalDate - now;

    //calculo dias, horas, minutos y segundos
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    //mostrar resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    //Explosion
    if(distance < 0){
        clearInterval(interval);
        $finalMensaje.style.transform = 'translateY(0)';
    }
}, 1000);
