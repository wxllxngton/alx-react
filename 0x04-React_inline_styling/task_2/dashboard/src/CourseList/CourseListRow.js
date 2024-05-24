import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    headerRow: {
        backgroundColor: '#f5f5f5ab',
    },
    defaultRow: {
        backgroundColor: '#f5f5f5ab',
    },
    headerCell: {
        fontWeight: 'bold',
        padding: '8px',
    },
    cell: {
        padding: '8px',
    },
});

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let trContent;

    if (isHeader) {
        if (textSecondCell === null) {
            trContent = (
                <th className={css(styles.headerCell)} colSpan="2">
                    {textFirstCell}
                </th>
            );
        } else {
            trContent = (
                <React.Fragment>
                    <th className={css(styles.headerCell)}>{textFirstCell}</th>
                    <th className={css(styles.headerCell)}>{textSecondCell}</th>
                </React.Fragment>
            );
        }
    } else {
        trContent = (
            <React.Fragment>
                <td className={css(styles.cell)}>{textFirstCell}</td>
                <td className={css(styles.cell)}>{textSecondCell}</td>
            </React.Fragment>
        );
    }

    return (
        <tr className={css(isHeader ? styles.headerRow : styles.defaultRow)}>
            {trContent}
        </tr>
    );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;
