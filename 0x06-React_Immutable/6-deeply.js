import { Map } from './node_modules/immutable/dist/immutable.js';

/**
 * Merges two objects deeply into an immutable Map and returns the Map.
 *
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {Map} A new immutable Map with the deeply merged key-value pairs from both objects.
 */
const mergeDeeplyElements = function (page1, page2) {
    const map = Map(page1);


    return map.mergeDeep(page2);
};

export default mergeDeeplyElements;
