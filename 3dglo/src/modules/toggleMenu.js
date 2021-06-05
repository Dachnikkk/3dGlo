const toggleMenu = () => { // функция открывания меню
    const btnMenu = document.querySelector('.menu'), 
        menu = document.querySelector('menu');

    const handlerMenu = () => { // добавление класса с анимацией появления
        menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', handlerMenu); // открытие меню

    menu.addEventListener('click', (event) => {
        let target = event.target; 
        if(target.classList.contains('close-btn')) { // если это крестик то закрыть
            handlerMenu();
        }else if(target.tagName === 'A') { // если это элемент меню то закрыть меню
            handlerMenu();
        }
    })
};

export default toggleMenu;