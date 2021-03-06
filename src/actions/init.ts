import fs from 'fs'
import download from 'download-git-repo'
import ora from 'ora'

import configObj from '../../config/config.json'
import {showFail, showSuccess} from "../utils";
import inquirer from "inquirer";
import handlebars from "handlebars";

export default function (name: string, options: any) {
  if (!fs.existsSync(name)) {
    if (options.type) {
      if (configObj.templateList.indexOf(options.type) !== -1) {
        initProject(options.type,name)
      } else {
        showFail('没有对应类型的模板！')
      }
    } else {
      inquirer.prompt([
        {type: 'list', name: 'type', message: '请选择模板:', choices: configObj.templateList}
      ]).then((answers: any) => {
        initProject(answers.type,name)
      })
    }
  } else {
    showFail('项目已存在！')
  }
}

function initProject(type: string,name:string) {
  inquirer.prompt([
    {name: 'description', message: '请输入项目描述:'},
    {name: 'author', message: '请输入作者名称:'}
  ]).then((answers: any) => {
    const spinner = ora('正在下载模板...')
    spinner.start()
    download(configObj.gitPath + '#' + type, name, err => {
      if (err) {
        spinner.fail()
        showFail('模板下载失败！')
      } else {
        spinner.succeed()
        const fileName = `${name}/package.json`;
        const meta = {
          name,
          description: answers.description,
          author: answers.author
        }
        if (fs.existsSync(fileName)) {
          const content = fs.readFileSync(fileName).toString();
          const result = handlebars.compile(content)(meta);
          fs.writeFileSync(fileName, result);
        }
        showSuccess('项目初始化完成')
      }
    })
  })
}
