"use strict";
const button = document.querySelector('button');
function clickHandler(message) {
    let userbla = 'max';
    console.log('Clicked! ' + message);
}
button.addEventListener('click', () => {
    button === null || button === void 0 ? void 0 : button.addEventListener('click', clickHandler.bind(null, "test message"));
});
//# sourceMappingURL=app.js.map