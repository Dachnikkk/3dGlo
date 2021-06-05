const checkNumbers = () => { // проверки на ввод цифр в калькулятор
    const calc = document.querySelector('.calc'); // блок калькулятора
    calc.addEventListener('input', (e) => {
        if(e.target.classList[1] === 'calc-type') return; // если это селект
        e.target.value = e.target.value.replace(/\D/g, ''); // проверка на цифры
    })
    
}

export default checkNumbers;