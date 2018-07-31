import download from 'download-git-repo'
import ora from 'ora'

import setting from "../setting";
import configObj from '../../config/config.json'
import {showFail, showSuccess} from "../utils";

export default function () {
  const spinner = ora('正在更新模版列表...')
  spinner.start()
  download(`${configObj.gitPath}#temp-config`, setting.configPath, (err) => {
    if (err) {
      spinner.fail()
      showFail('模版列表更新失败！')
    } else {
      spinner.succeed()
      showSuccess('模版列表更新成功！')
    }
  })
}
