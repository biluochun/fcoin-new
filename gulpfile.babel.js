/**
 * @file
 * @author jinguangguo
 * @date 2018/8/27 上午10:29
 */

import fs from 'fs';
const path = require('path');
const exec = require('child_process').exec;
import gulp from 'gulp';
import GulpSSH from 'gulp-ssh';

const SERVER_HOST_TEST = '18.179.7.59';
const PORT = 22;
const USERNAME = 'ubuntu';
const PATH = '/home/ubuntu/fcoin-web-www/dist';

let gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: {
        host: SERVER_HOST_TEST,
        port: PORT,
        username: USERNAME,
        privateKey: fs.readFileSync(path.resolve(__dirname, './id_rsa'))
    }
});

gulp.task('build', (cb) => {
    exec('node build/build.js', (err, stdout, stderr) => {
        console.log(stdout);
        if (stderr) {
            console.log(stderr);
        }
        cb(err);
    });
});

gulp.task('build:test', (cb) => {
    exec('npm run build:test', (err, stdout, stderr) => {
        console.log(stdout);
        if (stderr) {
            console.log(stderr);
        }
        cb(err);
    });
});

gulp.task('build:prod', (cb) => {
    exec('npm run build:prod', (err, stdout, stderr) => {
        console.log(stdout);
        if (stderr) {
            console.log(stderr);
        }
        cb(err);
    });
});

gulp.task('scp', () => {
    return gulp.src(['./dist/**/*'])
        .pipe(gulpSSH.dest(PATH));
});

gulp.task('scp:build', ['build'], () => {
    gulp.start('scp');
});

gulp.task('scp:build:test', ['build:test'], () => {
    gulp.start('scp');
});

gulp.task('scp:build:prod', () => {
    gulp.start('scp');
});
