import fs from 'fs'
import download from 'download-git-repo'
import ora from 'ora'

import templateList from '../../config/temp-list'
import {showFail, showSuccess} from "../utils";
import inquirer from "inquirer";
import setting from "../setting";
import handlebars from "handlebars";

export default function (name: string, options: any) {
  if (!fs.existsSync(name)) {
    if (options.type) {
      if (templateList.indexOf(options.type) !== -1) {
        inquirer.prompt([
          {name: 'description', message: '请输入项目描述:'},
          {name: 'author', message: '请输入作者名称:'}
        ]).then((answers: any) => {
          const spinner = ora('正在下载模版...')
          spinner.start()
          download(setting.gitPath + '#' + options.type, name, err => {
            if (err) {
              spinner.fail()
              showFail('模版下载失败！')
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
      } else {
        showFail('没有对应类型的模版！')
      }
    }
  } else {
    showFail('项目已存在！')
  }
}
