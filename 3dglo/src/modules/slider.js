const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        dot = document.querySelectorAll('.dot'),
        slider = document.querySelector('.portfolio-content');
    
    let currentSlide = 0, // счётчик слайдов и точек
        interval;

    const prevSlide = (elem, i, strClass) => { // удаление элемента
        elem[i].classList.remove(strClass);
    };

    const nextSlide = (elem, i, strClass) => { // переключение на след слайд
        elem[i].classList.add(strClass);
    }

    const autoPlaySlide = () => { // автоматическое переключение слайдов
        prevSlide(slide, currentSlide, 'portfolio-item-active'); // удаляем класс актив у слайда
        prevSlide(dot, currentSlide, 'dot-active'); // удаляем класс актив у точки

        currentSlide++; // получаем номер след слайда и кнопки

        if(currentSlide >= slide.length){ // если счётчик выходит за рамки колличества слайдов то возвращаем его к первому
            currentSlide = 0;
        };

        nextSlide(slide, currentSlide, 'portfolio-item-active'); // добавляем класс следующему слайду
        nextSlide(dot, currentSlide, 'dot-active'); // добавляем класс следующей точке
    };

    const startSlide = () => { // запуск автоматического переключения слайдов с интервалом
        interval = setInterval(autoPlaySlide, 3000);
    };
    
    const stopSlide = () => { // отключение автоматического переключения слайдов с интервалом
        clearInterval(interval);
    }

    slider.addEventListener('click', (event) => { // слушатель событий на ручное переключение слайдов
        event.preventDefault();
        let target = event.target;

        if(!target.matches('.portfolio-btn, .dot')) { // если пользователь нажал не на точки или не на стрелки то прервём слушатель событий
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active'); // // удаляем класс актив у слайда
        prevSlide(dot, currentSlide, 'dot-active'); // удаляем класс актив у точки

        if(target.matches('#arrow-right')) { // если пользователь нажал на кнопку вправо то увеличим счётчик
            currentSlide++;
        }else if(target.matches('#arrow-left')) { // если пользователь нажал на кнопку влево то уменьшим счётчик
            currentSlide--;
        }else if(target.matches('.dot')) { // если пользователь нажал на точку то переберём все точки
            dot.forEach((elem, index) => {
                if(elem === target) {  // если мы нашли нужную точку которая соответствует таргету
                    currentSlide = index; // счётчику присваиваем нужный индекс
                }
            })
        }

        if(currentSlide >= slide.length) { // если счётчик выходит за рамки колличества слайдов то возвращаем его к первому
            currentSlide = 0;
        }

        if(currentSlide < 0) { // обратное переключение с 0 на последний 
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active'); // вывод активного слайда
        nextSlide(dot, currentSlide, 'dot-active'); // вывод активной точки
    })

    slider.addEventListener('mouseover', (event) => { // если пользователь находится на точках или стрелках то останавливаем автоматическое переключение
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
            stopSlide();
        }
    })

    slider.addEventListener('mouseout', (event) => { // если пользователь покинул точки или стрелки то запускаем автоматическое переключение
        if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')) { 
            startSlide();
        }
    })

    startSlide();
}

export default slider;