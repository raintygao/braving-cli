const { promisify } = require('util');
const ora = require('ora');
const downloadRepo = require('download-git-repo');

module.exports.clone = async function(repo,desc){
    const download = promisify(downloadRepo);
    const process = ora(`download......${repo}`);
    process.start();
    await download(repo,desc);
    process.succeed();
}