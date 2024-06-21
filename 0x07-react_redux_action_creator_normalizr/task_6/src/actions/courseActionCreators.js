import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

/**
 * Creates an action to select a course.
 *
 * @param {number} index - The index of the course to select.
 * @returns {Object} The action object with type 'SELECT_COURSE' and the course index.
 */
export const selectCourse = (index) => {
    return {
        type: SELECT_COURSE,
        index,
    };
};

/**
 * Bound action creator for selecting a course. Dispatches the selectCourse action.
 *
 * @param {number} index - The index of the course to select.
 */
export const boundSelectCourse = (index) => dispatch(selectCourse(index));

/**
 * Creates an action to unselect a course.
 *
 * @param {number} index - The index of the course to unselect.
 * @returns {Object} The action object with type 'UNSELECT_COURSE' and the course index.
 */
export const unselectCourse = (index) => {
    return {
        type: UNSELECT_COURSE,
        index,
    };
};

/**
 * Bound action creator for unselecting a course. Dispatches the unselectCourse action.
 *
 * @param {number} index - The index of the course to unselect.
 */
export const boundUnselectCourse = (index) => dispatch(unselectCourse(index));
