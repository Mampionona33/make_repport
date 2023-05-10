"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 4000;
(() => {
    try {
        app_1.app.listen(PORT, () => {
            console.log(`Server start on port: ${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
})();
