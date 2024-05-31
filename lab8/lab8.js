function showDate(){
    let out1 = document.querySelector('.date1');
    let out2 = document.querySelector('.date2');
    let out3 = document.querySelector('.date3');
    let out4 = document.querySelector('.date4');
    let out5 = document.querySelector('.date5');
    let out6 = document.querySelector('.date6');
    
    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для локали Финляндии: ' + today.toLocaleString('fi-FI');
    out3.innerHTML = 'Дата и время для локали Японии ' + today.toLocaleString('ja-JP');
    out4.innerHTML = 'Дата и время для локали Германии: ' + today.toLocaleString('de-DE');
    out5.innerHTML = 'Дата и время для локали Канаде: ' + today.toLocaleString('en-CA');
    out6.innerHTML = 'Дата и время для локали Испании: ' + today.toLocaleString('es-ES');

}