import setting from "../setting";
import configObj from '../../config/config.json'
import {showFail, showSuccess} from "../utils";
import fs from 'fs'
import inquirer from "inquirer";
import path from "path";

const configPath = path.join(setting.configPath, 'config.json')
export default function () {
  inquirer.prompt(
    {type: 'list', name: 'action', message: '修改配置', choices: ['更改仓库', '添加模板', '删除模板']})
    .then((answers: any) => {
      switch (answers.action) {
        case '更改仓库': {
          changeRepo()
          break;
        }
        case '添加模板': {
          addTemplate()
          break;
        }
        case '删除模板': {
          delTemplate()
          break;
        }
        default: {
          showFail('未知选项')
          break;
        }
      }
    })
}

/* 更改仓库 */
function changeRepo() {
  console.log(setting, configObj)
  inquirer.prompt({name: 'gitPath', message: '请输入git地址(示例:bitbucket:liuzhiguo11/i-get-templates)：'})
    .then((answers: any) => {
      configObj.gitPath = answers.gitPath
      fs.writeFileSync(configPath, JSON.stringify(configObj))
      showSuccess('仓库地址已更改！')
    })
}

/* 添加模板 */
function addTemplate() {
  inquirer.prompt({name: 'tempName', message: '请输入模板名称：'})
    .then((answers: any) => {
      const tempIdx = configObj.templateList.indexOf(answers.tempName)
      if(tempIdx===-1){
        configObj.templateList.push(answers.tempName)
        fs.writeFileSync(configPath, JSON.stringify(configObj))
        showSuccess('添加模版成功！')
      }else {
        showFail('模板名称已存在！')
      }
    })
}

/* 删除模板 */
function delTemplate() {
  inquirer.prompt({type: 'list', name: 'tempName', message: '请选择模板:', choices: configObj.templateList})
    .then((answers: any) => {
      const tempIdx = configObj.templateList.indexOf(answers.tempName)
      configObj.templateList.splice(tempIdx, 1)
      fs.writeFileSync(configPath, JSON.stringify(configObj))
      showSuccess('删除模版成功！')
    })
}
