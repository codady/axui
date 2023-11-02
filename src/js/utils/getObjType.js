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
import { ax } from '../global/namespace';
ax.getObjType = (obj) => Object.prototype.toString.call(obj).slice(8, -1);
