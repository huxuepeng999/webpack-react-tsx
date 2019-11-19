var shell = require('shelljs');
const os = require('os');
const copy = require('recursive-copy');
const del = require('del');

class BuildApp {

    constructor() {
        this.init()
    }

    async init() {
        // shell.exec('cnpm install -g ios-sim ios-deploy')
        shell.cd('build')
        shell.echo(os.type())//在 macOS 系统上是 'Darwin'，在 Windows 系统上是 'Windows_NT'
        if (os.type() == 'Darwin') {
            del.sync(["./build/hello/**"],{force:true})
            shell.echo('create app')
            shell.exec('sudo cordova create hello com.example.hello HelloWorld')
            shell.cd('hello')
            this.addPlugin()
            this.addPlatform()
            this.copyWWW()
        }
    }
    addPlugin() {
        shell.echo('addPlugin')
        shell.exec('sudo cordova plugin add cordova-plugin-camera')
    }
    addPlatform() {
        shell.echo('addPlatform')
        shell.exec('sudo cordova platform add ios --save')
    }
    copyWWW() {
        copy('../dist','./hello/www')
    }
}

module.exports = new BuildApp()