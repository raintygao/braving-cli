const { promisify } = require('util');
const figlet = promisify(require('figlet'));
const clear = require('clear');
const chalk = require('chalk');
const { clone } = require('./template');
const open = require('open');

const spawn = async function(...args){
    const { spawn } = require('child_process');
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on('close',()=>{
            resolve();
        })
    })
}

const log = function(content){
    console.log(chalk.green(content));
}

module.exports = async name => {
    clear();
    const welcome = await figlet('hello Rain');
    log(welcome);
    
    log(`🚀创建中...${name}`);
    // await clone('github:su37josephxia/React-jianshu',name);

    log(`🏃安装依赖中...`)
    // await spawn('npm',['install'],{
    //     cwd:`./${name}`
    // })
    log(`
      Thank u for use braving-cli
      cd ${name}
      npm run start
    `)
    open('http://localhost:8080');
    await spawn('npm',['run','start'],{
        cwd:`./${name}`
    })
}