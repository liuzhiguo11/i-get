"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const download_git_repo_1 = __importDefault(require("download-git-repo"));
const ora_1 = __importDefault(require("ora"));
const setting_1 = __importDefault(require("../setting"));
const utils_1 = require("../utils");
function default_1() {
    const spinner = ora_1.default('正在更新模版列表...');
    spinner.start();
    download_git_repo_1.default(`${setting_1.default.gitPath}#temp-config`, setting_1.default.configPath, (err) => {
        if (err) {
            spinner.fail();
            utils_1.showFail('模版列表更新失败！');
        }
        else {
            spinner.succeed();
            utils_1.showSuccess('模版列表更新成功！');
        }
    });
}
exports.default = default_1;
