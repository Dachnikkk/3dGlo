function  countTimer(deadline) {
    //Находим элементы
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() { // функция записи времени 
        let dateStop = new Date(deadline).getTime(), // получаем дату дедлайна
            dateNow = new Date().getTime(); // получаем дату в данный момент
        if(dateNow > dateStop){ // если дата уже прошла присваиваем нули
            let timeRemaining = 0,
                seconds = 0,
                minutes = 0,
                hours = 0;
            return checkNull({timeRemaining, seconds, minutes, hours});  
        }else{
            let timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return checkNull({timeRemaining, seconds, minutes, hours});  
        }
    }
       
    function updateClock() { // обновление времени на странице
        let timer = getTimeRemaining(); // получаем время из расчёта
        // Вывод на экран
        timerHours.textContent = timer.hours; 
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        
        if(timer.timeRemaining <= 0){ // если дедлайн выполнен то удалим setInterval
            clearInterval(id);
        }
    }

    let id = setInterval(updateClock, 1000);

    function checkNull(obj) { // проверка на одно ли это число или нет
        for(let key in obj){ 
            if(key === 'timeRemaining') continue; // пропустим timeRemaining
            if(String(obj[key]).split('').length === 1){ // если цифра 1 то добавим ноль перед ней
                obj[key] = `0${obj[key]}`;
            }
        };
        return obj;
    }

}

export default countTimer;