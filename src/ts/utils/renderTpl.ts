/**
 * @since Last modified: 2023-11-01 15:33:50
 * @function ax&period;renderTpl
 * @description Get template string through parameters.Cut the template strings into fragments through labels, and put into the array through the PUSH method, and finally merge into a new string.
 * @param {string} html - Text string with variables, for example: html=`I like <#this.name#>, she is <#this.age#> years old`.
 * @param {object} data - Variable key-value pairs, for example: data={name:'Lily',age:20}.
 * @returns {string}  - Get the string after the variable.
 * @see {@link https://www.axui.cn|Official documentation}
 * @example
 * ax.renderTpl(`My name is <#this.name#>`,{name:'axui'});
 */
import { ax } from '../global/namespace';
ax.renderTpl = (html: string, data: object) => {
    if (!html) {
        console.error(`Parameter "html" cannot be empty!`)
        return false;
    }
    let tplReg = /<#=?([\s\S]+?)?#>/g,
        keyReg = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g,
        code = 'let result=[];\n',
        cursor = 0,
        match: any,
        add = (fragment: string, isJs?: boolean) => {
            isJs ? (code += fragment.match(keyReg) ? fragment + '\n' : 'result.push(' + fragment + ');\n')
                : (code += fragment !== '' ? 'result.push("' + fragment.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        }
    while (match = tplReg.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }
    add(html.slice(cursor));
    code += `return result.join('');`;
    return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
}
