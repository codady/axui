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
import { ax } from '../global/namespace';
ax.getSelectorType = (str: string) => {
    if (typeof str !== 'string') {
        console.error('Requires string format!');
        return false;
    }
    str = str.trim();
    let type = '',
        isUpperCase = (letter: string) => (letter >= 'A' && letter <= 'Z') ? true : false;
    if (str) {
        if (str.includes(' ')) {
            type = 'nesting';
        } else {
            type = (str.startsWith('#') ? 'id' :
                str.startsWith('.') ? 'class' :
                    (str.startsWith('[') && str.endsWith(']')) ? 'attr' :
                        ([...str].every(i => isUpperCase(i))) ? 'node' : '');
        }
    }
    return type;
}
