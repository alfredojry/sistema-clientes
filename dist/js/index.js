"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, 'react-app', 'build')));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'react-app', 'build', 'index.html'));
});
app.use('/api', routes_1.default);
app.use((req, res) => {
    res.status(404).send();
});
app.listen(PORT, () => {
    console.log(`\n> Listening at http://localhost:${PORT}`);
});
