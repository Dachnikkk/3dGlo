const sendForm = () => { // функция отправки верхней формы
    const errorMessage = 'Что то пошло не так...', // зададим подготовленные тексты для прогресса
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const forms = document.querySelectorAll('form'); // получаем форму
    const statusMessage = document.createElement('div'); // создаём див где будет прогресс
    statusMessage.style.cssText = 'font-size: 2rem; color: white;'; // зададим стили для текста прогресса
    
    forms.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault(); // при прянитии формы убираем обновление страницы
            createForm(event.target)
        })
    });

    const createForm = (form) => {
        statusMessage.textContent = loadMessage; // добавим текст прогресса
        form.appendChild(statusMessage); // добавим прогресс на страницу
        const formData = new FormData(form); // запишем данные формы 
        let body = {}; 

        for(let val of formData.entries()) { // перебор для записи значений формы в объект
            body[val[0]] = val[1];
        }
        postData(body, form)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                outputData(form);
            }) 
            .catch(error => console.error(error));
    }

    const outputData = (form) => {
        statusMessage.textContent = successMessage; 
            const inputs = form.querySelectorAll('input'); // найдём инпуты
            inputs.forEach((item) => {
                item.value = '' // очистим инпуты
            })
    }

    const postData = (body, form) => { // запрос на сервер

        return fetch('./server.php', {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        })
    
    }

}

export default sendForm;