import chalk from 'chalk'
import symbols from 'log-symbols'

export function showSuccess(text: string) {
  console.log(symbols.success, chalk.green(text))
}

export function showFail(text: string) {
  console.log(symbols.error, chalk.red(text))
}

export function showList(textList: string[]) {
  console.log(chalk.yellowBright(textList.join('\n')))
}
