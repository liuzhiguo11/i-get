"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("../../config/config.json"));
const utils_1 = require("../utils");
function default_1() {
    const tempList = config_json_1.default.templateList.map((item) => {
        return ` - ${item}`;
    });
    utils_1.showList(tempList);
}
exports.default = default_1;
