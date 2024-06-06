import { Map, List } from './node_modules/immutable/dist/immutable.js';

/**
 * Concatenates two arrays into a single immutable List.
 *
 * @param {Array} page1 - The first array to concatenate.
 * @param {Array} page2 - The second array to concatenate.
 * @returns {List} A new immutable List containing elements from both arrays.
 */
export function concatElements(page1, page2) {
    const list1 = List(page1);
    const list2 = List(page2);

    return list1.concat(list2);
}

/**
 * Merges two objects into a single immutable Map.
 *
 * @param {Object} page1 - The first object to merge.
 * @param {Object} page2 - The second object to merge.
 * @returns {Map} A new immutable Map containing merged key-value pairs from both objects.
 */
export function mergeElements(page1, page2) {
    const map1 = Map(page1);
    const map2 = Map(page2);

    return map1.merge(map2);
}
