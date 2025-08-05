/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation */ \"./src/js/modules/animation.js\");\n/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_animation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/js/modules/burgerMenu.js\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./src/js/modules/mobileMenu.js\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_tabsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabsNav */ \"./src/js/modules/tabsNav.js\");\n// Custom Scripts\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__.burgerMenu)();\n  (0,_modules_tabsNav__WEBPACK_IMPORTED_MODULE_3__.tabsNav)();\n});\n\n//# sourceURL=webpack://new__template/./src/js/main.js?\n}");

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/***/ (() => {

eval("{\n\n//# sourceURL=webpack://new__template/./src/js/modules/animation.js?\n}");

/***/ }),

/***/ "./src/js/modules/burgerMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/burgerMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   burgerMenu: () => (/* binding */ burgerMenu)\n/* harmony export */ });\nfunction burgerMenu() {\n  var desktopBurger = document.querySelector('#hamburger');\n  var mobileBurger = document.querySelector('#hamburger-sub');\n  var mobile = document.querySelector('.mobile');\n  var mobileMenu = document.querySelector('.mobile .wrapper');\n  desktopBurger.addEventListener('click', function () {\n    desktopBurger.checked = true;\n    mobileBurger.checked = true;\n    mobile.style.opacity = '1';\n    mobile.style.zIndex = 3000;\n    mobileMenu.style.left = '0%';\n  });\n  mobileBurger.addEventListener('click', function () {\n    desktopBurger.checked = false;\n    mobileBurger.checked = false;\n    mobile.style.opacity = '0';\n    mobile.style.zIndex = '-1';\n    mobileMenu.style.left = '-100%';\n  });\n}\n\n\n//# sourceURL=webpack://new__template/./src/js/modules/burgerMenu.js?\n}");

/***/ }),

/***/ "./src/js/modules/mobileMenu.js":
/*!**************************************!*\
  !*** ./src/js/modules/mobileMenu.js ***!
  \**************************************/
/***/ (() => {

eval("{\n\n//# sourceURL=webpack://new__template/./src/js/modules/mobileMenu.js?\n}");

/***/ }),

/***/ "./src/js/modules/tabsNav.js":
/*!***********************************!*\
  !*** ./src/js/modules/tabsNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   tabsNav: () => (/* binding */ tabsNav)\n/* harmony export */ });\nfunction tabsNav() {\n  var tabNav = {\n    navigation: document.querySelector(\"[data-navigation]\"),\n    // один целый блок\n    content: document.querySelector(\"[data-main-content]\") // один целый блок\n  };\n  tabNav.navigation.addEventListener(\"click\", changeNavigation); // делегируем событие через родителя\n\n  var swiper = new Swiper(\".swiper\", {\n    grid: {\n      rows: 2,\n      // 2 ряда\n      fill: \"row\" // заполнять по рядам\n    },\n    slidesPerGroup: 2,\n    slidesPerView: 2,\n    // 3 колонки на экране\n    spaceBetween: 20,\n    // расстояние между карточками\n    pagination: {\n      el: \".swiper-pagination\",\n      clickable: true\n    },\n    navigation: {\n      nextEl: \".swiper-button-next\",\n      prevEl: \".swiper-button-prev\"\n    },\n    scrollbar: {\n      el: \".swiper-scrollbar\",\n      draggable: true\n    },\n    breakpoints: {\n      769: {\n        slidesPerView: 3,\n        // 2 колонки при <=768px\n        grid: {\n          rows: 2 // остаётся 2 ряда\n        },\n        slidesPerGroup: 1 // листает сразу 4 карточки\n      }\n    },\n    // autoplay: true,\n    speed: 1200\n  });\n\n  //Табы\n\n  function changeNavigation(event) {\n    var target = event.target; // получем объект события\n    if (target.nodeName !== \"BUTTON\") return; // проверяем на какой блок был клик\n    var currentButton = target; // как проверили получаем button нак который был клик\n    var prevActiveBtn = tabNav.navigation.querySelector(\".greenactive\"); // получаем первый блок с классом geenactive\n    var prevActiveCtn = tabNav.content.querySelector(\".item-active\"); // получем с втророго блока первый блок с классом item-active\n    var currentTab = currentButton.dataset.tab; // currentTab присваемев дата атрубут прокликонной кнопки\n    console.log(currentTab);\n    if (prevActiveBtn) {\n      // проверяет сущуетвует ли блок с классом grennactive?\n      prevActiveBtn.classList.remove(\"greenactive\"); // удаляет тот класс\n      prevActiveCtn.classList.remove(\"item-active\"); // также\n    }\n    var currentContent = tabNav.content.querySelector(\"[data-content=\".concat(currentTab, \"]\")); // здеь ставится значение атрибута из currentTab\n\n    currentButton.classList.add(\"greenactive\"); // потом добваляем класс\n    currentContent.classList.add(\"item-active\"); // также\n    console.log(target);\n  }\n  //slider\n}\n\n\n//# sourceURL=webpack://new__template/./src/js/modules/tabsNav.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;