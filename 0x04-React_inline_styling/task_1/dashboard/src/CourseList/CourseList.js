import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types'; // ES6
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

function CourseList({ listCourses }) {
    return (
        <div className={css(styles.containerCourse)}>
            <table className={css(styles.table)} id="CourseList">
                <thead>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="Available courses"
                    ></CourseListRow>
                    <CourseListRow
                        isHeader={true}
                        textFirstCell="Course name"
                        textSecondCell="Credit"
                    ></CourseListRow>
                </thead>
                <tbody>
                    {listCourses.length === 0 ? (
                        <CourseListRow
                            textFirstCell="No course available yet"
                            isHeader={false}
                        />
                    ) : null}
                    {listCourses.map((course) => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const styles = StyleSheet.create({
    containerCourse: {
        minHeight: '26rem',
        padding: '1rem',
    },

    table: {
        width: '100%',
    },

    thead: {
        textAlign: 'center',
        ':first-of-type': {
            textAlign: 'center',
        },
        ':last-of-type': {
            borderLeft: 0,
            borderRight: 0,
        },
    },

    th: {
        padding: '0.25rem',
        border: '1px solid lightgray',
        textAlign: 'left',
    },

    td: {
        padding: '0.25rem',
        border: '1px solid lightgray',
        ':first-of-type': {
            borderRight: 0,
        },
        ':last-of-type': {
            borderLeft: 0,
        },
    },
});

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
