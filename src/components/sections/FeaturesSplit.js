import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Services',
    paragraph: null
  };

  const features = {
    webApplicationDevelopment: ["Java Application Development", "Node.js Application Development", "Python Application Development", "React Application Development", "Angular Application Development", "Spring Boot Application Development", "PHP Application Development"],
    mobileApplicationDevelopment: ["Android App Development", "iOS / iPadOS App Development", "Cross Platform App Development"],
    cloudSolutions: ["Serverless","Kubernetes","AWS/Azure/GCP","DevOps","Integration"],
    emergingTechnologies: ["Machine Learning Consulting", "Big Data Analytics Services", "Internet of Things (IoT) Technology", "Cloud Computing Consulting", "AR App Development"],
    managedIt: []
  }

  function createServiceList(list) {
    return (
      <ul className="service-list text-color-high fw-600">
        {list.map((l, index) => {
          return <li key={index}>{l}</li>
        })}
      </ul>
    );
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Responsive Websites
                  </div>
                <h3 className="mt-0 mb-12">
                  Web Application Development
                  </h3>
                {/* <p className="m-0">
                  Think big to achieve big! Anything is possible when you partner with the leading web application development company – Animo Labs. With advanced technologies, proven methodologies and creative experts, we provide custom web application development services that facilitate business transformation.
                  </p> */}
                <p className="m-0">
                  As a web application development company, we understand every business has unique requirements. Our experienced developers have deep expertise in developing custom web apps for enterprises, eCommerce stores, financial organizations, start-ups, and other industries. We handle the entire web app development process, from designing, HTML, coding, programming, testing to deployment.
                  </p>
                {createServiceList(features.webApplicationDevelopment)}
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Robust Apps
                  </div>
                <h3 className="mt-0 mb-12">
                  Mobile App Development
                  </h3>
                <p className="m-0">
                  Animo Labs is a leading mobile app development company, with expertise in mobile application strategy planning, stunning design and impeccable development services for Android, iPhone and Cross platforms. From simple to complex, we don't just build mobile apps, we build mobile experiences.
                  </p>
                {/* <p className="m-0">
                    Our comprehensive range of mobile app development services include everything from consulting, UX/UI designing, developing, launching to managing your app after deployment. We build apps for B2E, B2B, and B2C processes.
                  </p> */}
                {createServiceList(features.mobileApplicationDevelopment)}
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Scalability at core
                  </div>
                <h3 className="mt-0 mb-12">
                  Cloud Solutions
                  </h3>
                <p className="m-0">
                  Animo Labs is uniquely qualified to assess your business's cloud readiness and determine which IT solutions support your goals most effectively.
                  </p>
                <p className="m-0">
                  We are experts in working with the AWS(/Azure/GCP) platform. We can provide strategic consulting and hands-on development skills - backed up by real life experience of having been through the same journey ourselves.
                  </p>
                <p className="m-0">
                  Talk to us if you need help with:
                  </p>
                {createServiceList(features.cloudSolutions)}
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cutting Edge Tech
                  </div>
                <h3 className="mt-0 mb-12">
                  Emerging Technologies
                  </h3>
                {/* <p className="m-0">
                  Business growth is fueled by incorporating new and emerging technologies in business processes. With customized emerging information technology services, Animo Labs has helped both small companies and large enterprises to achieve greater productivity and business agility. Let's leverage the power of digital emerging technologies together!
                  </p> */}
                <p className="m-0">
                  At Animo Labs, we pride ourselves on being at the forefront of IT technology and innovation. We empower our clients with ideas and strategies to leverage emerging technologies, such as IoT, Big Data, Machine Learning, Cloud Computing and more, to drive transformational growth of your business. Our emerging technology services will let you embrace opportunities, enhance customer engagement and tap into new markets.
                  </p>
                {createServiceList(features.emergingTechnologies)}
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Automated IT
                  </div>
                <h3 className="mt-0 mb-12">
                  Managed IT
                  </h3>
                <p className="m-0">
                  Imagine having the ability to leave your office every evening, knowing that the security and continuity of your company are in good hands. Animo Labs’ IT Managed Services do just that - 24/7. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;