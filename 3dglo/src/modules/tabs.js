const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
        tab = tabHeader.querySelectorAll('.service-header-tab'),
        tabContent = document.querySelectorAll('.service-tab');
    
    const toggleTabContent = (index) => {
        for(let i = 0; i < tabContent.length; i++){
            if(index === i) { // если номер таба === номеру контента
                tab[i].classList.add('active'); 
                tabContent[i].classList.remove('d-none');
            }else { // если номер таба != номеру контента
                tab[i].classList.remove('active');
                tabContent[i].classList.add('d-none');
            }
        }
    };

    tabHeader.addEventListener('click', (event) => {
        let target = event.target; 
        target = target.closest('.service-header-tab'); // если мы нажали на элемент внутри
        if(target.classList.contains('service-header-tab')){ // если это таб
             tab.forEach((item, i) => { // перебор для того чтобы узнать номер таба
                if(item === target){
                    toggleTabContent(i); 
                }
            })
        }
    })
}

export default tabs;