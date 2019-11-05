#!/usr/bin/env node
const execa = require('execa');
const chalk = require('chalk')
let branch = process.argv.slice(2)[1] || 'test'
let msg = process.argv.slice(2)[0]


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

