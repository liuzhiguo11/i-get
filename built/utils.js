"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const log_symbols_1 = __importDefault(require("log-symbols"));
function showSuccess(text) {
    console.log(log_symbols_1.default.success, chalk_1.default.green(text));
}
exports.showSuccess = showSuccess;
function showFail(text) {
    console.log(log_symbols_1.default.error, chalk_1.default.red(text));
}
exports.showFail = showFail;
function showList(textList) {
    console.log(chalk_1.default.yellowBright(textList.join('\n')));
}
exports.showList = showList;
