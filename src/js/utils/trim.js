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
import { ax } from '../global/namespace';
ax.trim = (str, placement) => {
    return placement === 'start' ? str.trimStart() :
        placement === 'end' ? str.trimEnd() :
            placement === 'both' ? str.trim() :
                placement === 'global' ? str.replace(/[\s\r\n]+/g, '') : str.trim().replace(/[\s\r\n]+/g, ' ');
};
