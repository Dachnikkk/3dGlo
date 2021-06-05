const dots = () => { // добавление точек в слайдер
    const ul = document.querySelector('.portfolio-dots'),
        slide = document.querySelectorAll('.portfolio-item');

    for(let i = 0; i < slide.length; i++) { 
        let li = document.createElement('li');
        if(i === 0) { // если это первый элемент то выдадим класс актив
            li.classList.add('dot', 'dot-active');
        }else{
            li.classList.add('dot');
        }
        ul.append(li);
    }
}

export default dots;