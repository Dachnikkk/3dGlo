const togglePopup = () => { // функция открывания попап окна
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    let count = -38; // счётчик для анимации
    let interval;
    function animationPopup() { // функция анимации
        interval = requestAnimationFrame(animationPopup);
        count += 4;
        popupContent.style.left = count + '%';
        if(count === 38) {
            count = -38;
            cancelAnimationFrame(interval);
        }
    }

    popupBtn.forEach((elem) => { // добавление кнопкам возможности отрытия popup окна
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if(document.documentElement.clientWidth > 768){
                interval = requestAnimationFrame(animationPopup);
                popupContent.style.left = '-38%';
            }else if(document.documentElement.clientWidth < 501 && document.documentElement.clientWidth > 448){ 
                popupContent.style.left = '18%';
            }else if(document.documentElement.clientWidth < 448){
                popupContent.style.left = '15%';
            }
        })
    })

    popup.addEventListener('click', (event) => { // функция закрытия окна
        let target = event.target;
        if(target.classList.contains('popup-close')) { // если event крестик то закрыть
            popup.style.display = 'none';
            if(document.documentElement.clientWidth > 768) { 
                popupContent.style.left = '-38%';
            }else if(document.documentElement.clientWidth < 501 && document.documentElement.clientWidth > 448) { 
                popupContent.style.left = '18%';
            }else if(document.documentElement.clientWidth < 448) {
                popupContent.style.left = '15%';
            }
        }else {
            target = target.closest('.popup-content');
            if(!target) { //если нажатие вне контента то закрываем popup
                popup.style.display = 'none';
            }
        }
    })
}

export default togglePopup;