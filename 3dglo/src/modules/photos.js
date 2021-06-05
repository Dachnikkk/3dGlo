const photos = () => {
    const command = document.querySelector('.command'); // получаем див команды
    const photos = command.querySelectorAll('.command__photo'); // находим все фото
    photos.forEach((item) => { // переберём все фото
        item.addEventListener('mouseenter', (e) => { // при наведении на фото
            e.target.dataset.src = e.target.src // запишем начальный src чтобы всегда можно было к нему вернуться 
            e.target.src = e.target.dataset.img // заменим из src
        })
        item.addEventListener('mouseout', (e) => { // при покидании курсора с фото
            e.target.src = e.target.dataset.src // выполним обратную замену
        })
    })
}

export default photos;