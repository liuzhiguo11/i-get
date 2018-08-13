import setting from "../setting";
import configObj from '../../config/config.json'
import {showFail, showSuccess} from "../utils";

import inquirer from "inquirer";

export default function () {
  inquirer.prompt(
    {type: 'list', name: 'action', message: '修改配置', choices: ['更改仓库', '添加模板', '删除模板']})
    .then((answers:any)=>{
      switch (answers.action) {
        case '更改仓库':{
          changeRepo()
          break;
        }
        case '添加模板':{
          addTemplate()
          break;
        }
        case '删除模板':{
          delTemplate()
          break;
        }
        default:{
          showFail('未知选项')
          break;
        }
      }
    })
}

/* 更改仓库 */
function changeRepo() {
  showSuccess('更改仓库')
}

/* 添加模板 */
function addTemplate() {
  showSuccess('添加模板')
}

/* 删除模板 */
function delTemplate() {
  showSuccess('删除模版')
}
