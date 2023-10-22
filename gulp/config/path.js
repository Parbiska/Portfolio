import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        img: `${srcFolder}/img/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        fonts: `${srcFolder}/fonts/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        img: `${srcFolder}/img/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        fonts: `${srcFolder}/fonts/**/*.*`,
    },
    srcFolder: srcFolder,
    clean: buildFolder,
}