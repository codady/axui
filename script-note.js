//获得文件头注释
import pkg from './package.json' assert { type: 'json' };
const now = new Date();
const times = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
//打包后的文件会丢失入口文件的注释，需要在这里插入，使用/*!可以避免css压缩min文件是被删掉
const note = `
/*!
 * @since Last modified: ${times}
 * @name AXUI front-end framework.
 * @version ${pkg.version}
 * @author AXUI development team <3217728223@qq.com>
 * @description The AXUI front-end framework is built on HTML5, CSS3, and JavaScript standards, with TypeScript used for type management.
 * @see {@link https://www.axui.cn|Official website}
 * @see {@link https://github.com/codady/axui/issues|github issues}
 * @see {@link https://gitee.com/codady/axui/issues|Gitee issues}
 * @see {@link https://www.npmjs.com/package/@codady/axui|NPM}
 * @issue QQ Group No.1:952502085
 * @copyright This software supports the MIT License, allowing free learning and commercial use, but please retain the terms 'ax,' 'axui,' 'AX,' and 'AXUI' within the software.
 * @license MIT license
 */
`;
export default note;