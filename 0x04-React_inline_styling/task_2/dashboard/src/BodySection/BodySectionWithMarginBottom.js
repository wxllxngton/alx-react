import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends React.Component {
    render() {
        return (
            <div className={(css(styles.body), 'bodySectionWithMargin')}>
                <BodySection
                    title={this.props.title}
                    children={this.props.children}
                ></BodySection>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        marginTop: '40px',
    },
});

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
};

BodySectionWithMarginBottom.defaultProps = {
    title: '',
};

export default BodySectionWithMarginBottom;
