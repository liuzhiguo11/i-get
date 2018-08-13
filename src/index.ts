import program from 'commander';

import initAction from './actions/init'
import listAction from './actions/list'
import configAction from './actions/setConfig'

program.version('0.0.3')
program
  .command('list')
  .description('获取模板列表')
  .action(listAction)
program
  .command('init <name>')
  .description('初始化项目')
  .option('-t ,--type <type>')
  .action(initAction)
program
  .command('config')
  .description('参数设置')
  .action(configAction)
program.parse(process.argv)
