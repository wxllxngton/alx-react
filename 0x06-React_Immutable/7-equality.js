import { is } from './node_modules/immutable/dist/immutable.js';

/**
 * Compares two immutable Maps for equality.
 *
 * @param {Map} map1 - The first immutable Map to compare.
 * @param {Map} map2 - The second immutable Map to compare.
 * @returns {boolean} True if the Maps are equal, false otherwise.
 */
export default function areMapsEqual(map1, map2) {
    return is(
        map1,
        map2
    );
}
