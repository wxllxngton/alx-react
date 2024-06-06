import { Seq } from './node_modules/immutable/dist/immutable.js';

/**
 * Converts the first character of a string to uppercase and the rest to lowercase.
 *
 * @param {string} string - The string to convert.
 * @returns {string} The string in title case.
 */
function toTitleCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Filters and processes students with a score above 70, converting their names to title case,
 * and prints the result.
 *
 * @param {Object} object - The object containing student data.
 */
export default function printBestStudents(object) {
    const seq = Seq(object);

    const filtered = seq.filter((student) => {
        return student.score > 70;
    });

    const JSObject = filtered.toJS();

    Object.keys(JSObject).forEach((key) => {
        JSObject[key].firstName = toTitleCase(JSObject[key].firstName);
        JSObject[key].lastName = toTitleCase(JSObject[key].lastName);
    });

    console.log(JSObject);
}
