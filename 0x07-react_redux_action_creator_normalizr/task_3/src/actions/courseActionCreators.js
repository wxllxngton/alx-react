const { SELECT_COURSE, UNSELECT_COURSE } = require('./courseActionTypes');

/**
 * Creates an action to select a course.
 *
 * @param {number} index - The index of the course to select.
 * @returns {Object} The action object with type 'SELECT_COURSE' and the course index.
 */
const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

/**
 * Creates an action to unselect a course.
 *
 * @param {number} index - The index of the course to unselect.
 * @returns {Object} The action object with type 'UNSELECT_COURSE' and the course index.
 */
const unSelectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
};

module.exports = {
    selectCourse,
    unSelectCourse,
};
