#!/usr/bin/env node
const execa = require('execa');
const chalk = require('chalk')
let branch = process.argv.slice(2)[1] || 'test'
let msg = process.argv.slice(2)[0]
let rulesArray = ['fix', 'feat', 'docs', 'style', 'perf', 'refactor', 'test', 'revert', 'build']
let msgArray = msg.split(':')
if (msgArray.length != 2 || !rulesArray.includes(msgArray[0])) {
  console.log(`${chalk.red('提交信息不符合规范,请参考https://github.com/guozebin-x/commit/tree/feature')}`);
  return
}
async function commit() {
  try {
    let { stdout } = await execa('git', ['add', '.']);
    console.log(stdout);
  } catch (e) {
    console.log(e.stdout);
  }

  try {
    let { stdout } = await execa('git', ['commit', '-m', msg]);
    console.log(stdout);
  } catch (e) {
    console.log(e.stdout);
  }

  try {
    let { stdout } = await execa('git', ['push', 'origin', branch]);
    console.log(stdout);
    console.log(`${chalk.green('✔')}  提交至${chalk.green(branch)}分支成功，提交信息 ${chalk.green(msg)}`);
  } catch (e) {
    console.log(e.stdout);
  }

}
commit()

