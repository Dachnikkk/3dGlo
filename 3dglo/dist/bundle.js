/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_dots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/dots */ \"./src/modules/dots.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_photos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/photos */ \"./src/modules/photos.js\");\n/* harmony import */ var _modules_checkNumbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/checkNumbers */ \"./src/modules/checkNumbers.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/validation */ \"./src/modules/validation.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n // Таймер\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('18 january 2021'); // Меню \n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); // ТАБЫ\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); // Точки в слайдере\n\n(0,_modules_dots__WEBPACK_IMPORTED_MODULE_4__.default)(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)(); // Замена фотографий\n\n(0,_modules_photos__WEBPACK_IMPORTED_MODULE_6__.default)(); // Калькулятор\n\n(0,_modules_checkNumbers__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_8__.default)(100); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_9__.default)(); // валадиция форм\n\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n//# sourceURL=webpack://3dglo/./src/js/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = Math.round(total);\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/checkNumbers.js":
/*!*************************************!*\
  !*** ./src/modules/checkNumbers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar checkNumbers = function checkNumbers() {\n  // проверки на ввод цифр в калькулятор\n  var calc = document.querySelector('.calc'); // блок калькулятора\n\n  calc.addEventListener('input', function (e) {\n    if (e.target.classList[1] === 'calc-type') return; // если это селект\n\n    e.target.value = e.target.value.replace(/\\D/g, ''); // проверка на цифры\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkNumbers);\n\n//# sourceURL=webpack://3dglo/./src/modules/checkNumbers.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction countTimer(deadline) {\n  //Находим элементы\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    // функция записи времени \n    var dateStop = new Date(deadline).getTime(),\n        // получаем дату дедлайна\n    dateNow = new Date().getTime(); // получаем дату в данный момент\n\n    if (dateNow > dateStop) {\n      // если дата уже прошла присваиваем нули\n      var timeRemaining = 0,\n          seconds = 0,\n          minutes = 0,\n          hours = 0;\n      return checkNull({\n        timeRemaining: timeRemaining,\n        seconds: seconds,\n        minutes: minutes,\n        hours: hours\n      });\n    } else {\n      var _timeRemaining = (dateStop - dateNow) / 1000,\n          _seconds = Math.floor(_timeRemaining % 60),\n          _minutes = Math.floor(_timeRemaining / 60 % 60),\n          _hours = Math.floor(_timeRemaining / 60 / 60);\n\n      return checkNull({\n        timeRemaining: _timeRemaining,\n        seconds: _seconds,\n        minutes: _minutes,\n        hours: _hours\n      });\n    }\n  }\n\n  function updateClock() {\n    // обновление времени на странице\n    var timer = getTimeRemaining(); // получаем время из расчёта\n    // Вывод на экран\n\n    timerHours.textContent = timer.hours;\n    timerMinutes.textContent = timer.minutes;\n    timerSeconds.textContent = timer.seconds;\n\n    if (timer.timeRemaining <= 0) {\n      // если дедлайн выполнен то удалим setInterval\n      clearInterval(id);\n    }\n  }\n\n  var id = setInterval(updateClock, 1000);\n\n  function checkNull(obj) {\n    // проверка на одно ли это число или нет\n    for (var key in obj) {\n      if (key === 'timeRemaining') continue; // пропустим timeRemaining\n\n      if (String(obj[key]).split('').length === 1) {\n        // если цифра 1 то добавим ноль перед ней\n        obj[key] = \"0\".concat(obj[key]);\n      }\n    }\n\n    ;\n    return obj;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dglo/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/dots.js":
/*!*****************************!*\
  !*** ./src/modules/dots.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar dots = function dots() {\n  // добавление точек в слайдер\n  var ul = document.querySelector('.portfolio-dots'),\n      slide = document.querySelectorAll('.portfolio-item');\n\n  for (var i = 0; i < slide.length; i++) {\n    var li = document.createElement('li');\n\n    if (i === 0) {\n      // если это первый элемент то выдадим класс актив\n      li.classList.add('dot', 'dot-active');\n    } else {\n      li.classList.add('dot');\n    }\n\n    ul.append(li);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dots);\n\n//# sourceURL=webpack://3dglo/./src/modules/dots.js?");

/***/ }),

/***/ "./src/modules/photos.js":
/*!*******************************!*\
  !*** ./src/modules/photos.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar photos = function photos() {\n  var command = document.querySelector('.command'); // получаем див команды\n\n  var photos = command.querySelectorAll('.command__photo'); // находим все фото\n\n  photos.forEach(function (item) {\n    // переберём все фото\n    item.addEventListener('mouseenter', function (e) {\n      // при наведении на фото\n      e.target.dataset.src = e.target.src; // запишем начальный src чтобы всегда можно было к нему вернуться \n\n      e.target.src = e.target.dataset.img; // заменим из src\n    });\n    item.addEventListener('mouseout', function (e) {\n      // при покидании курсора с фото\n      e.target.src = e.target.dataset.src; // выполним обратную замену\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (photos);\n\n//# sourceURL=webpack://3dglo/./src/modules/photos.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  // функция отправки верхней формы\n  var errorMessage = 'Что то пошло не так...',\n      // зададим подготовленные тексты для прогресса\n  loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';\n  var forms = document.querySelectorAll('form'); // получаем форму\n\n  var statusMessage = document.createElement('div'); // создаём див где будет прогресс\n\n  statusMessage.style.cssText = 'font-size: 2rem; color: white;'; // зададим стили для текста прогресса\n\n  forms.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault(); // при прянитии формы убираем обновление страницы\n\n      createForm(event.target);\n    });\n  });\n\n  var createForm = function createForm(form) {\n    statusMessage.textContent = loadMessage; // добавим текст прогресса\n\n    form.appendChild(statusMessage); // добавим прогресс на страницу\n\n    var formData = new FormData(form); // запишем данные формы \n\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData.entries()),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var val = _step.value;\n        // перебор для записи значений формы в объект\n        body[val[0]] = val[1];\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    postData(body, form).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      outputData(form);\n    })[\"catch\"](function (error) {\n      return console.error(error);\n    });\n  };\n\n  var outputData = function outputData(form) {\n    statusMessage.textContent = successMessage;\n    var inputs = form.querySelectorAll('input'); // найдём инпуты\n\n    inputs.forEach(function (item) {\n      item.value = ''; // очистим инпуты\n    });\n  };\n\n  var postData = function postData(body, form) {\n    // запрос на сервер\n    return fetch('./server.php', {\n      method: 'POST',\n      header: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include'\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var slide = document.querySelectorAll('.portfolio-item'),\n      dot = document.querySelectorAll('.dot'),\n      slider = document.querySelector('.portfolio-content');\n  var currentSlide = 0,\n      // счётчик слайдов и точек\n  interval;\n\n  var prevSlide = function prevSlide(elem, i, strClass) {\n    // удаление элемента\n    elem[i].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, i, strClass) {\n    // переключение на след слайд\n    elem[i].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    // автоматическое переключение слайдов\n    prevSlide(slide, currentSlide, 'portfolio-item-active'); // удаляем класс актив у слайда\n\n    prevSlide(dot, currentSlide, 'dot-active'); // удаляем класс актив у точки\n\n    currentSlide++; // получаем номер след слайда и кнопки\n\n    if (currentSlide >= slide.length) {\n      // если счётчик выходит за рамки колличества слайдов то возвращаем его к первому\n      currentSlide = 0;\n    }\n\n    ;\n    nextSlide(slide, currentSlide, 'portfolio-item-active'); // добавляем класс следующему слайду\n\n    nextSlide(dot, currentSlide, 'dot-active'); // добавляем класс следующей точке\n  };\n\n  var startSlide = function startSlide() {\n    // запуск автоматического переключения слайдов с интервалом\n    interval = setInterval(autoPlaySlide, 3000);\n  };\n\n  var stopSlide = function stopSlide() {\n    // отключение автоматического переключения слайдов с интервалом\n    clearInterval(interval);\n  };\n\n  slider.addEventListener('click', function (event) {\n    // слушатель событий на ручное переключение слайдов\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      // если пользователь нажал не на точки или не на стрелки то прервём слушатель событий\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active'); // // удаляем класс актив у слайда\n\n    prevSlide(dot, currentSlide, 'dot-active'); // удаляем класс актив у точки\n\n    if (target.matches('#arrow-right')) {\n      // если пользователь нажал на кнопку вправо то увеличим счётчик\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      // если пользователь нажал на кнопку влево то уменьшим счётчик\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      // если пользователь нажал на точку то переберём все точки\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          // если мы нашли нужную точку которая соответствует таргету\n          currentSlide = index; // счётчику присваиваем нужный индекс\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      // если счётчик выходит за рамки колличества слайдов то возвращаем его к первому\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      // обратное переключение с 0 на последний \n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active'); // вывод активного слайда\n\n    nextSlide(dot, currentSlide, 'dot-active'); // вывод активной точки\n  });\n  slider.addEventListener('mouseover', function (event) {\n    // если пользователь находится на точках или стрелках то останавливаем автоматическое переключение\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    // если пользователь покинул точки или стрелки то запускаем автоматическое переключение\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        // если номер таба === номеру контента\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        // если номер таба != номеру контента\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target;\n    target = target.closest('.service-header-tab'); // если мы нажали на элемент внутри\n\n    if (target.classList.contains('service-header-tab')) {\n      // если это таб\n      tab.forEach(function (item, i) {\n        // перебор для того чтобы узнать номер таба\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  // функция открывания меню\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    // добавление класса с анимацией появления\n    menu.classList.toggle('active-menu');\n  };\n\n  btnMenu.addEventListener('click', handlerMenu); // открытие меню\n\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('close-btn')) {\n      // если это крестик то закрыть\n      handlerMenu();\n    } else if (target.tagName === 'A') {\n      // если это элемент меню то закрыть меню\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dglo/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  // функция открывания попап окна\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n  var count = -38; // счётчик для анимации\n\n  var interval;\n\n  function animationPopup() {\n    // функция анимации\n    interval = requestAnimationFrame(animationPopup);\n    count += 4;\n    popupContent.style.left = count + '%';\n\n    if (count === 38) {\n      count = -38;\n      cancelAnimationFrame(interval);\n    }\n  }\n\n  popupBtn.forEach(function (elem) {\n    // добавление кнопкам возможности отрытия popup окна\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (document.documentElement.clientWidth > 768) {\n        interval = requestAnimationFrame(animationPopup);\n        popupContent.style.left = '-38%';\n      } else if (document.documentElement.clientWidth < 501 && document.documentElement.clientWidth > 448) {\n        popupContent.style.left = '18%';\n      } else if (document.documentElement.clientWidth < 448) {\n        popupContent.style.left = '15%';\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    // функция закрытия окна\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      // если event крестик то закрыть\n      popup.style.display = 'none';\n\n      if (document.documentElement.clientWidth > 768) {\n        popupContent.style.left = '-38%';\n      } else if (document.documentElement.clientWidth < 501 && document.documentElement.clientWidth > 448) {\n        popupContent.style.left = '18%';\n      } else if (document.documentElement.clientWidth < 448) {\n        popupContent.style.left = '15%';\n      }\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        //если нажатие вне контента то закрываем popup\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dglo/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validation.js":
/*!***********************************!*\
  !*** ./src/modules/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction validation() {\n  var formsPhone = document.querySelectorAll('.form-phone'); // инпут телефона\n\n  var formsName = document.querySelectorAll('.form-name'); // инпут имени\n\n  var mess = document.querySelector('.mess'); // инпут сообщения\n\n  formsPhone.forEach(function (item) {\n    // перебор форм с телефонами\n    item.addEventListener('input', function (e) {\n      //вешаем слушатель на ввод\n      if (e.target.value !== '') {\n        // если строка не пустая\n        if (!e.target.value.match(/^(\\+?\\d*)$/g)) {\n          // если это не + в начале и не числа\n          e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join(''); // мы вырезаем строку и вставляем в value без последнего элемента\n        }\n      }\n    });\n  });\n  formsName.forEach(function (item) {\n    // перебор форм с именами\n    item.addEventListener('input', function (e) {\n      // вешаем слушатель на ввод\n      if (e.target.value !== '') {\n        // если строка не пустая\n        if (!e.target.value.match(/([а-я]|\\s)$/gi)) {\n          // если это не кирилица и не пробел\n          e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join(''); // мы вырезаем строку и вставляем в value без последнего элемента\n        }\n      }\n    });\n  });\n  mess.addEventListener('input', function (e) {\n    // вешаем слушатель на ввод\n    if (e.target.value !== '') {\n      // если строка не пустая\n      if (!e.target.value.match(/([0-9а-я\\!\\$\\(\\)\\*\\+\\.\\<\\>\\?\\[\\\\\\]\\^\\{\\|\\}'\"%:№]|\\s)$/gi)) {\n        // если это не кирилица и не пробел и не числа и не знаки препинания\n        e.target.value = e.target.value.split('').slice(0, e.target.value.length - 1).join(''); // мы вырезаем строку и вставляем в value без последнего элемента\n      }\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\n\n//# sourceURL=webpack://3dglo/./src/modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;