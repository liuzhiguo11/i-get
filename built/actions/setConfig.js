"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setting_1 = __importDefault(require("../setting"));
const config_json_1 = __importDefault(require("../../config/config.json"));
const utils_1 = require("../utils");
const fs_1 = __importDefault(require("fs"));
const inquirer_1 = __importDefault(require("inquirer"));
const path_1 = __importDefault(require("path"));
const configPath = path_1.default.join(setting_1.default.configPath, 'config.json');
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
    console.log(setting_1.default, config_json_1.default);
    inquirer_1.default.prompt({ name: 'gitPath', message: '请输入git地址(示例:bitbucket:liuzhiguo11/i-get-templates)：' })
        .then((answers) => {
        config_json_1.default.gitPath = answers.gitPath;
        fs_1.default.writeFileSync(configPath, JSON.stringify(config_json_1.default));
        utils_1.showSuccess('仓库地址已更改！');
    });
}
/* 添加模板 */
function addTemplate() {
    inquirer_1.default.prompt({ name: 'tempName', message: '请输入模板名称：' })
        .then((answers) => {
        const tempIdx = config_json_1.default.templateList.indexOf(answers.tempName);
        if (tempIdx === -1) {
            config_json_1.default.templateList.push(answers.tempName);
            fs_1.default.writeFileSync(configPath, JSON.stringify(config_json_1.default));
            utils_1.showSuccess('添加模版成功！');
        }
        else {
            utils_1.showFail('模板名称已存在！');
        }
    });
}
/* 删除模板 */
function delTemplate() {
    inquirer_1.default.prompt({ type: 'list', name: 'tempName', message: '请选择模板:', choices: config_json_1.default.templateList })
        .then((answers) => {
        const tempIdx = config_json_1.default.templateList.indexOf(answers.tempName);
        config_json_1.default.templateList.splice(tempIdx, 1);
        fs_1.default.writeFileSync(configPath, JSON.stringify(config_json_1.default));
        utils_1.showSuccess('删除模版成功！');
    });
}
