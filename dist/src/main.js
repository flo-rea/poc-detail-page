"use strict";
const bootstrap_1 = require('./bootstrap/bootstrap');
const app = new bootstrap_1.default();
app.start()
    .then(() => {
    console.log('loaded');
});
//# sourceMappingURL=main.js.map