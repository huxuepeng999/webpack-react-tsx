var shell = require('shelljs');
const os = require('os');
const copy = require('recursive-copy');
const del = require('del');
const path = require('path')
const process = require('process')

class BuildApp {

    constructor() {
        this.init()
    }

    async init() {
        // shell.exec('cnpm install -g ios-sim ios-deploy')
        //在 macOS 系统上是 'Darwin'，在 Windows 系统上是 'Windows_NT'
        if (os.type() == 'Darwin') {
            shell.exec('sudo chmod -R 777 '+path.join(__dirname, './hello'))
            del.sync([path.join(__dirname, './hello')],{force:true})
            this.createApp()
            this.addPlugin()
            this.copyWWW()
        }
    }
    createApp() {
        shell.echo('create app')
        shell.cd('build')
        shell.exec('sudo cordova create hello com.hxp.hello HelloWorld')
        shell.exec('sudo chmod -R 777 '+path.join(__dirname, './hello'))
    }
    addPlugin() {
        shell.cd('hello')
        shell.echo('addPlugin')
        shell.exec('sudo cordova plugin add cordova-plugin-camera')
        shell.exec('sudo cordova plugin add cordova-clipboard')
    }
    addPlatform() {
        shell.echo('addPlatform')
        shell.exec('sudo cordova platform add ios --save')
        shell.exec('sudo chmod -R 777 '+path.join(__dirname, './hello'))
    }
    copyWWW() {
        shell.echo('copyWWW')
        del.sync([path.join(__dirname, './hello/www')],{force:true})
        const copyPath = process.env.NODE_ENV == 'development' ? '../dist' : '../release'
        var _this = this
        copy(path.join(__dirname, copyPath),path.join(__dirname, './hello/www'))
        .then(function(results) {
            console.info('Copied ' + results.length + ' files');
            shell.exec('sudo chmod -R 777 '+path.join(__dirname, './hello/www'))
            _this.addPlatform()
        })
        .catch(function(error) {
            console.error('Copy failed: ' + error);
        });
    }
}

module.exports = new BuildApp()