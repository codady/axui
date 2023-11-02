(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ax = factory());
})(this, (function () { 'use strict';

    /**
     * @since Last modified: 2023-11-01 19:36:15
     * @name ax
     * @author AXUI development team <3217728223@qq.com>
     * @license MIT license
     * @description Namespaces.Tool functions, plug-ins, and modules start with "ax.*", Such as ax.getDom () and new ax.popup ().
     * @see {@link https://www.axui.cn|Official website}
     * @see {@link https://github.com/axui/axui/issues|github issues}
     * @see {@link https://gitee.com/axui/axui/issues|Gitee issues}
     * @issue QQ Group No.1:952502085
     */
    const ax = {
        version: 'v3.0.0',
    };

    /**
     * Last modified: 2023-10-31 23:01:11
     */
    ax.lang = {};

    /**
     * @since Last modified: 2023-11-01 15:33:48
     * @function ax&period;trim
     * @description Clear string space, change and return.Supporting the space in multiple positions, which is more powerful than the native "trim" method.
     * @param {string} str - Any string.
     * @param {string} [placement] - Clear the position of the space, you can fill in the value: 'start' | 'end' | 'both' | 'global', can be empty or not filled in.
     * @returns {string}  - Returns the string after clearing the space without changing the original string.
     * @see {@link https://www.axui.cn|Official documentation}
     * @example
     * ax.trim('   My name     is Lily  ');
     */
    ax.trim = (str, placement) => {
        return placement === 'start' ? str.trimStart() :
            placement === 'end' ? str.trimEnd() :
                placement === 'both' ? str.trim() :
                    placement === 'global' ? str.replace(/[\s\r\n]+/g, '') : str.trim().replace(/[\s\r\n]+/g, ' ');
    };

    /**
     * @since Last modified: 2023-11-01 19:36:11
     * @function ax&period;getObjType
     * @description Get object type.Can detect object types such as Array, Object, Function, String, Number, Boolean, Date, Symbol , Null, Undefined, HTML*Element (Dom nodes all contain HTML)
     * @param {*} obj - Can be any object
     * @returns {string} - Return the data type name
     * @see {@link https://www.axui.cn|Official documentation}
     * @example
     * ax.getObjType(100);
     */
    ax.getObjType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);

    /**
     * @since Last modified: 2023-11-01 15:33:52
     * @function ax&period;getSelectorType
     * @description Get node selector string type.'#demo' is judged as 'ID' with#; '. Demo' is judged as 'class'; 'demo' uppercase judgment as 'node'; '[demo]' medium bracket package is judged as 'attr'; 'DIV P' has a space for the father and son, and the judgment is 'Nesting'; other string returns the empty value.
     * @param {string} str -  Any text string.
     * @return {string|''} - Returns the selector type, that is, if the return value is true, the querySelector method can be used to select the node.
     * @see {@link https://www.axui.cn|Official documentation}
     * @example
     * ax.getSelectorType('#demo');
     */
    ax.getSelectorType = (str) => {
        if (typeof str !== 'string') {
            console.error('Requires string format!');
            return false;
        }
        str = str.trim();
        let type = '', isUpperCase = (letter) => (letter >= 'A' && letter <= 'Z') ? true : false;
        if (str) {
            if (str.includes(' ')) {
                type = 'nesting';
            }
            else {
                type = (str.startsWith('#') ? 'id' :
                    str.startsWith('.') ? 'class' :
                        (str.startsWith('[') && str.endsWith(']')) ? 'attr' :
                            ([...str].every(i => isUpperCase(i))) ? 'node' : '');
            }
        }
        return type;
    };

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
    ax.renderTpl = (html, data) => {
        if (!html) {
            console.error(`Parameter "html" cannot be empty!`);
            return false;
        }
        let tplReg = /<#=?([\s\S]+?)?#>/g, keyReg = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, code = 'let result=[];\n', cursor = 0, match, add = (fragment, isJs) => {
            isJs ? (code += fragment.match(keyReg) ? fragment + '\n' : 'result.push(' + fragment + ');\n')
                : (code += fragment !== '' ? 'result.push("' + fragment.replace(/"/g, '\\"') + '");\n' : '');
            return add;
        };
        while (match = tplReg.exec(html)) {
            add(html.slice(cursor, match.index))(match[1], true);
            cursor = match.index + match[0].length;
        }
        add(html.slice(cursor));
        code += `return result.join('');`;
        return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
    };

    /**
     * @since Last modified: 2023-11-01 19:17:57
     * @function ax&period;isEmpty
     * @description Determine whether it is empty data.The data itself is empty data: 0| ''|false|undefined|null; <br>empty function: function () {}|() => {}; <br>empty array and empty objects: []|{}| [null]| [ undefined]| ['']| [""];<br> empty symbol object: symbol()|symbol.For(), will be judged as empty.
     * @param {*} data  - Can be any data
     * @returns {boolean}  - Return true or false
     * @see {@link https://www.axui.cn|Official documentation}
     * @example
     * ax.isEmpty([null]);
     */
    ax.isEmpty = (data) => {
        let type = ax.getObjType(data), flag;
        if (!data) {
            flag = true;
        }
        else {
            flag = (type === 'Object') ? (Object.keys(data).length === 0) :
                (type === 'Array') ? data.join('') === '' :
                    (type === 'Function') ? (data.toString().replace(/\s+/g, '').match(/{.*}/g)[0] === '{}') :
                        (type === 'Symbol') ? (data.toString().replace(/\s+/g, '').match(/\(.*\)/g)[0] === '()') : false;
        }
        return flag;
    };

    /**
     * @since Last modified: 2023-11-01 15:33:53
     * @function ax&period;getDom
     * @description Get a node.Support to get a real node or virtual node
     * @param {string|node} obj  - It can be nodes or nodes or nodes such as#ID, .classname, NODENAME, [attribute]
     * @param {node} parent  - Parent node, get sub -nodes from this node, default document.body
     * @returns {node|false} Return a node or false
     * @see {@link https://www.axui.cn|Official documentation}
     * @example
     * ax.getDom('#demo');
     */
    ax.getDom = (obj, parent = document.body) => {
        let type = ax.getObjType(obj);
        if (!obj) {
            console.warn('Incorrect selection format format!');
            return false;
        }
        else if (type === 'String') {
            let trim = obj.trim();
            if (ax.getSelectorType(trim)) {
                return parent.querySelector(trim);
            }
            else {
                console.warn(`Can't find this node!`);
                return false;
            }
        }
        else if (type.includes('HTML')) {
            return obj;
        }
        else {
            return false;
        }
    };

    /**
     * Last modified: 2023-11-01 15:35:45
     */
    console.log('AXUI version:', ax.version);

    return ax;

}));
