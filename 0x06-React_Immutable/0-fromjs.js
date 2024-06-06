import { fromJS } from './node_modules/immutable/dist/immutable.js';

/**
 * Converts an object into an immutable Map using fromJS.
 *
 * @param {Object} object - The object to be converted.
 * @returns {Immutable.Map} An immutable Map representation of the input object.
 */
export default function getImmutableObject(object) {
    return fromJS(object);
}

console.log(
    getImmutableObject({
        fear: true,
        smell: -1033575916.9145899,
        wall: false,
        thing: -914767132,
    })
);
