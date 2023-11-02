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
import { ax } from '../global/namespace';
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
