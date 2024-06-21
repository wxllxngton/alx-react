import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Tests action creators', () => {
    it('should return a selectCourse action', () => {
        const result = selectCourse(1);
        expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
    });

    it('should return a unSelectCourse action', () => {
        const result = unSelectCourse(1);
        expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});
