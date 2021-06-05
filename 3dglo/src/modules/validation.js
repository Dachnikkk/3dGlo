function validation() {
    const formsPhone = document.querySelectorAll('.form-phone'); // инпут телефона
    const formsName = document.querySelectorAll('.form-name'); // инпут имени
    const mess = document.querySelector('.mess'); // инпут сообщения

    formsPhone.forEach(item => { // перебор форм с телефонами
        item.addEventListener('input', (e) => { //вешаем слушатель на ввод
            if (e.target.value !== '') { // если строка не пустая
                if (!e.target.value.match(/^(\+?\d*)$/g)) { // если это не + в начале и не числа
                    e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join(''); // мы вырезаем строку и вставляем в value без последнего элемента
                }
            }
        })
    })

    formsName.forEach(item => {// перебор форм с именами
        item.addEventListener('input', (e) => { // вешаем слушатель на ввод
            if (e.target.value !== '') { // если строка не пустая
                if (!e.target.value.match(/([а-я]|\s)$/gi)) { // если это не кирилица и не пробел
                    e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join(''); // мы вырезаем строку и вставляем в value без последнего элемента
                }
            }
        })
    })

    mess.addEventListener('input', (e) => { // вешаем слушатель на ввод
        if (e.target.value !== '') {// если строка не пустая
            if (!e.target.value.match(/([0-9а-я\!\$\(\)\*\+\.\<\>\?\[\\\]\^\{\|\}'"%:№]|\s)$/gi)) {// если это не кирилица и не пробел и не числа и не знаки препинания
                e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join('');// мы вырезаем строку и вставляем в value без последнего элемента
            }
        }
    })
} 

export default validation;