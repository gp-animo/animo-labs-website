import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults
}

const BragSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'brag-section section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'brag-section-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // const sectionHeader = {
  //   title: '',
  //   paragraph: 'Contact us and let us show you how we can help you get ahead in your IT architecture'
  // }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container font-">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <h4 className="center-content">
            Tired of paying Big dollars to the Top Consulting Firms for your IT solutions and only getting mixed results?
            </h4>
          <h4 className="center-content">
            Contact us and let us help you get ahead in your IT architecture
          </h4>
        </div>
      </div>
    </section>
  );
}

BragSection.propTypes = propTypes;
BragSection.defaultProps = defaultProps;

export default BragSection;