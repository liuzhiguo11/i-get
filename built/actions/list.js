"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const temp_list_1 = __importDefault(require("../../config/temp-list"));
const utils_1 = require("../utils");
function default_1() {
    const tempList = temp_list_1.default.map((item) => {
        return ` - ${item}`;
    });
    utils_1.showList(tempList);
}
exports.default = default_1;
