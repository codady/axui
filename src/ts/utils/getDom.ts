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
import { ax } from '../global/namespace';
ax.getDom = (obj:any, parent:any = document.body) => {
    let type = ax.getObjType(obj);
    if (!obj) {
        console.warn('Incorrect selection format format!');
        return false;
    } else if (type === 'String') {
        let trim = obj.trim();
        if (ax.getSelectorType(trim)) {
            return parent.querySelector(trim);
        } else {
            console.warn(`Can't find this node!`);
            return false;
        }
    } else if (type.includes('HTML')) {
        return obj;
    } else {
        return false;
    }
}
