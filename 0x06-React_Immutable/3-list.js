import { List } from './node_modules/immutable/dist/immutable.js';

/**
 * Converts an array into an immutable List.
 *
 * @param {Array} array - The array to be converted.
 * @returns {List} An immutable List representation of the input array.
 */
export function getListObject(array) {
    return List(array);
}

/**
 * Adds an element to an immutable List and returns the new List.
 *
 * @param {List} list - The immutable List.
 * @param {*} element - The element to add to the List.
 * @returns {List} The new List with the added element.
 */
export function addElementToList(list, element) {
    return list.push(element);
}
