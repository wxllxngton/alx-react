import React from 'react';
import PropTypes from 'prop-types'; // ES6

const headerStyle = {
    backgroundColor: '#f5f5f5ab',
};

const rowStyle = {
    backgroundColor: '#f5f5f5ab',
};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let trContent = '';

    if (isHeader) {
        if (textSecondCell === null) {
            trContent = (
                <th style={headerStyle} colSpan="2">
                    {textFirstCell}
                </th>
            );
        } else {
            trContent = (
                <React.Fragment>
                    <th style={headerStyle}>{textFirstCell}</th>
                    <th style={headerStyle}>{textSecondCell}</th>
                </React.Fragment>
            );
        }
    } else {
        trContent = (
            <React.Fragment>
                <td style={rowStyle}>{textFirstCell}</td>
                <td style={rowStyle}>{textSecondCell}</td>
            </React.Fragment>
        );
    }

    return <tr>{trContent}</tr>;
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
