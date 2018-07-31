"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const ora_1 = __importDefault(require("ora"));
const config_json_1 = __importDefault(require("../../config/config.json"));
const utils_1 = require("../utils");
const inquirer_1 = __importDefault(require("inquirer"));
const handlebars_1 = __importDefault(require("handlebars"));
function default_1(name, options) {
    if (!fs_1.default.existsSync(name)) {
        if (options.type) {
            if (config_json_1.default.templateList.indexOf(options.type) !== -1) {
                initProject(options.type);
            }
            else {
                utils_1.showFail('没有对应类型的模版！');
            }
        }
        else {
            inquirer_1.default.prompt([
                { type: 'list', name: 'type', message: '请选择模版:', choices: config_json_1.default.templateList }
            ]).then((answers) => {
                initProject(answers.type);
            });
        }
    }
    else {
        utils_1.showFail('项目已存在！');
    }
}
exports.default = default_1;
function initProject(type) {
    inquirer_1.default.prompt([
        { name: 'description', message: '请输入项目描述:' },
        { name: 'author', message: '请输入作者名称:' }
    ]).then((answers) => {
        const spinner = ora_1.default('正在下载模版...');
        spinner.start();
        download_git_repo_1.default(config_json_1.default.gitPath + '#' + type, name, err => {
            if (err) {
                spinner.fail();
                utils_1.showFail('模版下载失败！');
            }
            else {
                spinner.succeed();
                const fileName = `${name}/package.json`;
                const meta = {
                    name,
                    description: answers.description,
                    author: answers.author
                };
                if (fs_1.default.existsSync(fileName)) {
                    const content = fs_1.default.readFileSync(fileName).toString();
                    const result = handlebars_1.default.compile(content)(meta);
                    fs_1.default.writeFileSync(fileName, result);
                }
                utils_1.showSuccess('项目初始化完成');
            }
        });
    });
}
