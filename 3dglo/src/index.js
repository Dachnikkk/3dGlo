'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import dots from './modules/dots';
import slider from './modules/slider';
import photos from './modules/photos';
import checkNumbers from './modules/checkNumbers';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import validation from './modules/validation';

// Таймер
countTimer('18 january 2021');

// Меню 
toggleMenu();

// popup
togglePopup();

// ТАБЫ
tabs()

// Точки в слайдере
dots();

// Слайдер

slider();

// Замена фотографий

photos();

// Калькулятор
checkNumbers(); 
calc(100);

// send-ajax-form
sendForm();

// валадиция форм
validation();
