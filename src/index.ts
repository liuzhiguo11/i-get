import program from 'commander';

import initAction from './actions/init'
import listAction from './actions/list'
import updateAction from './actions/update'

program.version('0.0.3')
program
  .command('list')
  .description('获取模版列表')
  .action(listAction)
program
  .command('init <name>')
  .description('初始化项目')
  .option('-t ,--type <type>')
  .action(initAction)
program
  .command('update')
  .description('更新模版列表')
  .action(updateAction)
program.parse(process.argv)
