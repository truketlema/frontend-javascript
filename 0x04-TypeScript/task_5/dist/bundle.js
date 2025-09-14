/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sumMajorCredits: () => (/* binding */ sumMajorCredits),
/* harmony export */   sumMinorCredits: () => (/* binding */ sumMinorCredits)
/* harmony export */ });
// Task 11: Brand convention & Nominal typing
// Sum two MajorCredits
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "major",
    };
}
// Sum two MinorCredits
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "minor",
    };
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOQSw2Q0FBNkM7QUFjN0MsdUJBQXVCO0FBQ2hCLFNBQVMsZUFBZSxDQUM3QixRQUFzQixFQUN0QixRQUFzQjtJQUV0QixPQUFPO1FBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsS0FBSyxFQUFFLE9BQU87S0FDZixDQUFDO0FBQ0osQ0FBQztBQUVELHVCQUF1QjtBQUNoQixTQUFTLGVBQWUsQ0FDN0IsUUFBc0IsRUFDdEIsUUFBc0I7SUFFdEIsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO1FBQzVDLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1qYXZhc2NyaXB0LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtamF2YXNjcmlwdC10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mcm9udGVuZC1qYXZhc2NyaXB0LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mcm9udGVuZC1qYXZhc2NyaXB0LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mcm9udGVuZC1qYXZhc2NyaXB0LXR5cGVzY3JpcHQvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVGFzayAxMTogQnJhbmQgY29udmVudGlvbiAmIE5vbWluYWwgdHlwaW5nXHJcblxyXG4vLyBNYWpvckNyZWRpdHMgaW50ZXJmYWNlIHdpdGggdW5pcXVlIGJyYW5kXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFqb3JDcmVkaXRzIHtcclxuICBjcmVkaXRzOiBudW1iZXI7XHJcbiAgYnJhbmQ6IFwibWFqb3JcIjtcclxufVxyXG5cclxuLy8gTWlub3JDcmVkaXRzIGludGVyZmFjZSB3aXRoIHVuaXF1ZSBicmFuZFxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbm9yQ3JlZGl0cyB7XHJcbiAgY3JlZGl0czogbnVtYmVyO1xyXG4gIGJyYW5kOiBcIm1pbm9yXCI7XHJcbn1cclxuXHJcbi8vIFN1bSB0d28gTWFqb3JDcmVkaXRzXHJcbmV4cG9ydCBmdW5jdGlvbiBzdW1NYWpvckNyZWRpdHMoXHJcbiAgc3ViamVjdDE6IE1ham9yQ3JlZGl0cyxcclxuICBzdWJqZWN0MjogTWFqb3JDcmVkaXRzXHJcbik6IE1ham9yQ3JlZGl0cyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxyXG4gICAgYnJhbmQ6IFwibWFqb3JcIixcclxuICB9O1xyXG59XHJcblxyXG4vLyBTdW0gdHdvIE1pbm9yQ3JlZGl0c1xyXG5leHBvcnQgZnVuY3Rpb24gc3VtTWlub3JDcmVkaXRzKFxyXG4gIHN1YmplY3QxOiBNaW5vckNyZWRpdHMsXHJcbiAgc3ViamVjdDI6IE1pbm9yQ3JlZGl0c1xyXG4pOiBNaW5vckNyZWRpdHMge1xyXG4gIHJldHVybiB7XHJcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcclxuICAgIGJyYW5kOiBcIm1pbm9yXCIsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=