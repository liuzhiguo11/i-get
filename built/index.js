"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
const init_1 = __importDefault(require("./actions/init"));
const list_1 = __importDefault(require("./actions/list"));
const setConfig_1 = __importDefault(require("./actions/setConfig"));
commander_1.default.version('0.0.4');
commander_1.default
    .command('list')
    .description('获取模板列表')
    .action(list_1.default);
commander_1.default
    .command('init <name>')
    .description('初始化项目')
    .option('-t ,--type <type>')
    .action(init_1.default);
commander_1.default
    .command('config')
    .description('参数设置')
    .action(setConfig_1.default);
commander_1.default.parse(process.argv);
