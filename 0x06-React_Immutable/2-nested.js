import { fromJS } from './node_modules/immutable/dist/immutable.js';

/**
 * Returns the value of the object at the defined path.
 *
 * @param {Object} object - The plain object.
 * @param {Array} array - Array containing the path to a key in the object.
 * @returns {String|Map|Number|undefined} The value at the defined path,
 * or undefined if the path does not exist.
 */
export default function accessImmutableObject(object, array) {
    const mapObj = fromJS(object);

    return mapObj.getIn(
        array,
        undefined
    );
}
