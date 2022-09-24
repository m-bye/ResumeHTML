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

/***/ "./Contact.js":
/*!********************!*\
  !*** ./Contact.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\n//Contact Class\r\n\r\nclass Contact {\r\n\r\n    constructor(form){\r\n        this.fullName = form.elements[\"fullName\"].value;\r\n        this.email = form.elements[\"email\"].value;\r\n        this.subject = form.elements[\"subject\"].value;\r\n        this.body = form.elements['msg'].value;\r\n    }\r\n\r\n    fullName = \"\";\r\n    email = \"\";\r\n    subject = \"\";\r\n    body = \"\";\r\n\r\n    send(){\r\n        console.info(this.formatMessage());\r\n        document.getElementById(\"formInfo\").innerHTML = \"No emails yet, future feature for v2!\";\r\n    }\r\n\r\n    formatMessage(){\r\n        return 'To: ${this.fullName} Email: ${this.email} Subject: ${this.subject} Body: ${this.body}';\r\n    }\r\n};\n\n//# sourceURL=webpack:///./Contact.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ \"./Contact.js\");\n//index.js\r\n\r\n\r\n\r\nconst formInfo = document.getElementById(\"formInfo\");\r\n\r\nlet hasJob = false;\r\nif(hasJob){\r\n    //have job\r\n    showMessage(\"I am employed!\");\r\n}\r\nelse{\r\n    //need a job\r\n    showMessage(\"I am not employed!\");\r\n}\r\n\r\nlet today = new Date();\r\nlet dayOfWeek = today.getDay();\r\nif(dayOfWeek === 0 || dayOfWeek === 6){\r\n    showMessage(\"Its the weekend baby! I will follow up Monday.\")\r\n}\r\n\r\nfunction showMessage(message){    \r\n    formInfo.innerHTML = \"<p>\" + message + \"<p>\";\r\n}\r\n\r\nfunction clearMessage(){\r\n    formInfo.innerHTML = \"\";\r\n}\r\n\r\nconst first = \"first\";\r\n\r\nconst contactForm = document.getElementById(\"contactForm\");\r\ncontactForm.addEventListener(\"submit\", function(event){\r\n    event.preventDefault();\r\n    const contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__.Contact(contactForm);\r\n    contact.send();\r\n});\r\n\r\nconst experiences = document.getElementsByClassName(\"experience\");\r\nfor (let x = 0; x < experiences.length; x++){\r\n    const item = experiences[x];\r\n    item.addEventListener(\"mouseenter\", function (event){\r\n        event.target.style = \"background-color: #999999;\";\r\n    });\r\n    item.addEventListener(\"mouseleave\", function (event){\r\n        event.target.style = \"\";\r\n    });\r\n}\n\n//# sourceURL=webpack:///./index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;