"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const inquirer_1 = __importDefault(require("inquirer"));
function default_1() {
    inquirer_1.default.prompt({ type: 'list', name: 'action', message: '修改配置', choices: ['更改仓库', '添加模板', '删除模板'] })
        .then((answers) => {
        switch (answers.action) {
            case '更改仓库': {
                changeRepo();
                break;
            }
            case '添加模板': {
                addTemplate();
                break;
            }
            case '删除模板': {
                delTemplate();
                break;
            }
            default: {
                utils_1.showFail('未知选项');
                break;
            }
        }
    });
}
exports.default = default_1;
/* 更改仓库 */
function changeRepo() {
    utils_1.showSuccess('更改仓库');
}
/* 添加模板 */
function addTemplate() {
    utils_1.showSuccess('添加模板');
}
/* 删除模板 */
function delTemplate() {
    utils_1.showSuccess('删除模版');
}
