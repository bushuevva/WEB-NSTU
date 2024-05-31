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

    let year = document.querySelector('.year');
    let month = document.querySelector('.month');
    let date = document.querySelector('.date');
    let week = document.querySelector('.week');

    year.innerHTML = 'Текущий год: ' + today.getFullYear();
    nowMonth = today.getMonth();
    const MonthD = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь', ]
    month.innerHTML = 'Текущий месяц: ' + MonthD[nowMonth];
    let nowDate = today.getDate();
    date.innerHTML ='Текущая дата: ' +  nowDate;
    nowWeek = today.getDay();
    const WeekD = ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    week.innerHTML = 'День недели: ' + WeekD[nowWeek];
}